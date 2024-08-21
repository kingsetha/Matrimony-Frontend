
// // // // import React, { useState, useEffect } from 'react';

// // // // const SearchModal = () => {
// // // //     const [profileData, setProfileData] = useState({
// // // //         firstname: '',
// // // //         userid: '',
// // // //         age: '',
// // // //         height: '',
// // // //         religion: '',
// // // //         caste: '',
// // // //         email: '',
// // // //         maritalStatus: ''
// // // //     });

// // // //     const [isEditing, setIsEditing] = useState(false);

// // // //     const fetchData = async () => {
// // // //         try {
// // // //             const response = await fetch('http://localhost:1002/User/all');
// // // //             if (!response.ok) {
// // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // //             }
// // // //             const data = await response.json();
// // // //             setProfileData(data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching data:', error);
// // // //         }
// // // //     };
    

// // // //     useEffect(() => {
// // // //         fetchData();
// // // //     }, []);

// // // //     const handleEditClick = () => {
// // // //         setIsEditing(true);
// // // //     };

// // // //     const handleDeleteClick = () => {
// // // //         // Code to delete profile data from the database
// // // //         setIsEditing(false);
// // // //     };

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setProfileData({
// // // //             ...profileData,
// // // //             [name]: value
// // // //         });
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <a href="#" className="scroll-up">
// // // //                 <i className="fal fa-chevron-double-up"></i>
// // // //             </a>

// // // //             <div className="banner">
// // // //                 <div className="overlay">
// // // //                     <div className="container">
// // // //                         <div className="row">
// // // //                             <div className="col">
// // // //                                 <div className="header-text">
// // // //                                     <h2>{profileData.firstname}'s Profile</h2>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <section className="profile-section">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         <div className="col">
// // // //                             <div className="member-box d-md-flex">
// // // //                                 <div className="img-box">
// // // //                                     <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     {isEditing ? (
// // // //                                         <input type="text" name="name" value={profileData.firstname} onChange={handleChange} />
// // // //                                     ) : (
// // // //                                         <h4 className="name">{profileData.firstname}</h4>
// // // //                                     )}
// // // //                                     <span className="member-id">Member ID: <span>{profileData.userid}</span></span>
// // // //                                     <div className="row g-2 mt-3 member-info">
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="age" value={profileData.age} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>age : {profileData.age}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="height" value={profileData.height} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>height : {profileData.height}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="religion" value={profileData.religion} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>religion : {profileData.religion}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="caste" value={profileData.caste} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>caste : {profileData.caste}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="email" value={profileData.email} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>email : {profileData.email}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                         <div className="col-6">
// // // //                                             {isEditing ? (
// // // //                                                 <input type="text" name="maritalStatus" value={profileData.maritalStatus} onChange={handleChange} />
// // // //                                             ) : (
// // // //                                                 <span>marital status : {profileData.maritalStatus}</span>
// // // //                                             )}
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <div className="button-group">
// // // //                                         <button type="button" onClick={handleDeleteClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // //                                             Delete Profile
// // // //                                         </button>
// // // //                                         <button type="button" onClick={handleEditClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // //                                             Edit Profile
// // // //                                         </button>
// // // //                                     </div>
// // // //                                 </div>
// // // //                                 <span className="tag">Premium</span>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default SearchModal;
// // // import React, { useState, useEffect } from 'react';

// // // const SearchModal = () => {
// // //     const [profileData, setProfileData] = useState({
// // //         firstname: '',
// // //         userid: '',
// // //         age: '',
// // //         height: '',
// // //         religion: '',
// // //         caste: '',
// // //         location: '',
// // //         maritalStatus: ''
// // //     });

// // //     const [isEditing, setIsEditing] = useState(false);

// // //     const fetchData = async () => {
// // //         try {
// // //             const response = await fetch('http://localhost:1002/User/all');
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             const data = await response.json();
// // //             console.log('Fetched data:', data); // Log the fetched data
// // //             setProfileData(data);
// // //         } catch (error) {
// // //             console.error('Error fetching data:', error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchData();
// // //     }, []);

// // //     const handleEditClick = () => {
// // //         setIsEditing(true);
// // //     };

// // //     const handleDeleteClick = () => {
// // //         // Code to delete profile data from the database
// // //         setIsEditing(false);
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setProfileData({
// // //             ...profileData,
// // //             [name]: value
// // //         });
// // //     };

// // //     return (
// // //         <div>
// // //             <a href="#" className="scroll-up">
// // //                 <i className="fal fa-chevron-double-up"></i>
// // //             </a>

// // //             <div className="banner">
// // //                 <div className="overlay">
// // //                     <div className="container">
// // //                         <div className="row">
// // //                             <div className="col">
// // //                                 <div className="header-text">
// // //                                     <h2>{profileData.firstname}'s Profile</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="profile-section">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         <div className="col">
// // //                             <div className="member-box d-md-flex">
// // //                                 <div className="img-box">
// // //                                     <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// // //                                 </div>
// // //                                 <div>
// // //                                     {isEditing ? (
// // //                                         <input type="text" name="firstname" value={profileData.firstname} onChange={handleChange} />
// // //                                     ) : (
// // //                                         <h4 className="name">{profileData.firstname}</h4>
// // //                                     )}
// // //                                     <span className="member-id">Member ID: <span>{profileData.userid}</span></span>
// // //                                     <div className="row g-2 mt-3 member-info">
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="age" value={profileData.age} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>age : {profileData.age}</span>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="height" value={profileData.height} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>height : {profileData.height}</span>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="religion" value={profileData.religion} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>religion : {profileData.religion}</span>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="caste" value={profileData.caste} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>caste : {profileData.caste}</span>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="location" value={profileData.location} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>location : {profileData.location}</span>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="col-6">
// // //                                             {isEditing ? (
// // //                                                 <input type="text" name="maritalStatus" value={profileData.maritalStatus} onChange={handleChange} />
// // //                                             ) : (
// // //                                                 <span>marital status : {profileData.maritalStatus}</span>
// // //                                             )}
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="button-group">
// // //                                         <button type="button" onClick={handleDeleteClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                             Delete Profile
// // //                                         </button>
// // //                                         <button type="button" onClick={handleEditClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                             Edit Profile
// // //                                         </button>
// // //                                     </div>
// // //                                 </div>
// // //                                 <span className="tag">Premium</span>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SearchModal;
// // import React, { useState, useEffect } from 'react';

// // const SearchModal = () => {
// //     const [profileData, setProfileData] = useState([]);

// //     const [isEditing, setIsEditing] = useState(false);

// //     const fetchData = async () => {
// //         try {
// //             const response = await fetch('http://localhost:1002/User/all');
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             const data = await response.json();
// //             console.log('Fetched data:', data); // Log the fetched data
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

// //     const handleDeleteClick = () => {
// //         // Code to delete profile data from the database
// //         setIsEditing(false);
// //     };

// //     const handleChange = (e, index) => {
// //         const { name, value } = e.target;
// //         const updatedProfileData = [...profileData];
// //         updatedProfileData[index] = {
// //             ...updatedProfileData[index],
// //             [name]: value
// //         };
// //         setProfileData(updatedProfileData);
// //     };

// //     return (
// //         <div>
// //             <a href="#" className="scroll-up">
// //                 <i className="fal fa-chevron-double-up"></i>
// //             </a>

// //             <div className="banner">
// //                 <div className="overlay">
// //                     <div className="container">
// //                         <div className="row">
// //                             <div className="col">
// //                                 <div className="header-text">
// //                                     <h2>Profiles</h2>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <section className="profile-section">
// //                 <div className="container">
// //                     <div className="row">
// //                         {profileData.map((profile, index) => (
// //                             <div className="col" key={profile.userid}>
// //                                 <div className="member-box d-md-flex">
// //                                     <div className="img-box">
// //                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// //                                     </div>
// //                                     <div>
// //                                         {isEditing ? (
// //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// //                                         ) : (
// //                                             <h4 className="name">{profile.firstname}</h4>
// //                                         )}
// //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// //                                         <div className="row g-2 mt-3 member-info">
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>age : {profile.age}</span>
// //                                                 )}
// //                                             </div>
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>height : {profile.height}</span>
// //                                                 )}
// //                                             </div>
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>religion : {profile.religion}</span>
// //                                                 )}
// //                                             </div>
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>caste : {profile.caste}</span>
// //                                                 )}
// //                                             </div>
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="location" value={profile.location} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>location : {profile.location}</span>
// //                                                 )}
// //                                             </div>
// //                                             <div className="col-6">
// //                                                 {isEditing ? (
// //                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// //                                                 ) : (
// //                                                     <span>marital status : {profile.maritalstatus}</span>
// //                                                 )}
// //                                             </div>
// //                                         </div>
// //                                         <div className="button-group">
// //                                             {/* <button type="button" onClick={handleDeleteClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                 Delete Profile
// //                                             </button>
// //                                             <button type="button" onClick={handleEditClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                 Edit Profile
// //                                             </button> */}
// //                                         </div>
// //                                     </div>
// //                                     <span className="tag">Premium</span>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default SearchModal;
// import React, { useState, useEffect } from 'react';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditIndex, setCurrentEditIndex] = useState(null);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Log the fetched data
//             setProfileData(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleEditClick = (index) => {
//         setIsEditing(true);
//         setCurrentEditIndex(index);
//     };

//     const handleSaveClick = async (index) => {
//         setIsEditing(false);
//         setCurrentEditIndex(null);

//         try {
//             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(profileData[index])
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('Data updated successfully');
//             alert('Profile updated successfully');
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;
//         const updatedProfileData = [...profileData];
//         updatedProfileData[index] = {
//             ...updatedProfileData[index],
//             [name]: value
//         };
//         setProfileData(updatedProfileData);
//     };

//     const handleViewClick = async (index) => {
//         // console.log('Delete button clicked for index:', index); // Debugging log
//         // try {
//         //     const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
//         //         method: 'DELETE'
//         //     });
//         //     if (!response.ok) {
//         //         throw new Error(`HTTP error! status: ${response.status}`);
//         //     }
//         //     console.log('Data deleted successfully');
//         //     alert('Profile deleted successfully');
//         //     // Remove the deleted profile from the state
//         //     const updatedProfileData = profileData.filter((_, i) => i !== index);
//         //     setProfileData(updatedProfileData);
//         // } catch (error) {
//         //     console.error('Error deleting data:', error);
//         // }
//         // setIsEditing(false);
//     };

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile, index) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
//                                     </div>
//                                     <div>
//                                         {isEditing && currentEditIndex === index ? (
//                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
//                                         ) : (
//                                             <h4 className="name">{profile.firstname}</h4>
//                                         )}
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>age : {profile.age}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>height : {profile.height}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>religion : {profile.religion}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>caste : {profile.caste}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Gender : {profile.gender}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Occupation : {profile.occupation}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Current salary : {profile.currentsalary}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>DOB : {profile.dob}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Mobile number : {profile.mobilenumber}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>marital status : {profile.maritalstatus}</span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             {/* {isEditing && currentEditIndex === index ? (
//                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Save Profile
//                                                 </button>
//                                             ) : (
//                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Edit Profile
//                                                 </button>
//                                             )} */}
//                                             <button type="button" onClick={() => handleViewClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                 View Profile
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SearchModal;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditIndex, setCurrentEditIndex] = useState(null);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Log the fetched data
//             setProfileData(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleEditClick = (index) => {
//         setIsEditing(true);
//         setCurrentEditIndex(index);
//     };

//     const handleSaveClick = async (index) => {
//         setIsEditing(false);
//         setCurrentEditIndex(null);

//         try {
//             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(profileData[index])
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('Data updated successfully');
//             alert('Profile updated successfully');
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;
//         const updatedProfileData = [...profileData];
//         updatedProfileData[index] = {
//             ...updatedProfileData[index],
//             [name]: value
//         };
//         setProfileData(updatedProfileData);
//     };

//     const handleDeleteClick = async (index) => {
//         console.log('Delete button clicked for index:', index); // Debugging log
//         try {
//             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
//                 method: 'DELETE'
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('Data deleted successfully');
//             alert('Profile deleted successfully');
//             // Remove the deleted profile from the state
//             const updatedProfileData = profileData.filter((_, i) => i !== index);
//             setProfileData(updatedProfileData);
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//         setIsEditing(false);
//     };

//     const handleViewClick = (index) => {
//         // No need to implement anything here
//     };

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile, index) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
//                                     </div>
//                                     <div>
//                                         {isEditing && currentEditIndex === index ? (
//                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
//                                         ) : (
//                                             <h4 className="name">{profile.firstname}</h4>
//                                         )}
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>age : {profile.age}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>height : {profile.height}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>religion : {profile.religion}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>caste : {profile.caste}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Gender : {profile.gender}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Occupation : {profile.occupation}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Current salary : {profile.currentsalary}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>DOB : {profile.dob}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>Mobile number : {profile.mobilenumber}</span>
//                                                 )}
//                                             </div>
//                                             <div className="col-6">
//                                                 {isEditing && currentEditIndex === index ? (
//                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
//                                                 ) : (
//                                                     <span>marital status : {profile.maritalstatus}</span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             <Link to={`/User/${profile.userid}`}>
//                                                 <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     View Profile
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     </div>
                
//             </section>
//         </div>
//     );
// };
//  export default SearchModal;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [loggedInUserId, setLoggedInUserId] = useState(null); // Add state for logged-in user ID

//     // Simulate fetching logged-in user ID (you might fetch this from context or other sources)
//     useEffect(() => {
//         // Example: Fetch or set the logged-in user ID
//         const fetchLoggedInUserId = async () => {
//             try {
//                 // Replace this with the actual fetch or method to get the logged-in user ID
//                 const response = await fetch('http://localhost:1002/User/current');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setLoggedInUserId(data.userid); // Set the logged-in user ID
//             } catch (error) {
//                 console.error('Error fetching logged-in user ID:', error);
//             }
//         };

//         fetchLoggedInUserId();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);
//             // Filter out the logged-in user's profile
//             const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
//             setProfileData(filteredData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [loggedInUserId]); // Fetch data again if logged-inUserId changes

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img
//                                             src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg"
//                                             className="img-fluid"
//                                             alt="member's image"
//                                         />
//                                     </div>
//                                     <div>
//                                         <h4 className="name">{profile.firstname}</h4>
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 <span>Age: {profile.age}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Height: {profile.height}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Religion: {profile.religion}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Caste: {profile.caste}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Gender: {profile.gender}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Occupation: {profile.occupation}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Current Salary: {profile.currentsalary}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>DOB: {profile.dob}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Mobile Number: {profile.mobilenumber}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Marital Status: {profile.maritalstatus}</span>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             <Link to={`/User/${profile.userid}`}>
//                                                 <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     View Profile
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SearchModal;
// import React, { useState, useEffect ,navigate} from 'react';
// import { Link ,useNavigate} from 'react-router-dom';
// import Swal from 'sweetalert2';


// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const navigate = useNavigate();
//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId); // Debugging log
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }

//     }, []);

//     useEffect(() => {
//         if (loggedInUserId !== null) {
//             fetchData();
//         }
//     }, [loggedInUserId]);
//     useEffect(() => {
//         // Show SweetAlert popup when the dashboard is loaded
//         Swal.fire({
//             title: 'Become a Premium Member?',
//             text: 'Do you want to upgrade to a premium membership?',
//             icon: 'question',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, show me the plans!',
//             cancelButtonText: 'No, thanks'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // Redirect to the premium plans page
//                 navigate('/PremiumPlans'); // Adjust the route as needed
//             }
//         });
//     }, [navigate]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Debugging log
//             console.log('Logged in User ID:', loggedInUserId); // Debugging log

//             // Filter out the logged-in user's profile
//             const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
//             console.log('Filtered data:', filteredData); // Debugging log

//             setProfileData(filteredData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img
//                                             src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg"
//                                             className="img-fluid"
//                                             alt="member's image"
//                                         />
//                                     </div>
//                                     <div>
//                                         <h4 className="name">{profile.firstname}</h4>
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 <span>Age: {profile.age}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Height: {profile.height}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Religion: {profile.religion}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Caste: {profile.caste}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Gender: {profile.gender}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Occupation: {profile.occupation}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Current Salary: {profile.currentsalary}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>DOB: {profile.dob}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Mobile Number: {profile.mobilenumber}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Marital Status: {profile.maritalstatus}</span>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             <Link to={`/User/${profile.userid}`}>
//                                                 <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     View Profile
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SearchModal;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2';

