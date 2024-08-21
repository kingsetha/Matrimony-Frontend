import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SingleProfileManagement = () => {
    const userid = sessionStorage.getItem("UserId");
    const [profileData, setProfileData] = useState({
        email: '',
        password: '',
        role: '' // Only relevant fields according to the updated backend model
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProfileData(data);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveClick = async () => {
        try {
            const response = await fetch(`http://localhost:1002/User/update/${userid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });
            if (response.ok) {
                setIsEditing(false);
                fetchData(); // Refresh data after saving
                alert('Profile updated successfully');
            } else {
                alert('Failed to update profile. Please try again.');
            }
        } catch (error) {
            alert('An error occurred while updating the profile. Please try again later.');
        }
    };

    useEffect(() => {
        fetchData();
    }, [userid]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

    const downloadPDF = () => {
        const input = document.getElementById('profile-data');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 210; // Width in mm
                const pageHeight = 295; // Height in mm
                const imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                pdf.save('profile-data.pdf');
            });
    };

    return (
        <div>
            <div className="banner">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-text">
                                    <h2>Manage Profile</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
                <div className="container">
                    <div className="row gy-5 g-lg-4">
                        <div className="col-lg-1">
                            {/* Sidebar code here */}
                        </div>

                        <div className="col-lg-10">
                            <div className="dashboard-content profile-setting">
                                <div className="row">
                                    <div className="col-12">
                                        <button 
                                            type="button" 
                                            className="btn-flower2 btn-full mb-3" 
                                            onClick={downloadPDF}
                                        >
                                            Download as PDF
                                        </button>
                                        <div className="row">
                                            <div className="col">
                                                <div className="accordion" id="accordionExample">
                                                    <h2>Account Information</h2>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="accountInformation">
                                                            <form action="" method="post" encType="multipart/form-data">
                                                                <div id="profile-data">
                                                                    <div className="row g-3 g-md-4">
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
                                                                            <input
                                                                                type="email"
                                                                                className="form-control"
                                                                                name="email"
                                                                                value={profileData.email}
                                                                                placeholder="Email"
                                                                                onChange={handleChange}
                                                                                readOnly={!isEditing} // Disable editing for email
                                                                            />
                                                                        </div>
                                                                        
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="password">Password</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="password" 
                                                                                className="form-control" 
                                                                                name="password"
                                                                                value={profileData.password} 
                                                                                onChange={handleChange} 
                                                                                disabled={!isEditing} // Disable editing for password if not in editing mode
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="role">Role</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="role" 
                                                                                value={profileData.role} 
                                                                                onChange={handleChange} 
                                                                                disabled={!isEditing} // Disable editing for role if not in editing mode
                                                                            />
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 text-end">
                                                                    {isEditing ? (
                                                                        <button 
                                                                            type="button" 
                                                                            className="btn-flower2 btn-full mt-2" 
                                                                            onClick={handleSaveClick}
                                                                        >
                                                                            Save
                                                                        </button>
                                                                    ) : (
                                                                        <button 
                                                                            type="button" 
                                                                            className="btn-flower2 btn-full mt-2" 
                                                                            onClick={handleEditClick}
                                                                        >
                                                                            Edit
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </form>
                                                        </h5>
                                                        <div
                                                            id="collapseAccountInformation"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="accountInformation"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                        </div>
                                                    </div>

                                                    {/* Additional sections or modals can be added here if needed */}
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

export default SingleProfileManagement;
