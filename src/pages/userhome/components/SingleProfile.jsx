// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useNavigate } from 'react-router-dom';
// // // // import './profile.css';

// // // // const SingleProfileManagement = () => {
// // // //     const navigate = useNavigate();
// // // //     const { userid } = useParams();
// // // //     const [profileData, setProfileData] = useState({
// // // //         firstname: '',
// // // //         lastname: '',
// // // //         email: '',
// // // //         mobilenumber: '',
// // // //         gender: '',
// // // //         dob: '',
// // // //         maritalstatus: '',
// // // //         photourl: '',
// // // //         religion: '',
// // // //         currentsalary: '',
// // // //         height: '',
// // // //         weight: '',
// // // //         occupation: '',
// // // //         password: '',
// // // //         address: ''
// // // //     });

// // // //     const [isLoading, setIsLoading] = useState(false);
// // // //     const [error, setError] = useState(null);

// // // //     const fetchData = async () => {
// // // //         setIsLoading(true);
// // // //         try {
// // // //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// // // //             if (!response.ok) {
// // // //                 throw new Error('Network response was not ok');
// // // //             }
// // // //             const data = await response.json();
// // // //             setProfileData(data);
// // // //         } catch (error) {
// // // //             setError('Error fetching data');
// // // //             console.error('Error fetching data:', error);
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         fetchData();
// // // //     }, [userid]);

