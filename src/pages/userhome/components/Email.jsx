
import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const EmailTemplate = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialTo = params.get('to') || '';
    const requestPhoneNumber = params.get('requestPhoneNumber') === 'true'; // Check if checkbox was ticked

    const userid = sessionStorage.getItem("UserId");
    const [emailData, setEmailData] = useState({
        from: '',
        to: initialTo,
        subject: ' Your Profile Caught My Eye – Let’s Connect!',
        body: '', // Initialize as empty; will be set based on the checkbox state
    });
    const [pdfFile, setPdfFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const generatePDF = (profileData) => {
        const doc = new jsPDF();
        doc.text(`User Profile`, 10, 10);
        doc.text(`Name: ${profileData.firstname}`, 10, 20);
        doc.text(`Email: ${profileData.email}`, 10, 30);
        doc.text(`Address: ${profileData.address}`, 10, 40);
        doc.text(`Age: ${profileData.age}`, 10, 50);
        doc.text(`Religion: ${profileData.religion}`, 10, 60);
        doc.text(`Marital Status: ${profileData.maritalstatus}`, 10, 70);
        doc.text(`Current Salary: ${profileData.currentsalary}`, 10, 80);
        doc.text(`Occupation: ${profileData.occupation}`, 10, 90);
        doc.text(`Height: ${profileData.height}`, 10, 100);
        doc.text(`Weight: ${profileData.weight}`, 10, 110);
        doc.text(`Date of Birth: ${profileData.dob}`, 10, 120);

        return doc.output('blob');
    };

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if (!data || !data.email) {
                throw new Error('Invalid user data: Missing email');
            }

            setEmailData((prevData) => ({
                ...prevData,
                from: data.email || '',
                body: requestPhoneNumber 
                    ? 'Dear soulmate,\n\nCould you please share your mobile number with me at your earliest convenience? It would help us stay in touch more effectively.\n\nThank you!' 
                    : 'Dear soulmate,\n\nYour profile caught my eye!If you are up for it.I had love to chat and see if we have some common interests.\n\nBest regards,\nYour Dream Match',
            }));

            const pdfBlob = generatePDF(data);
            const pdfFile = new File([pdfBlob], 'profile.pdf', { type: 'application/pdf' });
            setPdfFile(pdfFile);
        } catch (error) {
            setError(`Error fetching data: ${error.message}`);
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (userid) {
            fetchData();
        } else {
            setError('User ID is missing');
        }
    }, [userid]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData({
            ...emailData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('from', emailData.from);
            formData.append('to', emailData.to);
            formData.append('subject', emailData.subject);
            formData.append('body', emailData.body);

            if (pdfFile) {
                formData.append('attachment', pdfFile);
            }

            const response = await fetch(`http://localhost:1002/User/sendEmail`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const contentType = response.headers.get('Content-Type');
            let responseData;
            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }

            console.log('Email sent successfully:', responseData);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Email sent successfully!',
            });

        } catch (error) {
            setError(`Error sending email: ${error.message}`);
            console.error('Error sending email:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Error sending email: ${error.message}`,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
                <div className="container">
                    <div className="row gy-5 g-lg-4">
                        <div className="col-lg-3">
                            {/* Sidebar code here */}
                        </div>

                        <div className="col-lg-6">
                            <div className="dashboard-content profile-setting">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col">
                                                <div className="accordion" id="accordionExample">
                                                    <h2>Send Email</h2>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="basicInformation">
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="row g-3 g-md-4">
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="from">From</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="from"
                                                                            value={emailData.from}
                                                                            placeholder="Enter your email"
                                                                            onChange={handleChange}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="to">To</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="to"
                                                                            value={emailData.to}
                                                                            placeholder="Enter recipient's email"
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="subject">Subject</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="subject"
                                                                            value={emailData.subject}
                                                                            placeholder="Enter subject"
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="body">Body</label> <span className="text-danger">*</span>
                                                                        <textarea
                                                                            name="body"
                                                                            cols="30"
                                                                            rows="10"
                                                                            className="form-control"
                                                                            placeholder="Enter email body"
                                                                            value={emailData.body}
                                                                            onChange={handleChange}
                                                                        ></textarea>
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="attachment">Attachment</label>
                                                                        <div className="text-danger">
                                                                            {pdfFile && (
                                                                                <a href={URL.createObjectURL(pdfFile)} target="_blank" rel="noopener noreferrer">
                                                                                    View Profile PDF
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 text-end">
                                                                        <button type="submit" className="btn-flower2 btn-full mt-2" disabled={isLoading}>
                                                                            {isLoading ? 'Sending...' : 'Send'}
                                                                        </button>
                                                                    </div>
                                                                    {error && (
                                                                        <div className="col-12 text-danger mt-2">
                                                                            {error}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </form>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmailTemplate;
