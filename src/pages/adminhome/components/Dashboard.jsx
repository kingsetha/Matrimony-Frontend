
// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // const SearchModal = () => {
// // // // // //     const [profileData, setProfileData] = useState([]);

// // // // // //     const [isEditing, setIsEditing] = useState(false);

// // // // // //     const fetchData = async () => {
// // // // // //         try {
// // // // // //             const response = await fetch('http://localhost:1002/User/all');
// // // // // //             if (!response.ok) {
// // // // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // // // //             }
// // // // // //             const data = await response.json();
// // // // // //             console.log('Fetched data:', data); // Log the fetched data
// // // // // //             setProfileData(data);
// // // // // //         } catch (error) {
// // // // // //             console.error('Error fetching data:', error);
// // // // // //         }
// // // // // //     };
    

// // // // // //     useEffect(() => {
// // // // // //         fetchData();
// // // // // //     }, []);

// // // // // //     const handleEditClick = () => {
// // // // // //         setIsEditing(true);
// // // // // //     };

// // // // // //     const handleDeleteClick = () => {
// // // // // //         // Code to delete profile data from the database
// // // // // //         setIsEditing(false);
// // // // // //     };

// // // // // //     const handleChange = async (e, index) => {
// // // // // //         const { name, value } = e.target;
// // // // // //         const updatedProfileData = [...profileData];
// // // // // //         updatedProfileData[index] = {
// // // // // //             ...updatedProfileData[index],
// // // // // //             [name]: value
// // // // // //         };
// // // // // //         setProfileData(updatedProfileData);
    
// // // // // //         try {
// // // // // //             const response = await fetch(`http://localhost:1002/User/update/${updatedProfileData[index].userid}`, {
// // // // // //                 method: 'PUT',
// // // // // //                 headers: {
// // // // // //                     'Content-Type': 'application/json'
// // // // // //                 },
// // // // // //                 body: JSON.stringify(updatedProfileData[index])
// // // // // //             });
// // // // // //             if (!response.ok) {
// // // // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // // // //             }
// // // // // //             console.log('Data updated successfully');
// // // // // //         } catch (error) {
// // // // // //             console.error('Error updating data:', error);
// // // // // //         }
// // // // // //     };
    

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <a href="#" className="scroll-up">
// // // // // //                 <i className="fal fa-chevron-double-up"></i>
// // // // // //             </a>

// // // // // //             <div className="banner">
// // // // // //                 <div className="overlay">
// // // // // //                     <div className="container">
// // // // // //                         <div className="row">
// // // // // //                             <div className="col">
// // // // // //                                 <div className="header-text">
// // // // // //                                     <h2>Profiles</h2>
// // // // // //                                 </div>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </div>

// // // // // //             <section className="profile-section">
// // // // // //                 <div className="container">
// // // // // //                     <div className="row">
// // // // // //                         {profileData.map((profile, index) => (
// // // // // //                             <div className="col" key={profile.userid}>
// // // // // //                                 <div className="member-box d-md-flex">
// // // // // //                                     <div className="img-box">
// // // // // //                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// // // // // //                                     </div>
// // // // // //                                     <div>
// // // // // //                                         {isEditing ? (
// // // // // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // // // // //                                         ) : (
// // // // // //                                             <h4 className="name">{profile.firstname}</h4>
// // // // // //                                         )}
// // // // // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // // // // //                                         <div className="row g-2 mt-3 member-info">
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>age : {profile.age}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>height : {profile.height}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>religion : {profile.religion}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>caste : {profile.caste}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="location" value={profile.location} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>location : {profile.location}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                             <div className="col-6">
// // // // // //                                                 {isEditing ? (
// // // // // //                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // // // // //                                                 ) : (
// // // // // //                                                     <span>marital status : {profile.maritalstatus}</span>
// // // // // //                                                 )}
// // // // // //                                             </div>
// // // // // //                                         </div>
// // // // // //                                         <div className="button-group">
// // // // // //                                             <button type="button" onClick={handleDeleteClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // // // //                                                 Delete Profile
// // // // // //                                             </button>
// // // // // //                                             <button type="button" onClick={handleEditClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // // // //                                                 Edit Profile
// // // // // //                                             </button>
// // // // // //                                         </div>
// // // // // //                                     </div>
// // // // // //                                     <span className="tag">Premium</span>
// // // // // //                                 </div>
// // // // // //                             </div>
// // // // // //                         ))}
// // // // // //                     </div>
// // // // // //                 </div>
// // // // // //             </section>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default SearchModal;
// // // // // import React, { useState, useEffect } from 'react';

// // // // // const SearchModal = () => {
// // // // //     const [profileData, setProfileData] = useState([]);
// // // // //     const [isEditing, setIsEditing] = useState(false);
// // // // //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

// // // // //     const fetchData = async () => {
// // // // //         try {
// // // // //             const response = await fetch('http://localhost:1002/User/all');
// // // // //             if (!response.ok) {
// // // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // // //             }
// // // // //             const data = await response.json();
// // // // //             console.log('Fetched data:', data); // Log the fetched data
// // // // //             setProfileData(data);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching data:', error);
// // // // //         }
// // // // //     };

// // // // //     useEffect(() => {
// // // // //         fetchData();
// // // // //     }, []);
// // // // //     const handleDeleteClick = async (index) => {
// // // // //         console.log('Delete button clicked for index:', index); // Debugging log
// // // // //         try {
// // // // //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// // // // //                 method: 'DELETE'
// // // // //             });
// // // // //             if (!response.ok) {
// // // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // // //             }
// // // // //             console.log('Data deleted successfully');
// // // // //             // Remove the deleted profile from the state
// // // // //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// // // // //             setProfileData(updatedProfileData);
// // // // //         } catch (error) {
// // // // //             console.error('Error deleting data:', error);
// // // // //         }
// // // // //         setIsEditing(false);
// // // // //     };

// // // // //     const handleEditClick = (index) => {
// // // // //         setIsEditing(true);
// // // // //         setCurrentEditIndex(index);
// // // // //     };

// // // // //     const handleSaveClick = async (index) => {
// // // // //         setIsEditing(false);
// // // // //         setCurrentEditIndex(null);