// // // //     const handleInterestClick = () => {
// // // //         navigate(`/Email?to=${encodeURIComponent(profileData.email)}`);
// // // //     };

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setProfileData({
// // // //             ...profileData,
// // // //             [name]: value
// // // //         });
// // // //     };

// // // //     const handleImageChange = (e) => {
// // // //         const file = e.target.files[0];
// // // //         const reader = new FileReader();
// // // //         reader.onloadend = () => {
// // // //             setProfileData({
// // // //                 ...profileData,
// // // //                 photourl: reader.result
// // // //             });
// // // //         };
// // // //         if (file) {
// // // //             reader.readAsDataURL(file);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <div className="banner">
// // // //                 <div className="overlay">
// // // //                     <div className="container">
// // // //                         <div className="row">
// // // //                             <div className="col">
// // // //                                 <div className="header-text">
// // // //                                     <h2>Manage Profile</h2>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// // // //                 <div className="container">
// // // //                     <div className="row gy-5 g-lg-4">
// // // //                         <div className="col-lg-1">
// // // //                             {/* Sidebar code here */}
// // // //                         </div>

// // // //                         <div className="col-lg-10">
// // // //                             <div className="dashboard-content profile-setting">
// // // //                                 <div className="row">
// // // //                                     <div className="col-12">
// // // //                                         <div className="row">
// // // //                                             <div className="col">
// // // //                                                 <div className="accordion" id="accordionExample">
// // // //                                                     <h2>Basic Information</h2>
// // // //                                                     <div className="accordion-item">
// // // //                                                         <h5 className="accordion-header" id="basicInformation">
// // // //                                                             <form action="" method="post" encType="multipart/form-data">
// // // //                                                                 <div className="row g-3 g-md-4">
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             className="form-control"
// // // //                                                                             name="firstname"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.firstname}
// // // //                                                                             placeholder="Enter First Name"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             className="form-control"
// // // //                                                                             name="lastname"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.lastname}
// // // //                                                                             placeholder="Enter Last Name"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="email"
// // // //                                                                             className="form-control"
// // // //                                                                             value={profileData.email}
// // // //                                                                             readOnly
// // // //                                                                             placeholder="Email"
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.mobilenumber}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter Phone Number"
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// // // //                                                                         <select
// // // //                                                                             className="form-select read-only-select"
// // // //                                                                             name="gender"
// // // //                                                                             readOnly
// // // //                                                                             aria-label="gender"
// // // //                                                                             value={profileData.gender}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         >
// // // //                                                                             <option value="" disabled>Select Gender</option>
// // // //                                                                             <option value="Male">Male</option>
// // // //                                                                             <option value="Female">Female</option>
// // // //                                                                         </select>
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="date"
// // // //                                                                             readOnly
// // // //                                                                             className="form-control"
// // // //                                                                             name="dob"
// // // //                                                                             value={profileData.dob}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
// // // //                                                                         <select
// // // //                                                                             className="form-select read-only-select"
// // // //                                                                             name="maritalstatus"
// // // //                                                                             readOnly
// // // //                                                                             aria-label="maritalstatus"
// // // //                                                                             value={profileData.maritalstatus}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         >
// // // //                                                                             <option value="" disabled>Select status</option>
// // // //                                                                             <option value="Never married">Never married</option>
// // // //                                                                             <option value="Widowed">Widowed</option>
// // // //                                                                             <option value="Divorced">Divorced</option>
// // // //                                                                         </select>
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
// // // //                                                                         <select
// // // //                                                                             className="form-select read-only-select"
// // // //                                                                             name="religion"
// // // //                                                                             readOnly
// // // //                                                                             aria-label="religion"
// // // //                                                                             value={profileData.religion}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         >
// // // //                                                                             <option value="" disabled>Select </option>
// // // //                                                                             <option value="Christian">Christian</option>
// // // //                                                                             <option value="Muslim">Muslim</option>
// // // //                                                                             <option value="Hindu">Hindu</option>
// // // //                                                                         </select>
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             readOnly
// // // //                                                                             className="form-control"
// // // //                                                                             name="currentsalary"
// // // //                                                                             value={profileData.currentsalary}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             name="height"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.height}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter Height"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             name="occupation"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.occupation}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter Occupation"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     {/* <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="password">Password</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="hidden"
// // // //                                                                             name="password"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.password}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter password"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div> */}
// // // //                                                                     {/* <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="hobbie">Hobbies</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             name="hobbie"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.hobbie}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter hobby"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div> */}
// // // //                                                                     <div className="col-md-6 form-group">
// // // //                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
// // // //                                                                         <input
// // // //                                                                             type="text"
// // // //                                                                             name="weight"
// // // //                                                                             readOnly
// // // //                                                                             value={profileData.weight}
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter weight"
// // // //                                                                             onChange={handleChange}
// // // //                                                                         />
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-12 form-group">
// // // //                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
// // // //                                                                         <textarea
// // // //                                                                             name="address"
// // // //                                                                             cols="30"
// // // //                                                                             rows="10"
// // // //                                                                             readOnly
// // // //                                                                             className="form-control"
// // // //                                                                             placeholder="Enter Address"
// // // //                                                                             value={profileData.address}
// // // //                                                                             onChange={handleChange}
// // // //                                                                         ></textarea>
// // // //                                                                     </div>
// // // //                                                                     <div className="col-md-12 form-group">
// // // //                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// // // //                                                                         <div className="image-input">
// // // //                                                                             <label htmlFor="image-upload" id="image-label">
// // // //                                                                                 <i className="fas fa-upload"></i>
// // // //                                                                             </label>
// // // //                                                                             <input
// // // //                                                                                 type="file"
// // // //                                                                                 name="image"
// // // //                                                                                 disabled
// // // //                                                                                 placeholder="Choose image"
// // // //                                                                                 id="image"
// // // //                                                                                 onChange={handleImageChange}
// // // //                                                                             />
// // // //                                                                             <img
// // // //                                                                                 className="w-100 preview-image"
// // // //                                                                                 id="image_preview_container"
// // // //                                                                                 style={{ maxWidth: '200px' }}
// // // //                                                                                 src={profileData.photourl}
// // // //                                                                                 alt="user image"
// // // //                                                                             />
// // // //                                                                         </div>
// // // //                                                                     </div>
// // // //                                                                     <center>
// // // //                                                                         <div className="col-2 text-end">
// // // //                                                                             <button
// // // //                                                                                 type="button"
// // // //                                                                                 className="btn-flower2 btn-full mt-2"
// // // //                                                                                 onClick={handleInterestClick}
// // // //                                                                             >
// // // //                                                                                 Interest
// // // //                                                                             </button>
// // // //                                                                         </div>
// // // //                                                                     </center>
// // // //                                                                 </div>
// // // //                                                             </form>
// // // //                                                         </h5>
// // // //                                                         <div
// // // //                                                             id="collapseBasicInformation"
// // // //                                                             className="accordion-collapse collapse"
// // // //                                                             aria-labelledby="basicInformation"
// // // //                                                             data-bs-parent="#accordionExample"
// // // //                                                         >
// // // //                                                         </div>
// // // //                                                     </div>
// // // //                                                     {/* Additional modals for career info can be added here */}
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default SingleProfileManagement;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import './profile.css';

// // // const SingleProfileManagement = () => {
// // //     const navigate = useNavigate();
// // //     const { userid } = useParams();
// // //     const [profileData, setProfileData] = useState({
// // //         firstname: '',
// // //         lastname: '',
// // //         email: '',
// // //         mobilenumber: '',
// // //         gender: '',
// // //         dob: '',
// // //         maritalstatus: '',
// // //         photourl: '',
// // //         religion: '',
// // //         currentsalary: '',
// // //         height: '',
// // //         weight: '',
// // //         occupation: '',
// // //         address: ''
// // //     });
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [requestSent, setRequestSent] = useState(false);
// // //     const [requestStatus, setRequestStatus] = useState(null); // 'pending', 'approved', or 'denied'

// // //     // Fetch user profile data
// // //     const fetchProfileData = async () => {
// // //         setIsLoading(true);
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// // //             if (!response.ok) {
// // //                 throw new Error('Network response was not ok');
// // //             }
// // //             const data = await response.json();
// // //             setProfileData(data);
// // //         } catch (error) {
// // //             setError('Error fetching profile data');
// // //             console.error('Error fetching profile data:', error);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     // Fetch phone number request status
// // //     const fetchPhoneNumberRequestStatus = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/phone-request/status/${userid}`);
// // //             if (!response.ok) {
// // //                 throw new Error('Failed to fetch request status');
// // //             }
// // //             const status = await response.text();
// // //             setRequestStatus(status);
// // //         } catch (error) {
// // //             console.error('Error fetching request status:', error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchProfileData();
// // //         fetchPhoneNumberRequestStatus();
// // //     }, [userid]);

// // //     // const handleInterestClick = () => {
// // //     //     navigate(`/Email?to=${encodeURIComponent(profileData.email)}`);
// // //     // };
// // //     const handleInterestClick = () => {
// // //         // Build the query string with the required data
// // //         const query = new URLSearchParams({
// // //             to: profileData.email,
// // //             requestStatus: requestStatus || 'not requested',
// // //         }).toString();
        
// // //         navigate(`/Email?${query}`);
// // //     };

// // //     const handleRequestPhoneNumber = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ requestType: 'viewPhoneNumber' })
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error('Failed to send request');
// // //             }
// // //             setRequestSent(true);
// // //             alert('Request sent to view phone number.');
// // //             fetchPhoneNumberRequestStatus(); // Refresh status after sending request
// // //         } catch (error) {
// // //             console.error('Error sending request:', error);
// // //             alert('Failed to send request.');
// // //         }
// // //     };

// // //     const renderPhoneNumber = () => {
// // //         if (requestStatus === 'approved') {
// // //             return profileData.mobilenumber;
// // //         }
// // //         if (requestSent) {
// // //             return 'Request sent. Awaiting approval.';
// // //         }
// // //         return 'Phone number hidden. Request to view.';
// // //     };

// // //     return (
// // //         <div>
// // //             <div className="banner">
// // //                 <div className="overlay">
// // //                     <div className="container">
// // //                         <div className="row">
// // //                             <div className="col">
// // //                                 <div className="header-text">
// // //                                     <h2>Manage Profile</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// // //                 <div className="container">
// // //                     <div className="row gy-5 g-lg-4">
// // //                         <div className="col-lg-1">
// // //                             {/* Sidebar code here */}
// // //                         </div>

// // //                         <div className="col-lg-10">
// // //                             <div className="dashboard-content profile-setting">
// // //                                 <div className="row">
// // //                                     <div className="col-12">
// // //                                         <div className="row">
// // //                                             <div className="col">
// // //                                                 <div className="accordion" id="accordionExample">
// // //                                                     <h2>Basic Information</h2>
// // //                                                     <div className="accordion-item">
// // //                                                         <h5 className="accordion-header" id="basicInformation">
// // //                                                             <form action="" method="post" encType="multipart/form-data">
// // //                                                                 <div className="row g-3 g-md-4">
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="firstname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.firstname}
// // //                                                                             placeholder="Enter First Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="lastname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.lastname}
// // //                                                                             placeholder="Enter Last Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="email"
// // //                                                                             className="form-control"
// // //                                                                             value={profileData.email}
// // //                                                                             readOnly
// // //                                                                             placeholder="Email"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             value={renderPhoneNumber()}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Phone Number"
// // //                                                                         />
// // //                                                                         {!requestSent && (
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleRequestPhoneNumber}
// // //                                                                             >
// // //                                                                                 Request Phone Number
// // //                                                                             </button>
// // //                                                                         )}
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="gender"
// // //                                                                             readOnly
// // //                                                                             aria-label="gender"
// // //                                                                             value={profileData.gender}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select Gender</option>
// // //                                                                             <option value="Male">Male</option>
// // //                                                                             <option value="Female">Female</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="date"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="dob"
// // //                                                                             value={profileData.dob}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="maritalstatus"
// // //                                                                             readOnly
// // //                                                                             aria-label="maritalstatus"
// // //                                                                             value={profileData.maritalstatus}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select status</option>
// // //                                                                             <option value="Never married">Never married</option>
// // //                                                                             <option value="Widowed">Widowed</option>
// // //                                                                             <option value="Divorced">Divorced</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="religion"
// // //                                                                             readOnly
// // //                                                                             aria-label="religion"
// // //                                                                             value={profileData.religion}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select </option>
// // //                                                                             <option value="Christian">Christian</option>
// // //                                                                             <option value="Muslim">Muslim</option>
// // //                                                                             <option value="Hindu">Hindu</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="currentsalary"
// // //                                                                             value={profileData.currentsalary}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="height"
// // //                                                                             readOnly
// // //                                                                             value={profileData.height}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Height"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="occupation"
// // //                                                                             readOnly
// // //                                                                             value={profileData.occupation}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Occupation"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="weight"
// // //                                                                             readOnly
// // //                                                                             value={profileData.weight}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter weight"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
// // //                                                                         <textarea
// // //                                                                             name="address"
// // //                                                                             cols="30"
// // //                                                                             rows="10"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Address"
// // //                                                                             value={profileData.address}
// // //                                                                         ></textarea>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// // //                                                                         <div className="image-input">
// // //                                                                             <label htmlFor="image-upload" id="image-label">
// // //                                                                                 <i className="fas fa-upload"></i>
// // //                                                                             </label>
// // //                                                                             <input
// // //                                                                                 type="file"
// // //                                                                                 name="image"
// // //                                                                                 disabled
// // //                                                                                 placeholder="Choose image"
// // //                                                                                 id="image"
// // //                                                                             />
// // //                                                                             <img
// // //                                                                                 className="w-100 preview-image"
// // //                                                                                 id="image_preview_container"
// // //                                                                                 style={{ maxWidth: '200px' }}
// // //                                                                                 src={profileData.photourl}
// // //                                                                                 alt="user image"
// // //                                                                             />
// // //                                                                         </div>
// // //                                                                     </div>
// // //                                                                     <center>
// // //                                                                         <div className="col-2 text-end">
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleInterestClick}
// // //                                                                             >
// // //                                                                                 Interest
// // //                                                                             </button>
// // //                                                                         </div>
// // //                                                                     </center>
// // //                                                                 </div>
// // //                                                             </form>
// // //                                                         </h5>
// // //                                                         <div
// // //                                                             id="collapseBasicInformation"
// // //                                                             className="accordion-collapse collapse"
// // //                                                             aria-labelledby="basicInformation"
// // //                                                             data-bs-parent="#accordionExample"
// // //                                                         >
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     {/* Additional modals for career info can be added here */}
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SingleProfileManagement;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import './profile.css';