const SearchModal = () => {
    const [profileData, setProfileData] = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const navigate = useNavigate(); // Use useNavigate hook to get navigate function

    useEffect(() => {
        // Retrieve logged-in user ID from sessionStorage
        const userId = sessionStorage.getItem('UserId');
        console.log('Retrieved UserId from sessionStorage:', userId); // Debugging log
        if (userId) {
            setLoggedInUserId(Number(userId)); // Convert to integer
        }
    }, []);

    useEffect(() => {
        if (loggedInUserId !== null) {
            fetchData();
        }
    }, [loggedInUserId]);

    // useEffect(() => {
    //     // Show SweetAlert popup when the dashboard is loaded
    //     Swal.fire({
    //         title: 'Become a Premium Member?',
    //         text: 'Do you want to upgrade to a premium membership?',
    //         icon: 'question',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, show me the plans!',
    //         cancelButtonText: 'No, thanks'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Redirect to the premium plans page
    //             navigate('/PremiumPlans'); // Adjust the route as needed
    //         }
    //     });
    // }, [navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:1002/User/all');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data); // Debugging log
            console.log('Logged in User ID:', loggedInUserId); // Debugging log

            // Filter out the logged-in user's profile
            const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
            console.log('Filtered data:', filteredData); // Debugging log

            setProfileData(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <a href="#" className="scroll-up">
                <i className="fal fa-chevron-double-up"></i>
            </a>

            <div className="banner">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-text">
                                    <h2>Profiles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="profile-section">
                <div className="container">
                    <div className="row">
                        {profileData.map((profile) => (
                            <div className="col-6" key={profile.userid}>
                                <div className="member-box d-md-flex">
                                    <div className="img-box">
                                        <img
                                            src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg"
                                            className="img-fluid"
                                            alt="member's image"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="name">{profile.firstname}</h4>
                                        <span className="member-id">Member ID: <span>{profile.userid}</span></span>
                                        <div className="row g-2 mt-3 member-info">
                                            <div className="col-6">
                                                <span>Age: {profile.age}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Height: {profile.height}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Religion: {profile.religion}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Caste: {profile.caste}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Gender: {profile.gender}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Occupation: {profile.occupation}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Current Salary: {profile.currentsalary}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>DOB: {profile.dob}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Mobile Number: {profile.mobilenumber}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Marital Status: {profile.maritalstatus}</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <Link to={`/User/${profile.userid}`}>
                                                <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
                                                    View Profile
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <span className="tag">Premium</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchModal;
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const [preferencesSet, setPreferencesSet] = useState(false); // State to check if preferences are set
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId);
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }
//     }, []);

//     useEffect(() => {
//         if (loggedInUserId !== null) {
//             fetchData();
//         }
//     }, [loggedInUserId]);

//     useEffect(() => {
//         if (!preferencesSet) {
//             showPreferencesPopup();
//         }
//     }, [preferencesSet]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);
//             console.log('Logged in User ID:', loggedInUserId);

//             const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
//             console.log('Filtered data:', filteredData);

//             setProfileData(filteredData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const showPreferencesPopup = async () => {
//         const { value: preferences } = await Swal.fire({
//             title: 'Set Your Preferences',
//             html: `
//                 <label for="age">Age:</label>
//                 <input id="age" class="swal2-input" placeholder="Enter your age" type="number">
//                 <label for="occupation">Occupation:</label>
//                 <input id="occupation" class="swal2-input" placeholder="Enter your occupation">
//                 <label for="gender">Gender:</label>
//                 <select id="gender" class="swal2-input">
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>
//                 <label for="maritalstatus">Marital Status:</label>
//                 <select id="maritalstatus" class="swal2-input">
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                     <option value="divorced">Divorced</option>
//                 </select>
//                 <label for="religion">Religion:</label>
//                 <input id="religion" class="swal2-input" placeholder="Enter your religion">
//             `,
//             confirmButtonText: 'Save Preferences',
//             focusConfirm: false,
//             preConfirm: () => {
//                 const age = Swal.getPopup().querySelector('#age').value;
//                 const occupation = Swal.getPopup().querySelector('#occupation').value;
//                 const gender = Swal.getPopup().querySelector('#gender').value;
//                 const maritalstatus = Swal.getPopup().querySelector('#maritalstatus').value;
//                 const religion = Swal.getPopup().querySelector('#religion').value;

//                 if (!age || !occupation || !gender || !maritalstatus || !religion) {
//                     Swal.showValidationMessage(`Please fill out all fields`);
//                 }

//                 return { age, occupation, gender, maritalstatus, religion };
//             }
//         });

//         if (preferences) {
//             console.log('User preferences:', preferences);
//             setPreferencesSet(true);
//             // You can save the preferences to the server or local storage here
//         }
//     };

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img
//                                             src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg"
//                                             className="img-fluid"
//                                             alt="member's image"
//                                         />
//                                     </div>
//                                     <div>
//                                         <h4 className="name">{profile.firstname}</h4>
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 <span>Age: {profile.age}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Height: {profile.height}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Religion: {profile.religion}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Caste: {profile.caste}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Gender: {profile.gender}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Occupation: {profile.occupation}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Current Salary: {profile.currentsalary}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>DOB: {profile.dob}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Mobile Number: {profile.mobilenumber}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Marital Status: {profile.maritalstatus}</span>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             <Link to={`/User/${profile.userid}`}>
//                                                 <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     View Profile
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SearchModal;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const [preferences, setPreferences] = useState(null); // State to store user preferences
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId);
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }
//     }, []);

//     useEffect(() => {
//         if (loggedInUserId !== null) {
//             if (preferences) {
//                 fetchData(preferences);
//             } else {
//                 showPreferencesPopup(); // Show the preferences popup if not set
//             }
//         }
//     }, [loggedInUserId, preferences]);

//     const fetchData = async (prefs) => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data);
//             console.log('Logged in User ID:', loggedInUserId);

//             // Filter profiles based on preferences
//             const filteredData = data.filter(profile => {
//                 return (
//                     profile.userid !== loggedInUserId &&
//                     (prefs.age ? profile.age === prefs.age : true) &&
//                     (prefs.occupation ? profile.occupation === prefs.occupation : true) &&
//                     (prefs.gender ? profile.gender === prefs.gender : true) &&
//                     (prefs.maritalstatus ? profile.maritalstatus === prefs.maritalstatus : true) &&
//                     (prefs.religion ? profile.religion === prefs.religion : true)
//                 );
//             });
//             console.log('Filtered data:', filteredData);

//             setProfileData(filteredData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const showPreferencesPopup = async () => {
//         const { value: userPreferences } = await Swal.fire({
//             title: 'Set Your Preferences',
//             html: `
//                 <label for="age">Age:</label>
//                 <input id="age" class="swal2-input" placeholder="Enter your age" type="number">
//                 <label for="occupation">Occupation:</label>
//                 <input id="occupation" class="swal2-input" placeholder="Enter your occupation">
//                 <label for="gender">Gender:</label>
//                 <select id="gender" class="swal2-input">
//                     <option value="">Any</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>
//                 <label for="maritalstatus">Marital Status:</label>
//                 <select id="maritalstatus" class="swal2-input">
//                     <option value="">Any</option>
//                     <option value="single">Single</option>
//                     <option value="married">Married</option>
//                     <option value="divorced">Divorced</option>
//                 </select>
//                 <label for="religion">Religion:</label>
//                 <input id="religion" class="swal2-input" placeholder="Enter your religion">
//             `,
//             confirmButtonText: 'Save Preferences',
//             focusConfirm: false,
//             preConfirm: () => {
//                 const age = Swal.getPopup().querySelector('#age').value || null;
//                 const occupation = Swal.getPopup().querySelector('#occupation').value || null;
//                 const gender = Swal.getPopup().querySelector('#gender').value || null;
//                 const maritalstatus = Swal.getPopup().querySelector('#maritalstatus').value || null;
//                 const religion = Swal.getPopup().querySelector('#religion').value || null;

//                 return { age, occupation, gender, maritalstatus, religion };
//             }
//         });

//         if (userPreferences) {
//             console.log('User preferences:', userPreferences);
//             setPreferences(userPreferences); // Update state with user preferences
//         }
//     };

//     return (
//         <div>
//             <a href="#" className="scroll-up">
//                 <i className="fal fa-chevron-double-up"></i>
//             </a>

//             <div className="banner">
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text">
//                                     <h2>Profiles</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="profile-section">
//                 <div className="container">
//                     <div className="row">
//                         {profileData.map((profile) => (
//                             <div className="col-6" key={profile.userid}>
//                                 <div className="member-box d-md-flex">
//                                     <div className="img-box">
//                                         <img
//                                             src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg"
//                                             className="img-fluid"
//                                             alt="member's image"
//                                         />
//                                     </div>
//                                     <div>
//                                         <h4 className="name">{profile.firstname}</h4>
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             <div className="col-6">
//                                                 <span>Age: {profile.age}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Height: {profile.height}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Religion: {profile.religion}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Caste: {profile.caste}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Gender: {profile.gender}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Occupation: {profile.occupation}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Current Salary: {profile.currentsalary}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>DOB: {profile.dob}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Mobile Number: {profile.mobilenumber}</span>
//                                             </div>
//                                             <div className="col-6">
//                                                 <span>Marital Status: {profile.maritalstatus}</span>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             <Link to={`/User/${profile.userid}`}>
//                                                 <button type="button" style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     View Profile
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <span className="tag">Premium</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SearchModal;