// // // // //         try {
// // // // //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// // // // //                 method: 'PUT',
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json'
// // // // //                 },
// // // // //                 body: JSON.stringify(profileData[index])
// // // // //             });
// // // // //             if (!response.ok) {
// // // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // // //             }
// // // // //             console.log('Data updated successfully');
// // // // //         } catch (error) {
// // // // //             console.error('Error updating data:', error);
// // // // //         }
// // // // //     };

// // // // //     const handleChange = (e, index) => {
// // // // //         const { name, value } = e.target;
// // // // //         const updatedProfileData = [...profileData];
// // // // //         updatedProfileData[index] = {
// // // // //             ...updatedProfileData[index],
// // // // //             [name]: value
// // // // //         };
// // // // //         setProfileData(updatedProfileData);
// // // // //     };

// // // // //     return (
// // // // //         <div>
// // // // //             <a href="#" className="scroll-up">
// // // // //                 <i className="fal fa-chevron-double-up"></i>
// // // // //             </a>

// // // // //             <div className="banner">
// // // // //                 <div className="overlay">
// // // // //                     <div className="container">
// // // // //                         <div className="row">
// // // // //                             <div className="col">
// // // // //                                 <div className="header-text">
// // // // //                                     <h2>Profiles</h2>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <section className="profile-section">
// // // // //                 <div className="container">
// // // // //                     <div className="row ">
// // // // //                         {profileData.map((profile, index) => (
// // // // //                             <div className="col-6" key={profile.userid}>
// // // // //                                 <div className="member-box d-md-flex">
// // // // //                                     <div className="img-box">
// // // // //                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// // // // //                                     </div>
// // // // //                                     <div>
// // // // //                                         {isEditing && currentEditIndex === index ? (
// // // // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // // // //                                         ) : (
// // // // //                                             <h4 className="name">{profile.firstname}</h4>
// // // // //                                         )}
// // // // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // // // //                                         <div className="row g-2 mt-3 member-info">
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>age : {profile.age}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>height : {profile.height}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>religion : {profile.religion}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>caste : {profile.caste}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>Gender : {profile.gender}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>Occupation : {profile.occupation}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>Current salary : {profile.currentsalary}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>DOB : {profile.dob}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>Mobile number : {profile.mobilenumber}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                             <div className="col-6">
// // // // //                                                 {isEditing && currentEditIndex === index ? (
// // // // //                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // // // //                                                 ) : (
// // // // //                                                     <span>marital status : {profile.maritalstatus}</span>
// // // // //                                                 )}
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                         <div className="button-group">
// // // // //                                             {isEditing && currentEditIndex === index ? (
// // // // //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // // //                                                     Save Profile
// // // // //                                                 </button>
// // // // //                                             ) : (
// // // // //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // // //                                                     Edit Profile
// // // // //                                                 </button>
// // // // //                                             )}
// // // // //                                             <button type="button" onClick={handleDeleteClick} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // // //                                                 Delete Profile
// // // // //                                             </button>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                     <span className="tag">Premium</span>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default SearchModal;
// // // // import React, { useState, useEffect } from 'react';

// // // // const SearchModal = () => {
// // // //     const [profileData, setProfileData] = useState([]);
// // // //     const [isEditing, setIsEditing] = useState(false);
// // // //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

// // // //     const fetchData = async () => {
// // // //         try {
// // // //             const response = await fetch('http://localhost:1002/User/all');
// // // //             if (!response.ok) {
// // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // //             }
// // // //             const data = await response.json();
// // // //             console.log('Fetched data:', data); // Log the fetched data
// // // //             setProfileData(data);
// // // //         } catch (error) {
// // // //             console.error('Error fetching data:', error);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         fetchData();
// // // //     }, []);

// // // //     const handleEditClick = (index) => {
// // // //         setIsEditing(true);
// // // //         setCurrentEditIndex(index);
// // // //     };

// // // //     const handleSaveClick = async (index) => {
// // // //         setIsEditing(false);
// // // //         setCurrentEditIndex(null);

// // // //         try {
// // // //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// // // //                 method: 'PUT',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify(profileData[index])
// // // //             });
// // // //             if (!response.ok) {
// // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // //             }
// // // //             console.log('Data updated successfully');
// // // //         } catch (error) {
// // // //             console.error('Error updating data:', error);
// // // //         }
// // // //     };

// // // //     const handleChange = (e, index) => {
// // // //         const { name, value } = e.target;
// // // //         const updatedProfileData = [...profileData];
// // // //         updatedProfileData[index] = {
// // // //             ...updatedProfileData[index],
// // // //             [name]: value
// // // //         };
// // // //         setProfileData(updatedProfileData);
// // // //     };

// // // //     const handleDeleteClick = async (index) => {
// // // //         console.log('Delete button clicked for index:', index); // Debugging log
// // // //         try {
// // // //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// // // //                 method: 'DELETE'
// // // //             });
// // // //             if (!response.ok) {
// // // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // // //             }
// // // //             console.log('Data deleted successfully');
// // // //             alert('Profile deleted successfully');
// // // //             // Remove the deleted profile from the state
// // // //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// // // //             setProfileData(updatedProfileData);
// // // //         } catch (error) {
// // // //             console.error('Error deleting data:', error);
// // // //         }
// // // //         setIsEditing(false);
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
// // // //                                     <h2>Profiles</h2>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             <section className="profile-section">
// // // //                 <div className="container">
// // // //                     <div className="row">
// // // //                         {profileData.map((profile, index) => (
// // // //                             <div className="col-6" key={profile.userid}>
// // // //                                 <div className="member-box d-md-flex">
// // // //                                     <div className="img-box">
// // // //                                         <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
// // // //                                     </div>
// // // //                                     <div>
// // // //                                         {isEditing && currentEditIndex === index ? (
// // // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // // //                                         ) : (
// // // //                                             <h4 className="name">{profile.firstname}</h4>
// // // //                                         )}
// // // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // // //                                         <div className="row g-2 mt-3 member-info">
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>age : {profile.age}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>height : {profile.height}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>religion : {profile.religion}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>caste : {profile.caste}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>Gender : {profile.gender}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>Occupation : {profile.occupation}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>Current salary : {profile.currentsalary}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>DOB : {profile.dob}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>Mobile number : {profile.mobilenumber}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                             <div className="col-6">
// // // //                                                 {isEditing && currentEditIndex === index ? (
// // // //                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // // //                                                 ) : (
// // // //                                                     <span>marital status : {profile.maritalstatus}</span>
// // // //                                                 )}
// // // //                                             </div>
// // // //                                         </div>
// // // //                                         <div className="button-group">
// // // //                                             {isEditing && currentEditIndex === index ? (
// // // //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // //                                                     Save Profile
// // // //                                                 </button>
// // // //                                             ) : (
// // // //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // //                                                     Edit Profile
// // // //                                                 </button>
// // // //                                             )}
// // // //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // // //                                                 Delete Profile
// // // //                                             </button>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     <span className="tag">Premium</span>
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default SearchModal;
// // // import React, { useState, useEffect } from 'react';
// // // import './nav.css';