// // // const SingleProfileManagement = () => {
// // //     const navigate = useNavigate();
// // //     const { userid } = useParams();
// // //     const [profileData, setProfileData] = useState({
// // //         firstname: '',
// // //         lastname: '',
// // //         email: '',
// // //         mobilenumber: '',
// // //         gender: '',
// // //         dob: '',
// // //         maritalstatus: '',
// // //         photourl: '',
// // //         religion: '',
// // //         currentsalary: '',
// // //         height: '',
// // //         weight: '',
// // //         occupation: '',
// // //         address: ''
// // //     });
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [requestSent, setRequestSent] = useState(false);

// // //     // Fetch user profile data
// // //     const fetchProfileData = async () => {
// // //         setIsLoading(true);
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// // //             if (!response.ok) {
// // //                 throw new Error('Network response was not ok');
// // //             }
// // //             const data = await response.json();
// // //             setProfileData(data);
// // //         } catch (error) {
// // //             setError('Error fetching profile data');
// // //             console.error('Error fetching profile data:', error);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchProfileData();
// // //     }, [userid]);

// // //     const handleInterestClick = () => {
// // //         // Build the query string with the required data
// // //         const query = new URLSearchParams({
// // //             to: profileData.email,
// // //             requestStatus: requestSent ? 'Request Sent' : 'Not Requested',
// // //         }).toString();
        
// // //         navigate(`/Email?${query}`);
// // //     };

// // //     const handleRequestPhoneNumber = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ requestType: 'viewPhoneNumber' })
// // //             });

// // //             if (!response.ok) {
// // //                 const errorText = await response.text();
// // //                 console.error('Response status:', response.status);
// // //                 console.error('Response text:', errorText);
// // //                 throw new Error('Failed to send request');
// // //             }

// // //             setRequestSent(true);
// // //             alert('Request sent to view phone number.');
// // //         } catch (error) {
// // //             console.error('Error sending request:', error);
// // //             alert('Failed to send request. Check console for details.');
// // //         }
// // //     };

// // //     const renderPhoneNumber = () => {
// // //         if (requestSent) {
// // //             return 'Request sent. Awaiting approval.';
// // //         }
// // //         return 'Phone number hidden. Request to view.';
// // //     };

// // //     return (
// // //         <div>
// // //             <div className="banner">
// // //                 <div className="overlay">
// // //                     <div className="container">
// // //                         <div className="row">
// // //                             <div className="col">
// // //                                 <div className="header-text">
// // //                                     <h2>Manage Profile</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// // //                 <div className="container">
// // //                     <div className="row gy-5 g-lg-4">
// // //                         <div className="col-lg-1">
// // //                             {/* Sidebar code here */}
// // //                         </div>

// // //                         <div className="col-lg-10">
// // //                             <div className="dashboard-content profile-setting">
// // //                                 <div className="row">
// // //                                     <div className="col-12">
// // //                                         <div className="row">
// // //                                             <div className="col">
// // //                                                 <div className="accordion" id="accordionExample">
// // //                                                     <h2>Basic Information</h2>
// // //                                                     <div className="accordion-item">
// // //                                                         <h5 className="accordion-header" id="basicInformation">
// // //                                                             <form action="" method="post" encType="multipart/form-data">
// // //                                                                 <div className="row g-3 g-md-4">
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="firstname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.firstname}
// // //                                                                             placeholder="Enter First Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="lastname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.lastname}
// // //                                                                             placeholder="Enter Last Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="email"
// // //                                                                             className="form-control"
// // //                                                                             value={profileData.email}
// // //                                                                             readOnly
// // //                                                                             placeholder="Email"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             value={renderPhoneNumber()}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Phone Number"
// // //                                                                         />
// // //                                                                         {!requestSent && (
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleRequestPhoneNumber}
// // //                                                                             >
// // //                                                                                 Request Phone Number
// // //                                                                             </button>
// // //                                                                         )}
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="gender"
// // //                                                                             readOnly
// // //                                                                             aria-label="gender"
// // //                                                                             value={profileData.gender}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select Gender</option>
// // //                                                                             <option value="Male">Male</option>
// // //                                                                             <option value="Female">Female</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="date"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="dob"
// // //                                                                             value={profileData.dob}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="maritalstatus"
// // //                                                                             readOnly
// // //                                                                             aria-label="maritalstatus"
// // //                                                                             value={profileData.maritalstatus}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select status</option>
// // //                                                                             <option value="Never married">Never married</option>
// // //                                                                             <option value="Widowed">Widowed</option>
// // //                                                                             <option value="Divorced">Divorced</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="religion"
// // //                                                                             readOnly
// // //                                                                             aria-label="religion"
// // //                                                                             value={profileData.religion}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select </option>
// // //                                                                             <option value="Christian">Christian</option>
// // //                                                                             <option value="Muslim">Muslim</option>
// // //                                                                             <option value="Hindu">Hindu</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="currentsalary"
// // //                                                                             value={profileData.currentsalary}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="height"
// // //                                                                             readOnly
// // //                                                                             value={profileData.height}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Height"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="occupation"
// // //                                                                             readOnly
// // //                                                                             value={profileData.occupation}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Occupation"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="weight"
// // //                                                                             readOnly
// // //                                                                             value={profileData.weight}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter weight"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
// // //                                                                         <textarea
// // //                                                                             name="address"
// // //                                                                             cols="30"
// // //                                                                             rows="10"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Address"
// // //                                                                             value={profileData.address}
// // //                                                                         ></textarea>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// // //                                                                         <div className="image-input">
// // //                                                                             <label htmlFor="image-upload" id="image-label">
// // //                                                                                 <i className="fas fa-upload"></i>
// // //                                                                             </label>
// // //                                                                             <input
// // //                                                                                 type="file"
// // //                                                                                 name="image"
// // //                                                                                 disabled
// // //                                                                                 placeholder="Choose image"
// // //                                                                                 id="image"
// // //                                                                             />
// // //                                                                             <img
// // //                                                                                 className="w-100 preview-image"
// // //                                                                                 id="image_preview_container"
// // //                                                                                 style={{ maxWidth: '200px' }}
// // //                                                                                 src={profileData.photourl}
// // //                                                                                 alt="user image"
// // //                                                                             />
// // //                                                                         </div>
// // //                                                                     </div>
// // //                                                                     <center>
// // //                                                                         <div className="col-2 text-end">
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleInterestClick}
// // //                                                                             >
// // //                                                                                 Interest
// // //                                                                             </button>
// // //                                                                         </div>
// // //                                                                     </center>
// // //                                                                 </div>
// // //                                                             </form>
// // //                                                         </h5>
// // //                                                         <div
// // //                                                             id="collapseBasicInformation"
// // //                                                             className="accordion-collapse collapse"
// // //                                                             aria-labelledby="basicInformation"
// // //                                                             data-bs-parent="#accordionExample"
// // //                                                         >
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     {/* Additional modals for career info can be added here */}
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SingleProfileManagement;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import './profile.css';

