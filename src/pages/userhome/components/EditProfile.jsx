// // import React, { useState, useEffect } from 'react';

// // const ProfileManagement = () => {
// //     const [profileData, setProfileData] = useState({
// //         firstname: '',
// //         lastname: '',
// //         email: '',
// //         mobilenumber: '',
// //         gender: '',
// //         dob: '',
// //         maritalstatus: '',
// //         photourl: '',
// //         religion: '',
// //         currentsalary: '',
// //         height: '',
// //         weight: '',
// //         occupation: '',
// //         password: '',
// //         address: ''
// //     });

// //     const [isEditing, setIsEditing] = useState(false);

// //     const fetchData = async () => {
// //         try {
// //             const response = await fetch('http://localhost:1002/User/getProfileData/${userid}');
// //             const data = await response.json();
// //             setProfileData(data);
// //         } catch (error) {
// //             console.error('Error fetching data:', error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchData();
// //     }, []);

// //     const handleEditClick = () => {
// //         setIsEditing(true);
// //     };

//     // const handleSaveClick = async () => {
//     //     try {
//     //         const response = await fetch('/api/updateProfileData', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify(profileData),
//     //         });
//     //         if (response.ok) {
//     //             setIsEditing(false);
//     //             fetchData(); // Refresh data after saving
//     //         } else {
//     //             console.error('Error saving data');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error saving data:', error);
//     //     }
//     // };