// // // const SearchModal = () => {
// // //     const [profileData, setProfileData] = useState([]);
// // //     const [isEditing, setIsEditing] = useState(false);
// // //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

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

// // //     const handleEditClick = (index) => {
// // //         setIsEditing(true);
// // //         setCurrentEditIndex(index);
// // //     };

// // //     const handleSaveClick = async (index) => {
// // //         setIsEditing(false);
// // //         setCurrentEditIndex(null);

// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// // //                 method: 'PUT',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify(profileData[index])
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data updated successfully');
// // //             alert('Profile updated successfully');
// // //         } catch (error) {
// // //             console.error('Error updating data:', error);
// // //         }
// // //     };

// // //     const handleChange = (e, index) => {
// // //         const { name, value } = e.target;
// // //         const updatedProfileData = [...profileData];
// // //         updatedProfileData[index] = {
// // //             ...updatedProfileData[index],
// // //             [name]: value
// // //         };
// // //         setProfileData(updatedProfileData);
// // //     };

// // //     const handleDeleteClick = async (index) => {
// // //         console.log('Delete button clicked for index:', index); // Debugging log
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// // //                 method: 'DELETE'
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data deleted successfully');
// // //             alert('Profile deleted successfully');
// // //             // Remove the deleted profile from the state
// // //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// // //             setProfileData(updatedProfileData);
// // //         } catch (error) {
// // //             console.error('Error deleting data:', error);
// // //         }
// // //         setIsEditing(false);
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
// // //                                     <h2>Profiles</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="profile-section">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         {profileData.map((profile, index) => (
// // //                             <div className="col-6" key={profile.userid}>
// // //                                 <div className="member-box d-md-flex">
// // //                                     <div className="img-box">
// // //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// // //                                     </div>
// // //                                     <div>
// // //                                         {isEditing && currentEditIndex === index ? (
// // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // //                                         ) : (
// // //                                             <h4 className="name">{profile.firstname}</h4>
// // //                                         )}
// // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // //                                         <div className="row g-2 mt-3 member-info">
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>age : {profile.age}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>height : {profile.height}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>religion : {profile.religion}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>caste : {profile.caste}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Gender : {profile.gender}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Occupation : {profile.occupation}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Current salary : {profile.currentsalary}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>DOB : {profile.dob}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Mobile number : {profile.mobilenumber}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="maritalStatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>marital status : {profile.maritalstatus}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className="button-group">
// // //                                             {isEditing && currentEditIndex === index ? (
// // //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Save Profile
// // //                                                 </button>
// // //                                             ) : (
// // //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Edit Profile
// // //                                                 </button>
// // //                                             )}
// // //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                 Delete Profile
// // //                                             </button>
// // //                                         </div>
// // //                                     </div>
// // //                                     <span className="tag">Premium</span>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SearchModal;
// // // import React, { useState, useEffect } from 'react';
// // // import './nav.css';

// // // const SearchModal = () => {
// // //     const [profileData, setProfileData] = useState([]);
// // //     const [isEditing, setIsEditing] = useState(false);
// // //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

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

// // //     const handleEditClick = (index) => {
// // //         setIsEditing(true);
// // //         setCurrentEditIndex(index);
// // //     };

// // //     const handleSaveClick = async (index) => {
// // //         setIsEditing(false);
// // //         setCurrentEditIndex(null);

// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// // //                 method: 'PUT',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify(profileData[index])
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data updated successfully');
// // //             alert('Profile updated successfully');
// // //         } catch (error) {
// // //             console.error('Error updating data:', error);
// // //         }
// // //     };

// // //     const handleChange = (e, index) => {
// // //         const { name, value } = e.target;
// // //         const updatedProfileData = [...profileData];
// // //         updatedProfileData[index] = {
// // //             ...updatedProfileData[index],
// // //             [name]: value
// // //         };
// // //         setProfileData(updatedProfileData);
// // //     };

// // //     const handleBlockToggle = async (index) => {
// // //         const updatedProfileData = [...profileData];
// // //         const blocked = !updatedProfileData[index].blocked;
// // //         updatedProfileData[index] = { ...updatedProfileData[index], blocked };
// // //         setProfileData(updatedProfileData);

// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/update/${updatedProfileData[index].userid}`, {
// // //                 method: 'PUT',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify({ blocked })
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('User block status updated successfully');
// // //             alert(`User ${blocked ? 'blocked' : 'unblocked'} successfully`);
// // //         } catch (error) {
// // //             console.error('Error updating block status:', error);
// // //         }
// // //     };

// // //     const handleDeleteClick = async (index) => {
// // //         console.log('Delete button clicked for index:', index); // Debugging log
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// // //                 method: 'DELETE'
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data deleted successfully');
// // //             alert('Profile deleted successfully');
// // //             // Remove the deleted profile from the state
// // //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// // //             setProfileData(updatedProfileData);
// // //         } catch (error) {
// // //             console.error('Error deleting data:', error);
// // //         }
// // //         setIsEditing(false);
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
// // //                                     <h2>Profiles</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="profile-section">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         {profileData.map((profile, index) => (
// // //                             <div className="col-6" key={profile.userid}>
// // //                                 <div className="member-box d-md-flex">
// // //                                     <div className="img-box">
// // //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// // //                                     </div>
// // //                                     <div>
// // //                                         {isEditing && currentEditIndex === index ? (
// // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // //                                         ) : (
// // //                                             <h4 className="name">{profile.firstname}</h4>
// // //                                         )}
// // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // //                                         <div className="row g-2 mt-3 member-info">
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Age: {profile.age}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Height: {profile.height}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Religion: {profile.religion}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Caste: {profile.caste}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Gender: {profile.gender}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Occupation: {profile.occupation}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Current Salary: {profile.currentsalary}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>DOB: {profile.dob}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Mobile Number: {profile.mobilenumber}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="maritalstatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Marital Status: {profile.maritalstatus}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 <label>
// // //                                                     Blocked:
// // //                                                     <input
// // //                                                         type="checkbox"
// // //                                                         checked={profile.blocked || false}
// // //                                                         onChange={() => handleBlockToggle(index)}
// // //                                                         disabled={isEditing}
// // //                                                     />
// // //                                                 </label>
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className="button-group">
// // //                                             {isEditing && currentEditIndex === index ? (
// // //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Save Profile
// // //                                                 </button>
// // //                                             ) : (
// // //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Edit Profile
// // //                                                 </button>
// // //                                             )}
// // //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                 Delete Profile
// // //                                             </button>
// // //                                         </div>
// // //                                     </div>
// // //                                     <span className="tag">Premium</span>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SearchModal;
// // // import React, { useState, useEffect } from 'react';
// // // import './nav.css';