// // // const SingleProfileManagement = () => {
// // //     const navigate = useNavigate();
// // //     const { userid } = useParams();
// // //     const [profileData, setProfileData] = useState({
// // //         firstname: '',
// // //         lastname: '',
// // //         email: '',
// // //         mobilenumber: '',
// // //         gender: '',
// // //         dob: '',
// // //         maritalstatus: '',
// // //         photourl: '',
// // //         religion: '',
// // //         currentsalary: '',
// // //         height: '',
// // //         weight: '',
// // //         occupation: '',
// // //         address: ''
// // //     });
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [requestSent, setRequestSent] = useState(false);

// // //     // Fetch user profile data
// // //     const fetchProfileData = async () => {
// // //         setIsLoading(true);
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// // //             if (!response.ok) {
// // //                 throw new Error('Network response was not ok');
// // //             }
// // //             const data = await response.json();
// // //             setProfileData(data);
// // //         } catch (error) {
// // //             setError('Error fetching profile data');
// // //             console.error('Error fetching profile data:', error);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchProfileData();
// // //     }, [userid]);

// // //     const handleRequestPhoneNumber = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ requestType: 'viewPhoneNumber' })
// // //             });

// // //             if (!response.ok) {
// // //                 const errorText = await response.text();
// // //                 console.error('Response status:', response.status);
// // //                 console.error('Response text:', errorText);
// // //                 throw new Error('Failed to send request');
// // //             }

// // //             setRequestSent(true);
// // //             alert('Request sent to view phone number.');
// // //         } catch (error) {
// // //             console.error('Error sending request:', error);
// // //             alert('Failed to send request. Check console for details.');
// // //         }
// // //     };

// // //     const handleInterestClick = () => {
// // //         const query = new URLSearchParams({
// // //             to: profileData.email,
// // //             subject: 'Request for Mobile Number',
// // //             body: 'Dear User, \n\nPlease provide the mobile number for the profile.\n\nThank you.'
// // //         }).toString();
        
// // //         navigate(`/Email?${query}`);
// // //     };

// // //     const renderPhoneNumber = () => {
// // //         if (requestSent) {
// // //             return 'Request sent. Awaiting approval.';
// // //         }
// // //         return 'Phone number hidden. Request to view.';
// // //     };

// // //     return (
// // //         <div>
// // //             <div className="banner">
// // //                 <div className="overlay">
// // //                     <div className="container">
// // //                         <div className="row">
// // //                             <div className="col">
// // //                                 <div className="header-text">
// // //                                     <h2>Manage Profile</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// // //                 <div className="container">
// // //                     <div className="row gy-5 g-lg-4">
// // //                         <div className="col-lg-1">
// // //                             {/* Sidebar code here */}
// // //                         </div>

// // //                         <div className="col-lg-10">
// // //                             <div className="dashboard-content profile-setting">
// // //                                 <div className="row">
// // //                                     <div className="col-12">
// // //                                         <div className="row">
// // //                                             <div className="col">
// // //                                                 <div className="accordion" id="accordionExample">
// // //                                                     <h2>Basic Information</h2>
// // //                                                     <div className="accordion-item">
// // //                                                         <h5 className="accordion-header" id="basicInformation">
// // //                                                             <form action="" method="post" encType="multipart/form-data">
// // //                                                                 <div className="row g-3 g-md-4">
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="firstname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.firstname}
// // //                                                                             placeholder="Enter First Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="lastname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.lastname}
// // //                                                                             placeholder="Enter Last Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="email"
// // //                                                                             className="form-control"
// // //                                                                             value={profileData.email}
// // //                                                                             readOnly
// // //                                                                             placeholder="Email"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             value={renderPhoneNumber()}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Phone Number"
// // //                                                                         />
// // //                                                                         {!requestSent && (
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleRequestPhoneNumber}
// // //                                                                             >
// // //                                                                                 Request Phone Number
// // //                                                                             </button>
// // //                                                                         )}
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="gender"
// // //                                                                             readOnly
// // //                                                                             aria-label="gender"
// // //                                                                             value={profileData.gender}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select Gender</option>
// // //                                                                             <option value="Male">Male</option>
// // //                                                                             <option value="Female">Female</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="date"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="dob"
// // //                                                                             value={profileData.dob}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="maritalstatus"
// // //                                                                             readOnly
// // //                                                                             aria-label="maritalstatus"
// // //                                                                             value={profileData.maritalstatus}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select status</option>
// // //                                                                             <option value="Never married">Never married</option>
// // //                                                                             <option value="Widowed">Widowed</option>
// // //                                                                             <option value="Divorced">Divorced</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="religion"
// // //                                                                             readOnly
// // //                                                                             aria-label="religion"
// // //                                                                             value={profileData.religion}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select </option>
// // //                                                                             <option value="Christian">Christian</option>
// // //                                                                             <option value="Muslim">Muslim</option>
// // //                                                                             <option value="Hindu">Hindu</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="currentsalary"
// // //                                                                             value={profileData.currentsalary}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="height"
// // //                                                                             readOnly
// // //                                                                             value={profileData.height}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Height"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="occupation"
// // //                                                                             readOnly
// // //                                                                             value={profileData.occupation}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Occupation"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="weight"
// // //                                                                             readOnly
// // //                                                                             value={profileData.weight}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter weight"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
// // //                                                                         <textarea
// // //                                                                             name="address"
// // //                                                                             cols="30"
// // //                                                                             rows="10"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Address"
// // //                                                                             value={profileData.address}
// // //                                                                         ></textarea>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// // //                                                                         <div className="image-input">
// // //                                                                             <label htmlFor="image-upload" id="image-label">
// // //                                                                                 <i className="fas fa-upload"></i>
// // //                                                                             </label>
// // //                                                                             <input
// // //                                                                                 type="file"
// // //                                                                                 name="image"
// // //                                                                                 disabled
// // //                                                                                 placeholder="Choose image"
// // //                                                                                 id="image"
// // //                                                                             />
// // //                                                                             <img
// // //                                                                                 className="w-100 preview-image"
// // //                                                                                 id="image_preview_container"
// // //                                                                                 style={{ maxWidth: '200px' }}
// // //                                                                                 src={profileData.photourl}
// // //                                                                                 alt="user image"
// // //                                                                             />
// // //                                                                         </div>
// // //                                                                     </div>
// // //                                                                     <center>
// // //                                                                         <div className="col-2 text-end">
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleInterestClick}
// // //                                                                             >
// // //                                                                                 Interest
// // //                                                                             </button>
// // //                                                                         </div>
// // //                                                                     </center>
// // //                                                                 </div>
// // //                                                             </form>
// // //                                                         </h5>
// // //                                                         <div
// // //                                                             id="collapseBasicInformation"
// // //                                                             className="accordion-collapse collapse"
// // //                                                             aria-labelledby="basicInformation"
// // //                                                             data-bs-parent="#accordionExample"
// // //                                                         >
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     {/* Additional modals for career info can be added here */}
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SingleProfileManagement;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import './profile.css';