// //     const handleDeleteClick = async () => {
// //         try {
// //             const response = await fetch('/api/deleteProfileData', {
// //                 method: 'DELETE',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ id: profileData.id }),
// //             });
// //             if (response.ok) {
// //                 setProfileData({
// //                     firstname: '',
// //                     lastname: '',
// //                     email: '',
// //                     mobilenumber: '',
// //                     gender: '',
// //                     dob: '',
// //                     maritalstatus: '',
// //                     photourl: '',
// //                     religion: '',
// //                     currentsalary: '',
// //                     height: '',
// //                     weight: '',
// //                     occupation: '',
// //                     password: '',
// //                     address: ''
// //                 });
// //             } else {
// //                 console.error('Error deleting data');
// //             }
// //         } catch (error) {
// //             console.error('Error deleting data:', error);
// //         }
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setProfileData({
// //             ...profileData,
// //             [name]: value
// //         });
// //     };


// //     return (
// //         <div>
// //             <div className="banner">
// //                 <div className="overlay">
// //                     <div className="container">
// //                         <div className="row">
// //                             <div className="col">
// //                                 <div className="header-text">
// //                                     <h2>Manage Profile</h2>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <section className="dashboard-section faq-section faq-page noBoxShadowInForm">
// //                 <div className="container">
// //                     <div className="row gy-5 g-lg-4">
// //                         <div className="col-lg-1">
// //                             {/* Sidebar code here */}
// //                         </div>

// //                         <div className="col-lg-10">
// //                             <div className="dashboard-content profile-setting">
// //                                 <div className="row">
// //                                     <div className="col-12">
// //                                         {/* <div className="dashboard-title">
// //                                             <h5>Manage Profile</h5>
// //                                         </div> */}

// //                                         <div className="row">
// //                                             <div className="col">
// //                                                 <div className="accordion" id="accordionExample">

// //  <h2>Basic Information</h2>
// //                                                     <div className="accordion-item">
// //                                                         <h5 className="accordion-header" id="basicInformation">
                                                           
                                                           
// //                                                             <form action="https://wedding-wonders.bugfinder.net/user/update/information" method="post" enctype="multipart/form-data">
// //                                                                     {/* <input type="hidden" name="_method" value="put" />
// //                                                                     <input type="hidden" name="_token" value="LrzpLHgVovxJciPlSqdViC4mOFgxswgkq0gc799U" /> */}
// //                                                                     <div className="row g-3 g-md-4">
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 className="form-control"
// //                                                                                 name="firstname"
// //                                                                                 value={profileData.firstname}
// //                                                                                 placeholder="Enter First Name"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 className="form-control"
// //                                                                                 name="lastname"
// //                                                                                 value={profileData.lastname}
// //                                                                                 placeholder="Enter Last Name"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="email"
// //                                                                                 className="form-control"
// //                                                                                 value={profileData.email}
// //                                                                                 readOnly
// //                                                                                 placeholder="Email"
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="mobilenumber">Phone Number</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 readOnly
// //                                                                                 value={profileData.mobilenumber}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter Phone Number"
// //                                                                             />
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
// //                                                                             <select
// //                                                                                 className="form-select"
// //                                                                                 name="gender"
// //                                                                                 aria-label="gender"
// //                                                                                 value={profileData.gender}
// //                                                                                 onChange={handleChange}
// //                                                                             >
// //                                                                                 <option value="" disabled>Select Gender</option>
// //                                                                                 <option value="Male">Male</option>
// //                                                                                 <option value="Female">Female</option>
// //                                                                             </select>
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
// //                                                                             <input type="date" className="form-control" name="date_of_birth" value={profileData.date_of_birth} onChange={handleChange} />
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="maritalstatus">Marital Status</label> <span className="text-danger">*</span>
// //                                                                             <select
// //                                                                                 name="maritalstatus"
// //                                                                                 className="form-select"
// //                                                                                 aria-label="Marital status"
// //                                                                                 value={profileData.maritalstatus}
// //                                                                                 onChange={handleChange}
// //                                                                             >
// //                                                                                 <option value="" disabled>Select One</option>
// //                                                                                 <option value="5">Married</option>
// //                                                                                 <option value="4">Never Married</option>
// //                                                                                 <option value="3">Divorced</option>
// //                                                                                 <option value="2">Separated</option>
// //                                                                                 <option value="1">Widowed</option>
// //                                                                             </select>
// //                                                                         </div>
// //                                                                         {/* <div className="row g-3 g-md-4"> */}
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="present_state">Current salary</label> <span className="text-danger">*</span>
// //                                                                             <select id="state-dd" className="form-control" name="present_state" value={profileData.currentsalary} onChange={handleChange}></select>
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="present_city">Height</label> <span className="text-danger">*</span>
// //                                                                             <select id="city-dd" className="form-control" name="present_city" value={profileData.height} onChange={handleChange}></select>
// //                                                                         </div>

// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="present_postcode">Weight</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 name="present_postcode"
// //                                                                                 value={profileData.weight}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter Postal Code"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="Occupation">Occupation</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 name="present_postcode"
// //                                                                                 value={profileData.occupation}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter Ocuupation"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="Salary">Salary</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 name="present_postcode"
// //                                                                                 value={profileData.salary}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter salary"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="Hobbies">Hobbies</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 name="hobbie"
// //                                                                                 value={profileData.hobbie}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter hobbie"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>
// //                                                                         <div className="col-md-6 form-group">
// //                                                                             <label htmlFor="Interest">Interest</label> <span className="text-danger">*</span>
// //                                                                             <input
// //                                                                                 type="text"
// //                                                                                 name="interest"
// //                                                                                 value={profileData.interest}
// //                                                                                 className="form-control"
// //                                                                                 placeholder="Enter interest"
// //                                                                                 onChange={handleChange}
// //                                                                             />
// //                                                                         </div>

// //                                                                         <div className="col-md-12 form-group">
// //                                                                             <label htmlFor="present_address">Address</label> <span className="text-danger">*</span>
// //                                                                             <textarea name="present_address" cols="30" rows="10" className="form-control" placeholder="Enter Present Address" value={profileData.present_address} onChange={handleChange}></textarea>
// //                                                                         </div>
// //                                                                         <div className="col-md-12 form-group">
// //                                                                             <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
// //                                                                             <div className="image-input">
// //                                                                                 <label htmlFor="image-upload" id="image-label"><i className="fas fa-upload"></i></label>
// //                                                                                 <input type="file" name="image" placeholder="Choose image" id="image" onChange={handleChange} />
// //                                                                                 <img className="w-100 preview-image" id="image_preview_container" style={{ maxWidth: '200px' }} src={profileData.photourl} alt="user image" />
// //                                                                             </div>
// //                                                                         </div>
// //                                                                         <div className="col-12 text-end">
// //                                                                             <button type="button" className="btn-flower2 btn-full mt-2" onClick={handleSaveClick}>Update</button>
// //                                                                         </div>
// //                                                                     </div>
                                                                       
                                                                       
// //                                                                     {/* </div> */}
// //                                                                 </form>
// //                                                         </h5>
// //                                                         <div
// //                                                             id="collapseBasicInformation"
// //                                                             className="accordion-collapse collapse"
// //                                                             aria-labelledby="basicInformation"
// //                                                             data-bs-parent="#accordionExample"
// //                                                         >
                                                          
// //                                                         </div>
// //                                                     </div>

// //                                                     {/* Additional modals for career info can be added here */}
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default ProfileManagement;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // // import "./profile.css";

// // const SingleProfileManagement = () => {
// //     // const { userid } = useParams();
// //     const userid = sessionStorage.getItem("UserId");
// //     const [profileData, setProfileData] = useState({
// //         firstname: '',
// //         lastname: '',
// //         email: '',
// //         mobilenumber: '',
// //         gender: '',
// //         dob: '',
// //         maritalstatus: '',
// //         photourl: '',
// //         religion: '',
// //         currentsalary: '',
// //         height: '',
// //         weight: '',
// //         occupation: '',
// //         password: '',
// //         address: ''
// //     });

// //     const [isEditing, setIsEditing] = useState(false);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [error, setError] = useState(null);

// //     const fetchData = async () => {
// //         setIsLoading(true);
// //         try {
// //             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
// //             const data = await response.json();
// //             setProfileData(data);
// //         } catch (error) {
// //             setError('Error fetching data');
// //             console.error('Error fetching data:', error);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };
// //     const handleSaveClick = async () => {
// //         // try {
// //         //     const response = await fetch('/api/updateProfileData', {
// //         //         method: 'POST',
// //         //         headers: {
// //         //             'Content-Type': 'application/json',
// //         //         },
// //         //         body: JSON.stringify(profileData),
// //         //     });
// //         //     if (response.ok) {
// //         //         setIsEditing(false);
// //         //         fetchData(); // Refresh data after saving
// //         //     } else {
// //         //         console.error('Error saving data');
// //         //     }
// //         // } catch (error) {
// //         //     console.error('Error saving data:', error);
// //         // }
        
// //     };
// //     useEffect(() => {
// //         fetchData();
// //     }, [userid]);

// //     const handleEditClick = () => {
// //         setIsEditing(true);
// //     };

    

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setProfileData({
// //             ...profileData,
// //             [name]: value
// //         });
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         const reader = new FileReader();
// //         reader.onloadend = () => {
// //             setProfileData({
// //                 ...profileData,
// //                 image: reader.result
// //             });
// //         };
// //         if (file) {
// //             reader.readAsDataURL(file);
// //         }
// //     };

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const SingleProfileManagement = () => {
//     const userid = sessionStorage.getItem("UserId");
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
//         password: '',
//         address: ''
//     });

//     const [isEditing, setIsEditing] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setProfileData(data);
//         } catch (error) {
//             setError('Error fetching data');
//             console.error('Error fetching data:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//     const handleSaveClick = async () => {
//         try {
//             console.log("Profile data to be updated:", profileData);
//             const response = await fetch(`http://localhost:1002/User/update/${userid}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(profileData),
//             });
//             console.log("API Response:", response);
//             if (response.ok) {
//                 setIsEditing(false);
//                 fetchData(); // Refresh data after saving
//                 alert('Profile updated successfully');
//             } else {
//                 console.error('Error saving data');
//                 alert('Failed to update profile. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error saving data:', error);
//             alert('An error occurred while updating the profile. Please try again later.');
//         }
//     };
    
    

//     useEffect(() => {
//         fetchData();
//     }, [userid]);

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfileData({
//             ...profileData,
//             [name]: value
//         });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setProfileData({
//                 ...profileData,
//                 image: reader.result
//             });
//         };
//         if (file) {
//             reader.readAsDataURL(file);
//         }
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
//                                         {/* <div className="dashboard-title">
//                                             <h5>Manage Profile</h5>
//                                         </div> */}

//                                         <div className="row">
//                                             <div className="col">
//                                                 <div className="accordion" id="accordionExample">

//  <h2>Basic Information</h2>
//                                                     <div className="accordion-item">
//                                                         <h5 className="accordion-header" id="basicInformation">
                                                           
                                                           
//                                                             <form action="" method="post" enctype="multipart/form-data">
//                                                                     {/* <input type="hidden" name="_method" value="put" />
//                                                                     <input type="hidden" name="_token" value="LrzpLHgVovxJciPlSqdViC4mOFgxswgkq0gc799U" /> */}
//                                                                     <div className="row g-3 g-md-4">
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 className="form-control"
//                                                                                 name="firstname" 
//                                                                                 value={profileData.firstname}
//                                                                                 placeholder="Enter First Name"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 className="form-control"
//                                                                                 name="lastname"
//                                                                                 value={profileData.lastname}
//                                                                                 placeholder="Enter Last Name"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="email"
//                                                                                 className="form-control" 
//                                                                                 value={profileData.email}
                                                                                
//                                                                                 placeholder="Email"
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
                                                                               
//                                                                                 value={profileData.mobilenumber}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter Phone Number"
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="gender" 
//                                                                                 aria-label="gender"
//                                                                                 value={profileData.gender}
//                                                                                 onChange={handleChange}
//                                                                             >
//                                                                                 <option value="" disabled>Select Gender</option>
//                                                                                 <option value="Male">Male</option>
//                                                                                 <option value="Female">Female</option>
//                                                                             </select>
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
//                                                                             <input type="date"  className="form-control" name="dob" value={profileData.dob} onChange={handleChange} />
//                                                                         </div>

//                                                                         {/* <div className="col-md-6 form-group">
//     <label htmlFor="marital_status">Marital Status</label> <span className="text-danger">*</span>
//     <select
//         name="marital_status"
//         className="form-select read-only-select"
//         aria-label="Marital status"
//         value={profileData.maritalstatus}
//         onChange={handleChange}
//     >
//         <option value="" disabled>Select One</option>
//         <option value="Married">Married</option>
//         <option value="Never Married">Never Married</option>
//         <option value="Divorced">Divorced</option>
//         <option value="Seperated">Separated</option>
//         <option value="Widowed">Widowed</option>
//     </select>
// </div> */}
// <div className="col-md-6 form-group">
//                                                                             <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="maritalstatus" 
//                                                                                 aria-label="maritalstatus"
//                                                                                 value={profileData.maritalstatus}
//                                                                                 onChange={handleChange}
//                                                                             >
//                                                                                 <option value="" disabled>Select status</option>
//                                                                                 <option value="Never married">Never married</option>
//                                                                                 <option value="Widowed">Widowed</option>
//                                                                                 <option value="Divorced">Divorced</option>
//                                                                             </select>
//                                                                         </div>
//                                                                         {/* <div className="row g-3 g-md-4"> */}
//                                                                         {/* <div className="col-md-6 form-group">
//                                                                             <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
//                                                                             <select id="state-dd" readOnly className="form-control" name="religion" value={profileData.religion} onChange={handleChange}></select>
//                                                                         </div> */}
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="religion" 
//                                                                                 aria-label="religion"
//                                                                                 value={profileData.religion}
//                                                                                 onChange={handleChange}
//                                                                             >
//                                                                                 <option value="" disabled>Select </option>
//                                                                                 <option value="Never married">Christian</option>
//                                                                                 <option value="Widowed">Muslim</option>
//                                                                                 <option value="Divorced">Hindu</option>
//                                                                             </select>
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
//                                                                             <input type="text"  className="form-control" name="dob" value={profileData.currentsalary} onChange={handleChange} />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="height">Height</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 name="height" 
//                                                                                 value={profileData.height}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter Height"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="Occupation">Occupation</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 name="present_postcode" 
//                                                                                 value={profileData.occupation}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter Ocuupation"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="Password">Password</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 name="password" 
//                                                                                 value={profileData.password}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter salary"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="Hobbies">Hobbies</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 name="hobbie"
//                                                                                 value={profileData.hobbie}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter hobbie"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 name="interest" 
//                                                                                 value={profileData.weight}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter weight"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-12 form-group">
//                                                                             <label htmlFor="present_address">Address</label> <span className="text-danger">*</span>
//                                                                             <textarea name="present_address" cols="30" rows="10" className="form-control" placeholder="Enter Present Address" value={profileData.address} onChange={handleChange}></textarea>
//                                                                         </div>
//                                                                         <div className="col-md-12 form-group">
//     <label htmlFor="image">Profile Image</label> <span className="text-danger">*</span>
//     <div className="image-input">
//         <label htmlFor="image-upload" id="image-label"><i className="fas fa-upload"></i></label>
//         <input type="file" name="image" disabled placeholder="Choose image" id="image" onChange={handleChange} />
//         <img className="w-100 preview-image" id="image_preview_container" style={{ maxWidth: '200px' }} src={profileData.photourl} alt="user image" />
//     </div>
//     <div className="col-12 text-end">
//                                                                              <button type="button" className="btn-flower2 btn-full mt-2" onClick={handleSaveClick}>Update</button>
//                                                                          </div>
// </div>


                                                                        
//                                                                     </div>
                                                                       
                                                                       
//                                                                     {/* </div> */}
//                                                                 </form>
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
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const SingleProfileManagement = () => {
//     const userid = sessionStorage.getItem("UserId");
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
//         password: '',
//         address: ''
//     });

//     const [isEditing, setIsEditing] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`http://localhost:1002/User/getProfileData/${userid}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setProfileData(data);
//         } catch (error) {
//             setError('Error fetching data');
//             console.error('Error fetching data:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleSaveClick = async () => {
//         try {
//             console.log("Profile data to be updated:", profileData);
//             const response = await fetch(`http://localhost:1002/User/update/${userid}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(profileData),
//             });
//             console.log("API Response:", response);
//             if (response.ok) {
//                 setIsEditing(false);
//                 fetchData(); // Refresh data after saving
//                 alert('Profile updated successfully');
//             } else {
//                 console.error('Error saving data');
//                 alert('Failed to update profile. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error saving data:', error);
//             alert('An error occurred while updating the profile. Please try again later.');
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [userid]);

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfileData({
//             ...profileData,
//             [name]: value
//         });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setProfileData({
//                 ...profileData,
//                 photourl: reader.result
//             });
//         };
//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     const downloadPDF = () => {
//         const input = document.getElementById('profile-data');
//         html2canvas(input)
//             .then((canvas) => {
//                 const imgData = canvas.toDataURL('image/png');
//                 const pdf = new jsPDF();
//                 const imgWidth = 210; // Width in mm
//                 const pageHeight = 295; // Height in mm
//                 const imgHeight = canvas.height * imgWidth / canvas.width;
//                 let heightLeft = imgHeight;
//                 let position = 0;

//                 pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//                 heightLeft -= pageHeight;
//                 while (heightLeft >= 0) {
//                     position = heightLeft - imgHeight;
//                     pdf.addPage();
//                     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//                     heightLeft -= pageHeight;
//                 }
//                 pdf.save('profile-data.pdf');
//             });
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
//                                         <button 
//                                             type="button" 
//                                             className="btn-flower2 btn-full mb-3" 
//                                             onClick={downloadPDF}
//                                         >
//                                             Download as PDF
//                                         </button>
//                                         <div className="row">
//                                             <div className="col">
//                                                 <div className="accordion" id="accordionExample">
//                                                     <h2>Basic Information</h2>
//                                                     <div className="accordion-item">
//                                                         <h5 className="accordion-header" id="basicInformation">
//                                                             <form action="" method="post" encType="multipart/form-data">
//                                                                 <div id="profile-data">
//                                                                     <div className="row g-3 g-md-4">
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 className="form-control"
//                                                                                 name="firstname" 
//                                                                                 value={profileData.firstname}
//                                                                                 placeholder="Enter First Name"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 className="form-control"
//                                                                                 name="lastname"
//                                                                                 value={profileData.lastname}
//                                                                                 placeholder="Enter Last Name"
//                                                                                 onChange={handleChange}
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="email"
//                                                                                 className="form-control" 
//                                                                                 value={profileData.email}
//                                                                                 placeholder="Email"
//                                                                                 // readOnly
//                                                                             />
//                                                                         </div>
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
//                                                                             <input
//                                                                                 type="text"
//                                                                                 value={profileData.mobilenumber}
//                                                                                 className="form-control"
//                                                                                 placeholder="Enter Phone Number"
//                                                                                 // readOnly
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="gender" 
//                                                                                 aria-label="gender"
//                                                                                 value={profileData.gender}
//                                                                                 onChange={handleChange}
                                                                                
//                                                                             >
//                                                                                 <option value="">Select Gender</option>
//                                                                                 <option value="Male">Male</option>
//                                                                                 <option value="Female">Female</option>
//                                                                             </select>
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="date" 
//                                                                                 className="form-control" 
//                                                                                 name="dob" 
//                                                                                 value={profileData.dob} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="maritalstatus" 
//                                                                                 aria-label="maritalstatus"
//                                                                                 value={profileData.maritalstatus}
//                                                                                 onChange={handleChange}
//                                                                             >
//                                                                                 <option value="" disabled>Select status</option>
//                                                                                 <option value="Never married">Never married</option>
//                                                                                 <option value="Widowed">Widowed</option>
//                                                                                 <option value="Divorced">Divorced</option>
//                                                                             </select>
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="religion">Religion</label> <span className="text-danger">*</span>
//                                                                             <select
//                                                                                 className="form-select "
//                                                                                 name="religion" 
//                                                                                 aria-label="religion"
//                                                                                 value={profileData.religion}
//                                                                                 onChange={handleChange}
//                                                                             >
//                                                                                 <option value="" disabled>Select </option>
//                                                                                 <option value="Christian">Christian</option>
//                                                                                 <option value="Muslim">Muslim</option>
//                                                                                 <option value="Hindu">Hindu</option>
//                                                                             </select>
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="currentsalary">Current salary</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="number" 
//                                                                                 className="form-control" 
//                                                                                 name="currentsalary" 
//                                                                                 value={profileData.currentsalary} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="height">Height</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="text" 
//                                                                                 className="form-control" 
//                                                                                 name="height" 
//                                                                                 value={profileData.height} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="text" 
//                                                                                 className="form-control" 
//                                                                                 name="weight" 
//                                                                                 value={profileData.weight} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="text" 
//                                                                                 className="form-control" 
//                                                                                 name="occupation" 
//                                                                                 value={profileData.occupation} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="address">Address</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="text" 
//                                                                                 className="form-control" 
//                                                                                 name="address" 
//                                                                                 value={profileData.address} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>

//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="password">Password</label> <span className="text-danger">*</span>
//                                                                             <input 
//                                                                                 type="password" 
//                                                                                 className="form-control" 
//                                                                                 name="password" aria-label="Password"
//                                                                                 value={profileData.password} 
//                                                                                 onChange={handleChange} 
//                                                                             />
//                                                                         </div>
                                                                       
//                                                                         <div className="col-md-6 form-group">
//                                                                             <label htmlFor="photourl">Profile Photo</label>
//                                                                             <input 
//                                                                                 type="file" 
//                                                                                 className="form-control" 
//                                                                                 accept="image/*"
//                                                                                 onChange={handleImageChange} 
//                                                                             />
//                                                                             {profileData.photourl && (
//                                                                                 <img 
//                                                                                     src={profileData.photourl} 
//                                                                                     alt="Profile" 
//                                                                                     className="img-thumbnail mt-2" 
//                                                                                     style={{ width: '150px' }} 
//                                                                                 />
//                                                                             )}
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col-12 text-end">
//                                                                     <button 
//                                                                         type="button" 
//                                                                         className="btn-flower2 btn-full mt-2" 
//                                                                         onClick={handleSaveClick}
//                                                                     >
//                                                                         Update
//                                                                     </button>
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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const SingleProfileManagement = () => {
    const userid = sessionStorage.getItem("UserId");
    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobilenumber: '',
        gender: '',
        dob: '',
        maritalstatus: '',
        photourl: '', // URL or blob URL for the profile photo
        religion: '',
        currentsalary: '',
        height: '',
        weight: '',
        occupation: '',
        password: '',
        address: ''
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

            // Fetch profile photo
            const photoResponse = await fetch(`http://localhost:1002/User/getProfilePhoto/${userid}`);
            if (photoResponse.ok) {
                const photoBlob = await photoResponse.blob();
                const photoUrl = URL.createObjectURL(photoBlob);
                setProfileData(prevData => ({ ...prevData, photourl: photoUrl }));
            } else {
                console.error('Error fetching photo');
            }
        } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // const handleSaveClick = async () => {
    //     try {
    //         console.log("Profile data to be updated:", profileData);
    //         const response = await fetch(`http://localhost:1002/User/update/${userid}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(profileData),
    //         });
    //         console.log("API Response:", response);
    //         if (response.ok) {
    //             setIsEditing(false);
    //             fetchData(); // Refresh data after saving
    //             alert('Profile updated successfully');
    //         } else {
    //             console.error('Error saving data');
    //             alert('Failed to update profile. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Error saving data:', error);
    //         alert('An error occurred while updating the profile. Please try again later.');
    //     }
    // };
    const handleSaveClick = async () => {
        try {
            const formData = new FormData();
            formData.append('firstname', profileData.firstname);
            formData.append('lastname', profileData.lastname);
            formData.append('email', profileData.email);
            formData.append('mobilenumber', profileData.mobilenumber);
            formData.append('gender', profileData.gender);
            formData.append('dob', profileData.dob);
            formData.append('maritalstatus', profileData.maritalstatus);
            formData.append('religion', profileData.religion);
            formData.append('currentsalary', profileData.currentsalary);
            formData.append('height', profileData.height);
            formData.append('weight', profileData.weight);
            formData.append('occupation', profileData.occupation);
            formData.append('password', profileData.password);
            formData.append('address', profileData.address);
    
            // Append photo if selected
            if (profileData.photoFile) {
                formData.append('photo', profileData.photoFile);
            }
    
            const response = await fetch(`http://localhost:1002/User/update/${userid}`, {
                method: 'PUT',
                body: formData,
            });
    
            if (response.ok) {
                setIsEditing(false);
                fetchData(); // Refresh data after saving
                alert('Profile updated successfully');
            } else {
                throw new Error('Failed to update profile');
            }
        } catch (error) {
            setError('Error saving data');
            console.error('Error saving data:', error);
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData({
                ...profileData,
                photourl: reader.result // Save the base64 image string
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
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
                                                    <h2>Basic Information</h2>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="basicInformation">
                                                            <form action="" method="post" encType="multipart/form-data">
                                                                <div id="profile-data">
                                                                    <div className="row g-3 g-md-4">
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="firstname">First name</label> <span className="text-danger">*</span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="firstname" 
                                                                                value={profileData.firstname}
                                                                                placeholder="Enter First Name"
                                                                                onChange={handleChange}
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="lastname">Last name</label> <span className="text-danger">*</span>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="lastname"
                                                                                value={profileData.lastname}
                                                                                placeholder="Enter Last Name"
                                                                                onChange={handleChange}
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="email">Email Address</label> <span className="text-danger">*</span>
                                                                            <input
                                                                                type="email"
                                                                                className="form-control" 
                                                                                value={profileData.email}
                                                                                placeholder="Email"
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="phone">Phone Number</label> <span className="text-danger">*</span>
                                                                            <input
                                                                                type="text"
                                                                                value={profileData.mobilenumber}
                                                                                className="form-control"
                                                                                placeholder="Enter Phone Number"
                                                                                readOnly
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="gender">Gender</label> <span className="text-danger">*</span>
                                                                            <select
                                                                                className="form-select "
                                                                                name="gender" 
                                                                                aria-label="gender"
                                                                                value={profileData.gender}
                                                                                onChange={handleChange}
                                                                                
                                                                            >
                                                                                <option value="">Select Gender</option>
                                                                                <option value="Male">Male</option>
                                                                                <option value="Female">Female</option>
                                                                            </select>
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="date_of_birth">Date of Birth</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="date" 
                                                                                className="form-control" 
                                                                                name="dob" 
                                                                                value={profileData.dob} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="maritalstatus">Marital status</label> <span className="text-danger">*</span>
                                                                            <select
                                                                                className="form-select "
                                                                                name="maritalstatus" 
                                                                                aria-label="maritalstatus"
                                                                                value={profileData.maritalstatus}
                                                                                onChange={handleChange}
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
                                                                                className="form-select "
                                                                                name="religion" 
                                                                                aria-label="religion"
                                                                                value={profileData.religion}
                                                                                onChange={handleChange}
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
                                                                                type="number" 
                                                                                className="form-control" 
                                                                                name="currentsalary" 
                                                                                value={profileData.currentsalary} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="height">Height</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="height" 
                                                                                value={profileData.height} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="weight">Weight</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="weight" 
                                                                                value={profileData.weight} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="occupation">Occupation</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="occupation" 
                                                                                value={profileData.occupation} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="address">Address</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="text" 
                                                                                className="form-control" 
                                                                                name="address" 
                                                                                value={profileData.address} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>

                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="password">Password</label> <span className="text-danger">*</span>
                                                                            <input 
                                                                                type="password" 
                                                                                className="form-control" 
                                                                                name="password" aria-label="Password"
                                                                                value={profileData.password} 
                                                                                onChange={handleChange} 
                                                                            />
                                                                        </div>
                                                                       
                                                                        <div className="col-md-6 form-group">
                                                                            <label htmlFor="photourl">Profile Photo</label>
                                                                            <input 
                                                                                type="file" 
                                                                                className="form-control" 
                                                                                accept="image/*"
                                                                                onChange={handleImageChange} 
                                                                            />
                                                                            {profileData.photourl && (
                                                                                <img 
                                                                                    src={profileData.photourl} 
                                                                                    alt="Profile" 
                                                                                    className="img-thumbnail mt-2" 
                                                                                    style={{ width: '150px' }} 
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 text-end">
                                                                    <button 
                                                                        type="button" 
                                                                        className="btn-flower2 btn-full mt-2" 
                                                                        onClick={handleSaveClick}
                                                                    >
                                                                        Update
                                                                    </button>
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