// // // const SearchModal = () => {
// // //     const [profileData, setProfileData] = useState([]);
// // //     const [isEditing, setIsEditing] = useState(false);
// // //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

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

// // //     const handleEditClick = (index) => {
// // //         setIsEditing(true);
// // //         setCurrentEditIndex(index);
// // //     };

// // //     const handleSaveClick = async (index) => {
// // //         setIsEditing(false);
// // //         setCurrentEditIndex(null);

// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// // //                 method: 'PUT',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify(profileData[index])
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data updated successfully');
// // //             alert('Profile updated successfully');
// // //             fetchData(); // Refresh data after update
// // //         } catch (error) {
// // //             console.error('Error updating data:', error);
// // //         }
// // //     };

// // //     const handleChange = (e, index) => {
// // //         const { name, value } = e.target;
// // //         const updatedProfileData = [...profileData];
// // //         updatedProfileData[index] = {
// // //             ...updatedProfileData[index],
// // //             [name]: value
// // //         };
// // //         setProfileData(updatedProfileData);
// // //     };

// // //     const handleBlockToggle = async (index) => {
// // //         const updatedProfileData = [...profileData];
// // //         const blocked = !updatedProfileData[index].blocked;
// // //         updatedProfileData[index] = { ...updatedProfileData[index], blocked };
// // //         setProfileData(updatedProfileData);

// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/block/${updatedProfileData[index].userid}`, {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify({ blocked })
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('User block status updated successfully');
// // //             alert(`User ${blocked ? 'blocked' : 'unblocked'} successfully`);
// // //             fetchData(); // Refresh data after block/unblock
// // //         } catch (error) {
// // //             console.error('Error updating block status:', error);
// // //         }
// // //     };