// // // const SingleProfileManagement = () => {
// // //     const navigate = useNavigate();
// // //     const { userid } = useParams();
// // //     const [profileData, setProfileData] = useState({
// // //         firstname: '',
// // //         lastname: '',
// // //         email: '',
// // //         mobilenumber: '',
// // //         gender: '',
// // //         dob: '',
// // //         maritalstatus: '',
// // //         photourl: '',
// // //         religion: '',
// // //         currentsalary: '',
// // //         height: '',
// // //         weight: '',
// // //         occupation: '',
// // //         address: ''
// // //     });
// // //     const [isLoading, setIsLoading] = useState(false);
// // //     const [error, setError] = useState(null);
// // //     const [requestSent, setRequestSent] = useState(false);
// // //     const [requestPhoneNumber, setRequestPhoneNumber] = useState(false); // New state for checkbox

// // //     // Fetch user profile data
// // //     const fetchProfileData = async () => {
// // //         setIsLoading(true);
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// // //             if (!response.ok) {
// // //                 throw new Error('Network response was not ok');
// // //             }
// // //             const data = await response.json();
// // //             setProfileData(data);
// // //         } catch (error) {
// // //             setError('Error fetching profile data');
// // //             console.error('Error fetching profile data:', error);
// // //         } finally {
// // //             setIsLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchProfileData();
// // //     }, [userid]);

// // //     const handleRequestPhoneNumber = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify({ requestType: 'viewPhoneNumber' })
// // //             });

// // //             if (!response.ok) {
// // //                 const errorText = await response.text();
// // //                 console.error('Response status:', response.status);
// // //                 console.error('Response text:', errorText);
// // //                 throw new Error('Failed to send request');
// // //             }

// // //             setRequestSent(true);
// // //             alert('Request sent to view phone number.');
// // //         } catch (error) {
// // //             console.error('Error sending request:', error);
// // //             alert('Failed to send request. Check console for details.');
// // //         }
// // //     };

// // //     const handleInterestClick = () => {
// // //         const query = new URLSearchParams({
// // //             to: profileData.email,
// // //             subject: 'Request for Mobile Number',
// // //             body: `Dear User,\n\n${requestPhoneNumber ? 'Please provide the mobile number for the profile.' : 'Thank you for your interest.'}\n\nThank you.`
// // //         }).toString();
        
// // //         navigate(`/Email?${query}`);
// // //     };

// // //     const renderPhoneNumber = () => {
// // //         if (requestSent) {
// // //             return 'Request sent. Awaiting approval.';
// // //         }
// // //         return 'Phone number hidden. Request to view.';
// // //     };

// // //     return (
// // //         <div>
// // //             <div className="banner">
// // //                 <div className="overlay">
// // //                     <div className="container">
// // //                         <div className="row">
// // //                             <div className="col">
// // //                                 <div className="header-text">
// // //                                     <h2>Manage Profile</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// // //                 <div className="container">
// // //                     <div className="row gy-5 g-lg-4">
// // //                         <div className="col-lg-1">
// // //                             {/* Sidebar code here */}
// // //                         </div>

// // //                         <div className="col-lg-10">
// // //                             <div className="dashboard-content profile-setting">
// // //                                 <div className="row">
// // //                                     <div className="col-12">
// // //                                         <div className="row">
// // //                                             <div className="col">
// // //                                                 <div className="accordion" id="accordionExample">
// // //                                                     <h2>Basic Information</h2>
// // //                                                     <div className="accordion-item">
// // //                                                         <h5 className="accordion-header" id="basicInformation">
// // //                                                             <form action="" method="post" encType="multipart/form-data">
// // //                                                                 <div className="row g-3 g-md-4">
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="firstname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.firstname}
// // //                                                                             placeholder="Enter First Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             className="form-control"
// // //                                                                             name="lastname"
// // //                                                                             readOnly
// // //                                                                             value={profileData.lastname}
// // //                                                                             placeholder="Enter Last Name"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="email"
// // //                                                                             className="form-control"
// // //                                                                             value={profileData.email}
// // //                                                                             readOnly
// // //                                                                             placeholder="Email"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             value={renderPhoneNumber()}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Phone Number"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="requestPhoneNumber">
// // //                                                                             <input
// // //                                                                                 type="checkbox"
// // //                                                                                 id="requestPhoneNumber"
// // //                                                                                 checked={requestPhoneNumber}
// // //                                                                                 onChange={(e) => setRequestPhoneNumber(e.target.checked)}
// // //                                                                             />
// // //                                                                             Request Phone Number
// // //                                                                         </label>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="gender"
// // //                                                                             readOnly
// // //                                                                             aria-label="gender"
// // //                                                                             value={profileData.gender}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select Gender</option>
// // //                                                                             <option value="Male">Male</option>
// // //                                                                             <option value="Female">Female</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="date"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="dob"
// // //                                                                             value={profileData.dob}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="maritalstatus"
// // //                                                                             readOnly
// // //                                                                             aria-label="maritalstatus"
// // //                                                                             value={profileData.maritalstatus}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select status</option>
// // //                                                                             <option value="Never married">Never married</option>
// // //                                                                             <option value="Widowed">Widowed</option>
// // //                                                                             <option value="Divorced">Divorced</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
// // //                                                                         <select
// // //                                                                             className="form-select read-only-select"
// // //                                                                             name="religion"
// // //                                                                             readOnly
// // //                                                                             aria-label="religion"
// // //                                                                             value={profileData.religion}
// // //                                                                         >
// // //                                                                             <option value="" disabled>Select </option>
// // //                                                                             <option value="Christian">Christian</option>
// // //                                                                             <option value="Muslim">Muslim</option>
// // //                                                                             <option value="Hindu">Hindu</option>
// // //                                                                         </select>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             name="currentsalary"
// // //                                                                             value={profileData.currentsalary}
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="height"
// // //                                                                             readOnly
// // //                                                                             value={profileData.height}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Height"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="occupation"
// // //                                                                             readOnly
// // //                                                                             value={profileData.occupation}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Occupation"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-6 form-group">
// // //                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
// // //                                                                         <input
// // //                                                                             type="text"
// // //                                                                             name="weight"
// // //                                                                             readOnly
// // //                                                                             value={profileData.weight}
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter weight"
// // //                                                                         />
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
// // //                                                                         <textarea
// // //                                                                             name="address"
// // //                                                                             cols="30"
// // //                                                                             rows="10"
// // //                                                                             readOnly
// // //                                                                             className="form-control"
// // //                                                                             placeholder="Enter Address"
// // //                                                                             value={profileData.address}
// // //                                                                         ></textarea>
// // //                                                                     </div>
// // //                                                                     <div className="col-md-12 form-group">
// // //                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// // //                                                                         <div className="image-input">
// // //                                                                             <label htmlFor="image-upload" id="image-label">
// // //                                                                                 <i className="fas fa-upload"></i>
// // //                                                                             </label>
// // //                                                                             <input
// // //                                                                                 type="file"
// // //                                                                                 name="image"
// // //                                                                                 disabled
// // //                                                                                 placeholder="Choose image"
// // //                                                                                 id="image"
// // //                                                                             />
// // //                                                                             <img
// // //                                                                                 className="w-100 preview-image"
// // //                                                                                 id="image_preview_container"
// // //                                                                                 style={{ maxWidth: '200px' }}
// // //                                                                                 src={profileData.photourl}
// // //                                                                                 alt="user image"
// // //                                                                             />
// // //                                                                         </div>
// // //                                                                     </div>
// // //                                                                     <center>
// // //                                                                         <div className="col-2 text-end">
// // //                                                                             <button
// // //                                                                                 type="button"
// // //                                                                                 className="btn-flower2 btn-full mt-2"
// // //                                                                                 onClick={handleInterestClick}
// // //                                                                             >
// // //                                                                                 Interest
// // //                                                                             </button>
// // //                                                                         </div>
// // //                                                                     </center>
// // //                                                                 </div>
// // //                                                             </form>
// // //                                                         </h5>
// // //                                                         <div
// // //                                                             id="collapseBasicInformation"
// // //                                                             className="accordion-collapse collapse"
// // //                                                             aria-labelledby="basicInformation"
// // //                                                             data-bs-parent="#accordionExample"
// // //                                                         >
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     {/* Additional modals for career info can be added here */}
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SingleProfileManagement;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './profile.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilePdf, faFileImage, faFileAlt } from '@fortawesome/free-solid-svg-icons';
 