// // //     const handleDeleteClick = async (index) => {
// // //         console.log('Delete button clicked for index:', index); // Debugging log
// // //         try {
// // //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// // //                 method: 'DELETE'
// // //             });
// // //             if (!response.ok) {
// // //                 throw new Error(`HTTP error! status: ${response.status}`);
// // //             }
// // //             console.log('Data deleted successfully');
// // //             alert('Profile deleted successfully');
// // //             // Remove the deleted profile from the state
// // //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// // //             setProfileData(updatedProfileData);
// // //         } catch (error) {
// // //             console.error('Error deleting data:', error);
// // //         }
// // //         setIsEditing(false);
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
// // //                                     <h2>Profiles</h2>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             <section className="profile-section">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         {profileData.map((profile, index) => (
// // //                             <div className="col-6" key={profile.userid}>
// // //                                 <div className="member-box d-md-flex">
// // //                                     <div className="img-box">
// // //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// // //                                     </div>
// // //                                     <div>
// // //                                         {isEditing && currentEditIndex === index ? (
// // //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// // //                                         ) : (
// // //                                             <h4 className="name">{profile.firstname}</h4>
// // //                                         )}
// // //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// // //                                         <div className="row g-2 mt-3 member-info">
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="age" value={profile.age} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Age: {profile.age}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="height" value={profile.height} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Height: {profile.height}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="religion" value={profile.religion} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Religion: {profile.religion}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="caste" value={profile.caste} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Caste: {profile.caste}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="gender" value={profile.gender} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Gender: {profile.gender}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="occupation" value={profile.occupation} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Occupation: {profile.occupation}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="currentsalary" value={profile.currentsalary} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Current Salary: {profile.currentsalary}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="dob" value={profile.dob} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>DOB: {profile.dob}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="mobilenumber" value={profile.mobilenumber} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Mobile Number: {profile.mobilenumber}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 {isEditing && currentEditIndex === index ? (
// // //                                                     <input type="text" name="maritalstatus" value={profile.maritalstatus} onChange={(e) => handleChange(e, index)} />
// // //                                                 ) : (
// // //                                                     <span>Marital Status: {profile.maritalstatus}</span>
// // //                                                 )}
// // //                                             </div>
// // //                                             <div className="col-6">
// // //                                                 <label>
// // //                                                     Blocked:
// // //                                                     <input
// // //                                                         type="checkbox"
// // //                                                         checked={profile.blocked || false}
// // //                                                         onChange={() => handleBlockToggle(index)}
// // //                                                         disabled={isEditing}
// // //                                                     />
// // //                                                 </label>
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className="button-group">
// // //                                             {isEditing && currentEditIndex === index ? (
// // //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Save Profile
// // //                                                 </button>
// // //                                             ) : (
// // //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                     Edit Profile
// // //                                                 </button>
// // //                                             )}
// // //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// // //                                                 Delete Profile
// // //                                             </button>
// // //                                         </div>
// // //                                     </div>
// // //                                     <span className="tag">Premium</span>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default SearchModal;
// // import React, { useState, useEffect } from 'react';
// // import './nav.css';

// // const SearchModal = () => {
// //     const [profileData, setProfileData] = useState([]);
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

// //     // Fetch profile data
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

// //     // Handle editing a profile
// //     const handleEditClick = (index) => {
// //         setIsEditing(true);
// //         setCurrentEditIndex(index);
// //     };

// //     // Handle saving edited profile
// //     const handleSaveClick = async (index) => {
// //         setIsEditing(false);
// //         setCurrentEditIndex(null);

// //         try {
// //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// //                 method: 'PUT',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(profileData[index])
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data updated successfully');
// //             alert('Profile updated successfully');
// //             fetchData(); // Refresh data after update
// //         } catch (error) {
// //             console.error('Error updating data:', error);
// //         }
// //     };

// //     // Handle profile data change
// //     const handleChange = (e, index) => {
// //         const { name, value } = e.target;
// //         const updatedProfileData = [...profileData];
// //         updatedProfileData[index] = {
// //             ...updatedProfileData[index],
// //             [name]: value
// //         };
// //         setProfileData(updatedProfileData);
// //     };

// //     // Toggle block status
// //     const handleBlockToggle = async (index) => {
// //         // Copy the profile data
// //         const updatedProfileData = [...profileData];
// //         // Toggle the blocked status
// //         const blocked = !updatedProfileData[index].blocked;
// //         updatedProfileData[index] = { ...updatedProfileData[index], blocked };
        
// //         // Optimistically update the UI
// //         setProfileData(updatedProfileData);

// //         try {
// //             // Send update request to the backend
// //             const response = await fetch(`http://localhost:1002/User/block/${updatedProfileData[index].userid}`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ blocked })
// //             });

// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('User block status updated successfully');
// //             alert(`User ${blocked ? 'blocked' : 'unblocked'} successfully`);
// //         } catch (error) {
// //             console.error('Error updating block status:', error);
// //             // Revert the change if there was an error
// //             fetchData();
// //         }
// //     };

// //     // Handle profile deletion
// //     const handleDeleteClick = async (index) => {
// //         console.log('Delete button clicked for index:', index); // Debugging log
// //         try {
// //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// //                 method: 'DELETE'
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data deleted successfully');
// //             alert('Profile deleted successfully');
// //             // Remove the deleted profile from the state
// //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// //             setProfileData(updatedProfileData);
// //         } catch (error) {
// //             console.error('Error deleting data:', error);
// //         }
// //         setIsEditing(false);
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
// //                             <div className="col-6" key={profile.userid}>
// //                                 <div className="member-box d-md-flex">
// //                                     <div className="img-box">
// //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// //                                     </div>
// //                                     <div>
// //                                         {isEditing && currentEditIndex === index ? (
// //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// //                                         ) : (
// //                                             <h4 className="name">{profile.firstname}</h4>
// //                                         )}
// //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// //                                         <div className="row g-2 mt-3 member-info">
// //                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
// //                                                 <div className="col-6" key={field}>
// //                                                     {isEditing && currentEditIndex === index ? (
// //                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
// //                                                     ) : (
// //                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
// //                                                     )}
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-6">
// //                                                 <label>
// //                                                     Blocked:
// //                                                     <input
// //                                                         type="checkbox"
// //                                                         checked={profile.blocked || false}
// //                                                         onChange={() => handleBlockToggle(index)}
// //                                                         disabled={isEditing}
// //                                                     />
// //                                                 </label>
// //                                             </div>
// //                                         </div>
// //                                         <div className="button-group">
// //                                             {isEditing && currentEditIndex === index ? (
// //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Save Profile
// //                                                 </button>
// //                                             ) : (
// //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Edit Profile
// //                                                 </button>
// //                                             )}
// //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                 Delete Profile
// //                                             </button>
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
// // import React, { useState, useEffect } from 'react';
// // import './nav.css';

// // const SearchModal = () => {
// //     const [profileData, setProfileData] = useState([]);
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

// //     // Fetch profile data
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

// //     // Handle editing a profile
// //     const handleEditClick = (index) => {
// //         setIsEditing(true);
// //         setCurrentEditIndex(index);
// //     };

// //     // Handle saving edited profile
// //     const handleSaveClick = async (index) => {
// //         setIsEditing(false);
// //         setCurrentEditIndex(null);

// //         try {
// //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// //                 method: 'PUT',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(profileData[index])
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data updated successfully');
// //             alert('Profile updated successfully');
// //             fetchData(); // Refresh data after update
// //         } catch (error) {
// //             console.error('Error updating data:', error);
// //         }
// //     };

// //     // Handle profile data change
// //     const handleChange = (e, index) => {
// //         const { name, value } = e.target;
// //         const updatedProfileData = [...profileData];
// //         updatedProfileData[index] = {
// //             ...updatedProfileData[index],
// //             [name]: value
// //         };
// //         setProfileData(updatedProfileData);
// //     };

// //     // Toggle block status
// //     const handleBlockToggle = async (index) => {
// //         // Copy the profile data
// //         const updatedProfileData = [...profileData];
// //         // Toggle the blocked status
// //         const blocked = !updatedProfileData[index].blocked;
// //         updatedProfileData[index] = { ...updatedProfileData[index], blocked };
        
// //         // Optimistically update the UI
// //         setProfileData(updatedProfileData);

// //         try {
// //             // Send update request to the backend
// //             const response = await fetch(`http://localhost:1002/User/block/${updatedProfileData[index].userid}`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ blocked })
// //             });

// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('User block status updated successfully');
// //             alert(`User ${blocked ? 'blocked' : 'unblocked'} successfully`);
// //         } catch (error) {
// //             console.error('Error updating block status:', error);
// //             // Revert the change if there was an error
// //             fetchData();
// //         }
// //     };

// //     // Handle profile deletion
// //     const handleDeleteClick = async (index) => {
// //         console.log('Delete button clicked for index:', index); // Debugging log
// //         try {
// //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// //                 method: 'DELETE'
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data deleted successfully');
// //             alert('Profile deleted successfully');
// //             // Remove the deleted profile from the state
// //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// //             setProfileData(updatedProfileData);
// //         } catch (error) {
// //             console.error('Error deleting data:', error);
// //         }
// //         setIsEditing(false);
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
// //                             <div className="col-6" key={profile.userid}>
// //                                 <div className="member-box d-md-flex">
// //                                     <div className="img-box">
// //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// //                                     </div>
// //                                     <div>
// //                                         {isEditing && currentEditIndex === index ? (
// //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// //                                         ) : (
// //                                             <h4 className="name">{profile.firstname}</h4>
// //                                         )}
// //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// //                                         <div className="row g-2 mt-3 member-info">
// //                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
// //                                                 <div className="col-6" key={field}>
// //                                                     {isEditing && currentEditIndex === index ? (
// //                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
// //                                                     ) : (
// //                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
// //                                                     )}
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-6">
// //                                                 <label>
// //                                                     Blocked:
// //                                                     <input
// //                                                         type="checkbox"
// //                                                         checked={profile.blocked || false}
// //                                                         onChange={() => handleBlockToggle(index)}
// //                                                         disabled={isEditing}
// //                                                     />
// //                                                 </label>
// //                                             </div>
// //                                         </div>
// //                                         <div className="button-group">
// //                                             {isEditing && currentEditIndex === index ? (
// //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Save Profile
// //                                                 </button>
// //                                             ) : (
// //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Edit Profile
// //                                                 </button>
// //                                             )}
// //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                 Delete Profile
// //                                             </button>
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
// // import React, { useState, useEffect } from 'react';
// // import './nav.css';

// // const SearchModal = () => {
// //     const [profileData, setProfileData] = useState([]);
// //     const [isEditing, setIsEditing] = useState(false);
// //     const [currentEditIndex, setCurrentEditIndex] = useState(null);

// //     // Fetch profile data
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

// //     // Handle editing a profile
// //     const handleEditClick = (index) => {
// //         setIsEditing(true);
// //         setCurrentEditIndex(index);
// //     };

// //     // Handle saving edited profile
// //     const handleSaveClick = async (index) => {
// //         setIsEditing(false);
// //         setCurrentEditIndex(null);

// //         try {
// //             const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
// //                 method: 'PUT',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(profileData[index])
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data updated successfully');
// //             alert('Profile updated successfully');
// //             fetchData(); // Refresh data after update
// //         } catch (error) {
// //             console.error('Error updating data:', error);
// //         }
// //     };

// //     // Handle profile data change
// //     const handleChange = (e, index) => {
// //         const { name, value } = e.target;
// //         const updatedProfileData = [...profileData];
// //         updatedProfileData[index] = {
// //             ...updatedProfileData[index],
// //             [name]: value
// //         };
// //         setProfileData(updatedProfileData);
// //     };

// //     // Toggle block status
// //     const handleBlockToggle = async (index) => {
// //         const updatedProfileData = [...profileData];
// //         const currentStatus = updatedProfileData[index].blocked;
// //         const newStatus = !currentStatus;
// //         updatedProfileData[index] = { ...updatedProfileData[index], blocked: newStatus };

// //         // Optimistically update the UI
// //         setProfileData(updatedProfileData);

// //         try {
// //             const response = await fetch(`http://localhost:1002/User/block/${updatedProfileData[index].userid}`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ blocked: newStatus })
// //             });

// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('User block status updated successfully');
// //             alert(`User ${newStatus ? 'blocked' : 'unblocked'} successfully`);
// //             fetchData(); // Refresh data after update to reflect changes
// //         } catch (error) {
// //             console.error('Error updating block status:', error);
// //             // Revert the change if there was an error
// //             fetchData();
// //         }
// //     };

// //     // Handle profile deletion
// //     const handleDeleteClick = async (index) => {
// //         console.log('Delete button clicked for index:', index); // Debugging log
// //         try {
// //             const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
// //                 method: 'DELETE'
// //             });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! status: ${response.status}`);
// //             }
// //             console.log('Data deleted successfully');
// //             alert('Profile deleted successfully');
// //             // Remove the deleted profile from the state
// //             const updatedProfileData = profileData.filter((_, i) => i !== index);
// //             setProfileData(updatedProfileData);
// //         } catch (error) {
// //             console.error('Error deleting data:', error);
// //         }
// //         setIsEditing(false);
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
// //                             <div className="col-6" key={profile.userid}>
// //                                 <div className="member-box d-md-flex">
// //                                     <div className="img-box">
// //                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
// //                                     </div>
// //                                     <div>
// //                                         {isEditing && currentEditIndex === index ? (
// //                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
// //                                         ) : (
// //                                             <h4 className="name">{profile.firstname}</h4>
// //                                         )}
// //                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
// //                                         <div className="row g-2 mt-3 member-info">
// //                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
// //                                                 <div className="col-6" key={field}>
// //                                                     {isEditing && currentEditIndex === index ? (
// //                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
// //                                                     ) : (
// //                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
// //                                                     )}
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-6">
// //                                                 <label>
// //                                                     Blocked:
// //                                                     <input
// //                                                         type="checkbox"
// //                                                         checked={profile.blocked || false}
// //                                                         onChange={() => handleBlockToggle(index)}
// //                                                         disabled={isEditing}
// //                                                     />
// //                                                 </label>
// //                                             </div>
// //                                         </div>
// //                                         <div className="button-group">
// //                                             {isEditing && currentEditIndex === index ? (
// //                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Save Profile
// //                                                 </button>
// //                                             ) : (
// //                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                     Edit Profile
// //                                                 </button>
// //                                             )}
// //                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
// //                                                 Delete Profile
// //                                             </button>
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
// import './nav.css';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditIndex, setCurrentEditIndex] = useState(null);

//     // Fetch profile data
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

//     // Handle editing a profile
//     const handleEditClick = (index) => {
//         setIsEditing(true);
//         setCurrentEditIndex(index);
//     };

//     // Handle saving edited profile
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
//             fetchData(); // Refresh data after update
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     // Handle profile data change
//     const handleChange = (e, index) => {
//         const { name, value } = e.target;
//         const updatedProfileData = [...profileData];
//         updatedProfileData[index] = {
//             ...updatedProfileData[index],
//             [name]: value
//         };
//         setProfileData(updatedProfileData);
//     };

//     // Toggle block status
//     const handleBlockToggle = async (index) => {
//         const updatedProfileData = [...profileData];
//         const currentStatus = updatedProfileData[index].blocked;
//         const newStatus = !currentStatus;
//         updatedProfileData[index] = { ...updatedProfileData[index], blocked: newStatus };

//         // Optimistically update the UI
//         setProfileData(updatedProfileData);

//         try {
//             const response = await fetch(`http://localhost:1002/User/block/${updatedProfileData[index].userid}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ blocked: newStatus })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('User block status updated successfully');
//             alert(`User ${newStatus ? 'blocked' : 'unblocked'} successfully`);
//             fetchData(); // Refresh data after update to reflect changes
//         } catch (error) {
//             console.error('Error updating block status:', error);
//             // Revert the change if there was an error
//             fetchData();
//         }
//     };

//     // Handle profile deletion
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
//                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
//                                     </div>
//                                     <div>
//                                         {isEditing && currentEditIndex === index ? (
//                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
//                                         ) : (
//                                             <h4 className="name">{profile.firstname}</h4>
//                                         )}
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
//                                                 <div className="col-6" key={field}>
//                                                     {isEditing && currentEditIndex === index ? (
//                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
//                                                     ) : (
//                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                             <div className="col-6">
//                                                 <label>
//                                                     Blocked:
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={profile.blocked || false}
//                                                         onChange={() => handleBlockToggle(index)}
//                                                         disabled={isEditing}
//                                                     />
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             {isEditing && currentEditIndex === index ? (
//                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Save Profile
//                                                 </button>
//                                             ) : (
//                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Edit Profile
//                                                 </button>
//                                             )}
//                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                 Delete Profile
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
// import './nav.css';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditIndex, setCurrentEditIndex] = useState(null);

//     // Fetch profile data
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

//     // Handle editing a profile
//     const handleEditClick = (index) => {
//         setIsEditing(true);
//         setCurrentEditIndex(index);
//     };

//     // Handle saving edited profile
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
//             fetchData(); // Refresh data after update
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     // Handle profile data change
//     const handleChange = (e, index) => {
//         const { name, value } = e.target;
//         const updatedProfileData = [...profileData];
//         updatedProfileData[index] = {
//             ...updatedProfileData[index],
//             [name]: value
//         };
//         setProfileData(updatedProfileData);
//     };

//     // Toggle block status
//     const handleBlockToggle = async (index) => {
//         const updatedProfileData = [...profileData];
//         const currentStatus = updatedProfileData[index].blocked;
//         const newStatus = !currentStatus;
//         updatedProfileData[index] = { ...updatedProfileData[index], blocked: newStatus };

//         // Optimistically update the UI
//         setProfileData(updatedProfileData);

//         try {
//             const response = await fetch(`http://localhost:1002/User/${newStatus ? 'block' : 'unblock'}/${updatedProfileData[index].userid}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('User block status updated successfully');
//             alert(`User ${newStatus ? 'blocked' : 'unblocked'} successfully`);
//             fetchData(); // Refresh data after update to reflect changes
//         } catch (error) {
//             console.error('Error updating block status:', error);
//             // Revert the change if there was an error
//             fetchData();
//         }
//     };

//     // Handle profile deletion
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
//                                         <img src="https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg" className="img-fluid" alt="member's image" />
//                                     </div>
//                                     <div>
//                                         {isEditing && currentEditIndex === index ? (
//                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
//                                         ) : (
//                                             <h4 className="name">{profile.firstname}</h4>
//                                         )}
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
//                                                 <div className="col-6" key={field}>
//                                                     {isEditing && currentEditIndex === index ? (
//                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
//                                                     ) : (
//                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                             <div className="col-6">
//                                                 <label>
//                                                     Blocked:
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={profile.blocked || false}
//                                                         onChange={() => handleBlockToggle(index)}
//                                                         disabled={isEditing}
//                                                     />
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             {isEditing && currentEditIndex === index ? (
//                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Save Profile
//                                                 </button>
//                                             ) : (
//                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Edit Profile
//                                                 </button>
//                                             )}
//                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                 Delete Profile
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
// import './nav.css';

// const SearchModal = () => {
//     const [profileData, setProfileData] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentEditIndex, setCurrentEditIndex] = useState(null);

//     // Fetch profile data and images
//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:1002/User/all');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
            
//             // Fetch images for each profile
//             const profilesWithImages = await Promise.all(data.map(async (profile) => {
//                 const imageResponse = await fetch(`http://localhost:1002/User/${profile.userid}`);
//                 const imageBlob = await imageResponse.blob();
//                 const imageUrl = URL.createObjectURL(imageBlob);
//                 return { ...profile, imageUrl };
//             }));
            
//             setProfileData(profilesWithImages);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // Handle editing a profile
//     const handleEditClick = (index) => {
//         setIsEditing(true);
//         setCurrentEditIndex(index);
//     };

//     // Handle saving edited profile
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
//             fetchData(); // Refresh data after update
//         } catch (error) {
//             console.error('Error updating data:', error);
//         }
//     };

//     // Handle profile data change
//     const handleChange = (e, index) => {
//         const { name, value } = e.target;
//         const updatedProfileData = [...profileData];
//         updatedProfileData[index] = {
//             ...updatedProfileData[index],
//             [name]: value
//         };
//         setProfileData(updatedProfileData);
//     };

//     // Toggle block status
//     const handleBlockToggle = async (index) => {
//         const updatedProfileData = [...profileData];
//         const currentStatus = updatedProfileData[index].blocked;
//         const newStatus = !currentStatus;
//         updatedProfileData[index] = { ...updatedProfileData[index], blocked: newStatus };

//         // Optimistically update the UI
//         setProfileData(updatedProfileData);

//         try {
//             const response = await fetch(`http://localhost:1002/User/${newStatus ? 'block' : 'unblock'}/${updatedProfileData[index].userid}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             console.log('User block status updated successfully');
//             alert(`User ${newStatus ? 'blocked' : 'unblocked'} successfully`);
//             fetchData(); // Refresh data after update to reflect changes
//         } catch (error) {
//             console.error('Error updating block status:', error);
//             // Revert the change if there was an error
//             fetchData();
//         }
//     };

//     // Handle profile deletion
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

//     // Cleanup object URLs when component unmounts
//     useEffect(() => {
//         return () => {
//             profileData.forEach(profile => {
//                 if (profile.imageUrl) {
//                     URL.revokeObjectURL(profile.imageUrl);
//                 }
//             });
//         };
//     }, [profileData]);

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
//                                         <img
//                                             src={profile.photourl || 'https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg'}
//                                             className="img-fluid"
//                                             alt="member's image"
//                                         />
//                                     </div>
//                                     <div>
//                                         {isEditing && currentEditIndex === index ? (
//                                             <input type="text" name="firstname" value={profile.firstname} onChange={(e) => handleChange(e, index)} />
//                                         ) : (
//                                             <h4 className="name">{profile.firstname}</h4>
//                                         )}
//                                         <span className="member-id">Member ID: <span>{profile.userid}</span></span>
//                                         <div className="row g-2 mt-3 member-info">
//                                             {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
//                                                 <div className="col-6" key={field}>
//                                                     {isEditing && currentEditIndex === index ? (
//                                                         <input type="text" name={field} value={profile[field]} onChange={(e) => handleChange(e, index)} />
//                                                     ) : (
//                                                         <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field]}`}</span>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                             <div className="col-6">
//                                                 <label>
//                                                     Blocked:
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={profile.blocked || false}
//                                                         onChange={() => handleBlockToggle(index)}
//                                                         disabled={isEditing}
//                                                     />
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="button-group">
//                                             {isEditing && currentEditIndex === index ? (
//                                                 <button type="button" onClick={() => handleSaveClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Save Profile
//                                                 </button>
//                                             ) : (
//                                                 <button type="button" onClick={() => handleEditClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                     Edit Profile
//                                                 </button>
//                                             )}
//                                             <button type="button" onClick={() => handleDeleteClick(index)} style={{ backgroundColor: 'pink', color: 'white' }}>
//                                                 Delete Profile
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
import React, { useState, useEffect } from 'react';
import './nav.css';

const SearchModal = () => {
    const [profileData, setProfileData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    // Fetch profile data and images
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:1002/User/all');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            // Fetch images for each profile
            const profilesWithImages = await Promise.all(data.map(async (profile) => {
                try {
                    const imageResponse = await fetch(`http://localhost:1002/User/image/${profile.userid}`);
                    if (!imageResponse.ok) {
                        throw new Error(`Image fetch failed for user ${profile.userid}: ${imageResponse.status}`);
                    }
                    const imageBlob = await imageResponse.blob();
                    const imageUrl = URL.createObjectURL(imageBlob);
                    return { ...profile, imageUrl };
                } catch (imageError) {
                    console.error(imageError);
                    return { ...profile, imageUrl: 'https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg' }; // Fallback image
                }
            }));
            
            setProfileData(profilesWithImages);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handle editing a profile
    const handleEditClick = (index) => {
        setIsEditing(true);
        setCurrentEditIndex(index);
    };

    // Handle saving edited profile
    const handleSaveClick = async (index) => {
        setIsEditing(false);
        setCurrentEditIndex(null);

        try {
            const response = await fetch(`http://localhost:1002/User/update/${profileData[index].userid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData[index])
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Data updated successfully');
            alert('Profile updated successfully');
            fetchData(); // Refresh data after update
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // Handle profile data change
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setProfileData(prevData => {
            const updatedProfileData = [...prevData];
            updatedProfileData[index] = {
                ...updatedProfileData[index],
                [name]: value
            };
            return updatedProfileData;
        });
    };

    // Toggle block status
    const handleBlockToggle = async (index) => {
        const updatedProfileData = [...profileData];
        const currentStatus = updatedProfileData[index].blocked;
        const newStatus = !currentStatus;
        updatedProfileData[index] = { ...updatedProfileData[index], blocked: newStatus };

        // Optimistically update the UI
        setProfileData(updatedProfileData);

        try {
            const response = await fetch(`http://localhost:1002/User/${newStatus ? 'block' : 'unblock'}/${updatedProfileData[index].userid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('User block status updated successfully');
            alert(`User ${newStatus ? 'blocked' : 'unblocked'} successfully`);
            fetchData(); // Refresh data after update to reflect changes
        } catch (error) {
            console.error('Error updating block status:', error);
            // Revert the change if there was an error
            fetchData();
        }
    };

    // Handle profile deletion
    const handleDeleteClick = async (index) => {
        try {
            const response = await fetch(`http://localhost:1002/User/delete/${profileData[index].userid}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log('Data deleted successfully');
            alert('Profile deleted successfully');
            // Remove the deleted profile from the state
            setProfileData(prevData => prevData.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
        setIsEditing(false);
    };

    // Cleanup object URLs when component unmounts
    useEffect(() => {
        return () => {
            profileData.forEach(profile => {
                if (profile.imageUrl) {
                    URL.revokeObjectURL(profile.imageUrl);
                }
            });
        };
    }, [profileData]);

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
                        {profileData.map((profile, index) => (
                            <div className="col-6" key={profile.userid}>
                                <div className="member-box d-md-flex">
                                    <div className="img-box">
                                        <img
                                            src={profile.imageUrl || 'https://i.pinimg.com/736x/07/8e/cf/078ecf5ae786bb811b6412167ce82b14.jpg'}
                                            className="img-fluid"
                                            alt={`${profile.firstname}'s profile`}
                                        />
                                    </div>
                                    <div>
                                        {isEditing && currentEditIndex === index ? (
                                            <input
                                                type="text"
                                                name="firstname"
                                                value={profile.firstname}
                                                onChange={(e) => handleChange(e, index)}
                                            />
                                        ) : (
                                            <h4 className="name">{profile.firstname}</h4>
                                        )}
                                        <span className="member-id">Member ID: <span>{profile.userid}</span></span>
                                        <div className="row g-2 mt-3 member-info">
                                            {['age', 'height', 'religion', 'caste', 'gender', 'occupation', 'currentsalary', 'dob', 'mobilenumber', 'maritalstatus'].map(field => (
                                                <div className="col-6" key={field}>
                                                    {isEditing && currentEditIndex === index ? (
                                                        <input
                                                            type="text"
                                                            name={field}
                                                            value={profile[field] || ''}
                                                            onChange={(e) => handleChange(e, index)}
                                                        />
                                                    ) : (
                                                        <span>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${profile[field] || 'N/A'}`}</span>
                                                    )}
                                                </div>
                                            ))}
                                            <div className="col-6">
                                                <label>
                                                    Blocked:
                                                    <input
                                                        type="checkbox"
                                                        checked={profile.blocked || false}
                                                        onChange={() => handleBlockToggle(index)}
                                                        disabled={isEditing}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            {isEditing && currentEditIndex === index ? (
                                                <button
                                                    type="button"
                                                    onClick={() => handleSaveClick(index)}
                                                    style={{ backgroundColor: 'pink', color: 'white' }}
                                                >
                                                    Save Profile
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => handleEditClick(index)}
                                                    style={{ backgroundColor: 'pink', color: 'white' }}
                                                >
                                                    Edit Profile
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteClick(index)}
                                                style={{ backgroundColor: 'pink', color: 'white' }}
                                            >
                                                Delete Profile
                                            </button>
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