const SingleProfileManagement = () => {
    const navigate = useNavigate();
    const { userid } = useParams();
    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobilenumber: '',
        gender: '',
        dob: '',
        maritalstatus: '',
        photourl: '',
        religion: '',
        currentsalary: '',
        height: '',
        weight: '',
        occupation: '',
        address: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [requestSent, setRequestSent] = useState(false);
    const [requestPhoneNumber, setRequestPhoneNumber] = useState(false);

    // Fetch user profile data
    const fetchProfileData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProfileData(data);
        } catch (error) {
            setError('Error fetching profile data');
            console.error('Error fetching profile data:', error);
        } finally {
            setIsLoading(false);
        }
    };
    // const viewIdProof = (photourl) => {
    //     console.log("Photo URL:", profileData.photourl);
    //     if (photourl) {
    //       Swal.fire({
    //         title: "ID Proof",
    //         imageUrl: `data:image/png;base64,${photourl}`,
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         imageAlt: "ID Proof"
    //       });
    //     } else {
    //       Swal.fire({
    //         title: 'No ID Proof',
    //         text: 'No ID proof available for this applicant.',
    //         icon: 'info'
    //       });
    //     }
    //   };
    const viewIdProof = (photourl) => {
        console.log('Photourl:', photourl); // Debug the URL or data
        if (photourl) {
            const imageUrl = photourl.startsWith('data:image') ? photourl : `http://localhost:1002/${photourl}`;
            console.log('Image URL:', imageUrl); // Log the final URL
            Swal.fire({
                title: "ID Proof",
                imageUrl: imageUrl,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "ID Proof"
            });
        } else {
            Swal.fire({
                title: 'No ID Proof',
                text: 'No ID proof available for this applicant.',
                icon: 'info'
            });
        }
    };
    
    
    
      const getFileIcon = (fileType) => {
        // Default icon if fileType is undefined or doesn't match known types
        const defaultIcon = faFileAlt;
     
        if (fileType && fileType.includes('image')) {
          return faFileImage;
        } else if (fileType && fileType.includes('pdf')) {
          return faFilePdf;
        } else {
          return defaultIcon;
        }
      };

    useEffect(() => {
        fetchProfileData();
    }, [userid]);

    const handleRequestPhoneNumber = async () => {
        try {
            const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ requestType: 'viewPhoneNumber' })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response status:', response.status);
                console.error('Response text:', errorText);
                throw new Error('Failed to send request');
            }

            setRequestSent(true);
            alert('Request sent to view phone number.');
        } catch (error) {
            console.error('Error sending request:', error);
            alert('Failed to send request. Check console for details.');
        }
    };

    const handleInterestClick = () => {
        const query = new URLSearchParams({
            to: profileData.email,
            subject: 'Your Profile Caught My Eye – Let’s Connect!',
            body: `Dear soulmate,\n\n${requestPhoneNumber ? 'Dear soulmate,\n\nCould you please share your mobile number with me at your earliest convenience? It would help us stay in touch more effectively.\n\nThank you!' : 'Your profile caught my eye!If you are up for it.I had love to chat and see if we have some common interests.'}\n\nThank you.`,
            requestPhoneNumber: requestPhoneNumber
        }).toString();
        
        navigate(`/Email?${query}`);
    };

    const renderPhoneNumber = () => {
        if (requestSent) {
            return 'Request sent. Awaiting approval.';
        }
        return 'Phone number hidden. Request to view.';
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
                                        <div className="row">
                                            <div className="col">
                                                <div className="accordion" id="accordionExample">
                                                    <h2>Basic Information</h2>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="basicInformation">
                                                            <form action="" method="post" encType="multipart/form-data">
                                                                <div className="row g-3 g-md-4">
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="firstname"
                                                                            readOnly
                                                                            value={profileData.firstname}
                                                                            placeholder="Enter First Name"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="lastname"
                                                                            readOnly
                                                                            value={profileData.lastname}
                                                                            placeholder="Enter Last Name"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            value={profileData.email}
                                                                            readOnly
                                                                            placeholder="Email"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
                                                                        <select
                                                                            className="form-select read-only-select"
                                                                            name="gender"
                                                                            readOnly
                                                                            aria-label="gender"
                                                                            value={profileData.gender}
                                                                        >
                                                                            <option value="" disabled>Select Gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            readOnly
                                                                            value={renderPhoneNumber()}
                                                                            className="form-control"
                                                                            placeholder="Phone Number"
                                                                        />
                                                                        <label htmlFor="requestPhoneNumber">
                                                                            <input
                                                                                type="checkbox"
                                                                                id="requestPhoneNumber"
                                                                                checked={requestPhoneNumber}
                                                                                onChange={(e) => setRequestPhoneNumber(e.target.checked)}
                                                                            />
                                                                            Request Phone Number
                                                                        </label>
                                                                    </div>
                                                                   
                                                                   
                                                                   
                                                                    {/* <div className="col-md-6 form-group">
                                                                        <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
                                                                        <select
                                                                            className="form-select read-only-select"
                                                                            name="gender"
                                                                            readOnly
                                                                            aria-label="gender"
                                                                            value={profileData.gender}
                                                                        >
                                                                            <option value="" disabled>Select Gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                        </select>
                                                                    </div> */}
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="date"
                                                                            readOnly
                                                                            className="form-control"
                                                                            name="dob"
                                                                            value={profileData.dob}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
                                                                        <select
                                                                            className="form-select read-only-select"
                                                                            name="maritalstatus"
                                                                            readOnly
                                                                            aria-label="maritalstatus"
                                                                            value={profileData.maritalstatus}
                                                                        >
                                                                            <option value="" disabled>Select status</option>
                                                                            <option value="Never married">Never married</option>
                                                                            <option value="Widowed">Widowed</option>
                                                                            <option value="Divorced">Divorced</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
                                                                        <select
                                                                            className="form-select read-only-select"
                                                                            name="religion"
                                                                            readOnly
                                                                            aria-label="religion"
                                                                            value={profileData.religion}
                                                                        >
                                                                            <option value="" disabled>Select </option>
                                                                            <option value="Christian">Christian</option>
                                                                            <option value="Muslim">Muslim</option>
                                                                            <option value="Hindu">Hindu</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            readOnly
                                                                            className="form-control"
                                                                            name="currentsalary"
                                                                            value={profileData.currentsalary}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="height">Height</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            name="height"
                                                                            readOnly
                                                                            value={profileData.height}
                                                                            className="form-control"
                                                                            placeholder="Enter Height"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            name="occupation"
                                                                            readOnly
                                                                            value={profileData.occupation}
                                                                            className="form-control"
                                                                            placeholder="Enter Occupation"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 form-group">
                                                                        <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
                                                                        <input
                                                                            type="text"
                                                                            name="weight"
                                                                            readOnly
                                                                            value={profileData.weight}
                                                                            className="form-control"
                                                                            placeholder="Enter weight"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        <label htmlFor="address">Address</label> <span className="text-danger">*</span>
                                                                        <textarea
                                                                            name="address"
                                                                            cols="30"
                                                                            rows="10"
                                                                            readOnly
                                                                            className="form-control"
                                                                            placeholder="Enter Address"
                                                                            value={profileData.address}
                                                                        ></textarea>
                                                                    </div>
                                                                    <div className="col-md-12 form-group">
                                                                        
                                                                        <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
                                                                        <button
                      onClick={() => viewIdProof(profileData.photourl)}
                      className="view-button"
                    >
                      <FontAwesomeIcon icon={getFileIcon(profileData.photourl)} />
                    </button>
                                                                        {/* <div className="image-input">
                                                                            <label htmlFor="image-upload" id="image-label">
                                                                                <i className="fas fa-upload"></i>
                                                                            </label>
                                                                            <input
                                                                                type="file"
                                                                                name="image"
                                                                                disabled
                                                                                placeholder="Choose image"
                                                                                id="image"
                                                                            /> */}
                                                                            {/* <img
                                                                                className="w-100 preview-image"
                                                                                id="image_preview_container"
                                                                                style={{ maxWidth: '200px' }}
                                                                                src={profileData.photourl}
                                                                                alt="user image"
                                                                            /> */}
                                                                            {/* <button
                      onClick={() => viewIdProof(profileData.photourl)}
                      className="view-button"
                    >
                      <FontAwesomeIcon icon={getFileIcon(profileData.photourl)} />
                    </button> */}
                                                                        {/* </div> */}
                                                                    </div>
                                                                    <center>
                                                                        <div className="col-2 text-end">
                                                                            <button
                                                                                type="button"
                                                                                className="btn-flower2 btn-full mt-2"
                                                                                onClick={handleInterestClick}
                                                                            >
                                                                                Interest
                                                                            </button>
                                                                        </div>
                                                                    </center>
                                                                </div>
                                                            </form>
                                                        </h5>
                                                        <div
                                                            id="collapseBasicInformation"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="basicInformation"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                        </div>
                                                    </div>
                                                    {/* Additional modals for career info can be added here */}
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
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './profile.css';
// import Swal from 'sweetalert2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faFilePdf, faFileImage, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// const SingleProfileManagement = () => {
//     const navigate = useNavigate();
//     const { userid } = useParams();
//     const [profileData, setProfileData] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         mobilenumber: '',
//         gender: '',
//         dob: '',
//         maritalstatus: '',
//         photourl: '',
//         religion: '',
//         currentsalary: '',
//         height: '',
//         weight: '',
//         occupation: '',
//         address: ''
//     });
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [requestSent, setRequestSent] = useState(false);
//     const [requestPhoneNumber, setRequestPhoneNumber] = useState(false);

//     // Fetch user profile data
//     const fetchProfileData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setProfileData(data);
//         } catch (error) {
//             setError('Error fetching profile data');
//             console.error('Error fetching profile data:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Function to get the correct file icon based on file name
//     const getFileIconFromName = (fileName) => {
//         // Extract file extension
//         const fileExtension = fileName.split('.').pop().toLowerCase();

//         switch (fileExtension) {
//             case 'png':
//             case 'jpg':
//             case 'jpeg':
//             case 'gif':
//                 return faFileImage;
//             case 'pdf':
//                 return faFilePdf;
//             default:
//                 return faFileAlt;
//         }
//     };

//     const viewIdProof = (photourl) => {
//         if (photourl) {
//             const imageUrl = photourl.startsWith('data:image') ? photourl : `http://localhost:1002/${photourl}`;
//             Swal.fire({
//                 title: "ID Proof",
//                 imageUrl: imageUrl,
//                 imageWidth: 400,
//                 imageHeight: 200,
//                 imageAlt: "ID Proof"
//             });
//         } else {
//             Swal.fire({
//                 title: 'No ID Proof',
//                 text: 'No ID proof available for this applicant.',
//                 icon: 'info'
//             });
//         }
//     };

//     useEffect(() => {
//         fetchProfileData();
//     }, [userid]);

//     const handleRequestPhoneNumber = async () => {
//         try {
//             const response = await fetch(`http://localhost:1002/User/requestPhoneNumber/${userid}`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ requestType: 'viewPhoneNumber' })
//             });

//             if (!response.ok) {
//                 const errorText = await response.text();
//                 console.error('Response status:', response.status);
//                 console.error('Response text:', errorText);
//                 throw new Error('Failed to send request');
//             }

//             setRequestSent(true);
//             alert('Request sent to view phone number.');
//         } catch (error) {
//             console.error('Error sending request:', error);
//             alert('Failed to send request. Check console for details.');
//         }
//     };

//     const handleInterestClick = () => {
//         const query = new URLSearchParams({
//             to: profileData.email,
//             subject: 'Your Profile Caught My Eye – Let’s Connect!',
//             body: `Dear soulmate,\n\n${requestPhoneNumber ? 'Dear soulmate,\n\nCould you please share your mobile number with me at your earliest convenience? It would help us stay in touch more effectively.\n\nThank you!' : 'Your profile caught my eye! If you are up for it, I would love to chat and see if we have some common interests.'}\n\nThank you.`,
//             requestPhoneNumber: requestPhoneNumber
//         }).toString();

//         navigate(`/Email?${query}`);
//     };

//     const renderPhoneNumber = () => {
//         if (requestSent) {
//             return 'Request sent. Awaiting approval.';
//         }
//         return 'Phone number hidden. Request to view.';
//     };

//     return (
//         <div>
//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Manage Profile</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
//                 <div className="container">
//                     <div className="row gy-5 g-lg-4">
//                         <div className="col-lg-1">
//                             {/* Sidebar code here */}
//                         </div>

//                         <div className="col-lg-10">
//                             <div className="dashboard-content profile-setting">
//                                 <div className="row">
//                                     <div className="col-12">
//                                         <div className="row">
//                                             <div className="col">
//                                                 <div className="accordion" id="accordionExample">
//                                                     <h2>Basic Information</h2>
//                                                     <div className="accordion-item">
//                                                         <h5 className="accordion-header" id="basicInformation">
//                                                             <form action="" method="post" encType="multipart/form-data">
//                                                                 <div className="row g-3 g-md-4">
//                                                                     {/* Form fields */}
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             className="form-control"
//                                                                             name="firstname"
//                                                                             readOnly
//                                                                             value={profileData.firstname}
//                                                                             placeholder="Enter First Name"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             className="form-control"
//                                                                             name="lastname"
//                                                                             readOnly
//                                                                             value={profileData.lastname}
//                                                                             placeholder="Enter Last Name"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="email"
//                                                                             className="form-control"
//                                                                             value={profileData.email}
//                                                                             readOnly
//                                                                             placeholder="Email"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
//                                                                         <select
//                                                                             className="form-select read-only-select"
//                                                                             name="gender"
//                                                                             readOnly
//                                                                             aria-label="gender"
//                                                                             value={profileData.gender}
//                                                                         >
//                                                                             <option value="" disabled>Select Gender</option>
//                                                                             <option value="Male">Male</option>
//                                                                             <option value="Female">Female</option>
//                                                                         </select>
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             readOnly
//                                                                             value={renderPhoneNumber()}
//                                                                             className="form-control"
//                                                                             placeholder="Phone Number"
//                                                                         />
//                                                                         <label htmlFor="requestPhoneNumber">
//                                                                             <input
//                                                                                 type="checkbox"
//                                                                                 id="requestPhoneNumber"
//                                                                                 checked={requestPhoneNumber}
//                                                                                 onChange={(e) => setRequestPhoneNumber(e.target.checked)}
//                                                                             />
//                                                                             Request Phone Number
//                                                                         </label>
//                                                                     </div>
//                                                                     {/* Other form fields */}
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="date"
//                                                                             readOnly
//                                                                             className="form-control"
//                                                                             name="dob"
//                                                                             value={profileData.dob}
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
//                                                                         <select
//                                                                             className="form-select read-only-select"
//                                                                             name="maritalstatus"
//                                                                             readOnly
//                                                                             aria-label="maritalstatus"
//                                                                             value={profileData.maritalstatus}
//                                                                         >
//                                                                             <option value="" disabled>Select status</option>
//                                                                             <option value="Never married">Never married</option>
//                                                                             <option value="Widowed">Widowed</option>
//                                                                             <option value="Divorced">Divorced</option>
//                                                                         </select>
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
//                                                                         <select
//                                                                             className="form-select read-only-select"
//                                                                             name="religion"
//                                                                             readOnly
//                                                                             aria-label="religion"
//                                                                             value={profileData.religion}
//                                                                         >
//                                                                             <option value="" disabled>Select </option>
//                                                                             <option value="Christian">Christian</option>
//                                                                             <option value="Muslim">Muslim</option>
//                                                                             <option value="Hindu">Hindu</option>
//                                                                         </select>
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             readOnly
//                                                                             className="form-control"
//                                                                             name="currentsalary"
//                                                                             value={profileData.currentsalary}
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="height">Height</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             name="height"
//                                                                             readOnly
//                                                                             value={profileData.height}
//                                                                             className="form-control"
//                                                                             placeholder="Enter Height"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             name="occupation"
//                                                                             readOnly
//                                                                             value={profileData.occupation}
//                                                                             className="form-control"
//                                                                             placeholder="Enter Occupation"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-6 form-group">
//                                                                         <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
//                                                                         <input
//                                                                             type="text"
//                                                                             name="weight"
//                                                                             readOnly
//                                                                             value={profileData.weight}
//                                                                             className="form-control"
//                                                                             placeholder="Enter weight"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="col-md-12 form-group">
//                                                                         <label htmlFor="address">Address</label> <span className="text-danger">*</span>
//                                                                         <textarea
//                                                                             name="address"
//                                                                             cols="30"
//                                                                             rows="10"
//                                                                             readOnly
//                                                                             className="form-control"
//                                                                             placeholder="Enter Address"
//                                                                             value={profileData.address}
//                                                                         ></textarea>
//                                                                     </div>
//                                                                     <div className="col-md-12 form-group">
//                                                                         <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
//                                                                         <button
//                                                                             onClick={() => viewIdProof(profileData.photourl)}
//                                                                             className="view-button"
//                                                                         >
//                                                                             <FontAwesomeIcon icon={getFileIconFromName(profileData.photourl)} />
//                                                                         </button>
//                                                                     </div>
//                                                                     <center>
//                                                                         <div className="col-2 text-end">
//                                                                             <button
//                                                                                 type="button"
//                                                                                 className="btn-flower2 btn-full mt-2"
//                                                                                 onClick={handleInterestClick}
//                                                                             >
//                                                                                 Interest
//                                                                             </button>
//                                                                         </div>
//                                                                     </center>
//                                                                 </div>
//                                                             </form>
//                                                         </h5>
//                                                         <div
//                                                             id="collapseBasicInformation"
//                                                             className="accordion-collapse collapse"
//                                                             aria-labelledby="basicInformation"
//                                                             data-bs-parent="#accordionExample"
//                                                         >
//                                                         </div>
//                                                     </div>
//                                                     {/* Additional modals for career info can be added here */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SingleProfileManagement;
