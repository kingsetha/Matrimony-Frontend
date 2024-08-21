import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const SearchModal = () => {
    const [profileData, setProfileData] = useState([]);
    const [searchParams, setSearchParams] = useState({
        firstname: '',
        age: '',
        gender: '',
        religion: '',
        maritalstatus: '',
        occupation: ''
    });
    // const [profileData, setProfileData] = useState([]);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    const handleSearch = async () => {
        try {
            // Construct query string from searchParams
            const query = new URLSearchParams(searchParams).toString();
            const response = await fetch(`http://localhost:1002/User?${query}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data);

            // Filter out the logged-in user's profile
            const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
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


            <div className='container'>
            <section className="search-section" style={{ padding: '2rem 0' }}>
    <div className="member-box d-md-flex">
        <div className="row">
            <div className="col-12 mb-3">
                <div className="search-area">
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="firstname"
                                value={searchParams.firstname}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Member's Name"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="age"
                                value={searchParams.age}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Age"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <select
                                name="gender"
                                value={searchParams.gender}
                                onChange={handleInputChange}
                                className="form-select"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            >
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <select
                                name="maritalstatus"
                                value={searchParams.maritalstatus}
                                onChange={handleInputChange}
                                className="form-select"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            >
                                <option value="">Marital Status</option>
                                <option value="Never married">Never married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <select
                                name="religion"
                                value={searchParams.religion}
                                onChange={handleInputChange}
                                className="form-select"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            >
                                <option value="">Religion</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Christian">Christian</option>
                            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="occupation"
                                value={searchParams.occupation}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Occupation"
                                style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
                            />
                        </div>
                        <center>
                        <div className="col-lg-2 col-md-6 form-group">
                                        <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
                                    </div> </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
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
//     const [searchParams, setSearchParams] = useState({
//         firstname: '',
//         minAge: '',
//         maxAge: '',
//         gender: '',
//         religion: '',
//         maritalstatus: '',
//         occupation: ''
//     });
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const navigate = useNavigate(); // Use useNavigate hook to get navigate function

//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId); // Debugging log
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams({
//             ...searchParams,
//             [name]: value
//         });
//     };

//     const handleSearch = async () => {
//         try {
//             // Construct query string from searchParams
//             const { firstname, minAge, maxAge, gender, religion, maritalstatus, occupation } = searchParams;
//             const query = new URLSearchParams({
//                 firstname,
//                 minAge,
//                 maxAge,
//                 gender,
//                 religion,
//                 maritalstatus,
//                 occupation
//             }).toString();
//             const response = await fetch(`http://localhost:1002/User?${query}`);
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

//             <div className='container'>
//                 <section className="search-section" style={{ padding: '2rem 0' }}>
//                     <div className="member-box d-md-flex">
//                         <div className="row">
//                             <div className="col-12 mb-3">
//                                 <div className="search-area">
//                                     <div className="row g-3">
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="text"
//                                                 name="firstname"
//                                                 value={searchParams.firstname}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Member's Name"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="minAge"
//                                                 value={searchParams.minAge}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Min Age"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="maxAge"
//                                                 value={searchParams.maxAge}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Max Age"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="gender"
//                                                 value={searchParams.gender}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Gender</option>
//                                                 <option value="Male">Male</option>
//                                                 <option value="Female">Female</option>
//                                                 <option value="Transgender">Transgender</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="maritalstatus"
//                                                 value={searchParams.maritalstatus}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Marital Status</option>
//                                                 <option value="Never married">Never married</option>
//                                                 <option value="Divorced">Divorced</option>
//                                                 <option value="Widowed">Widowed</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="religion"
//                                                 value={searchParams.religion}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Religion</option>
//                                                 <option value="Muslim">Muslim</option>
//                                                 <option value="Hindu">Hindu</option>
//                                                 <option value="Christian">Christian</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="text"
//                                                 name="occupation"
//                                                 value={searchParams.occupation}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Occupation"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <center>
//                                             <div className="col-lg-2 col-md-6 form-group">
//                                                 <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
//                                             </div>
//                                         </center>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
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
//     const [searchParams, setSearchParams] = useState({
//         firstname: '',
//         minAge: '',
//         maxAge: '',
//         gender: '',
//         religion: '',
//         maritalstatus: '',
//         occupation: '',
//         minSalary: '',
//         maxSalary: ''
//     });
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const navigate = useNavigate(); // Use useNavigate hook to get navigate function

//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId); // Debugging log
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams({
//             ...searchParams,
//             [name]: value
//         });
//     };

//     const handleSearch = async () => {
//         try {
//             // Construct query string from searchParams
//             const { firstname, minAge, maxAge, gender, religion, maritalstatus, occupation, minSalary, maxSalary } = searchParams;
//             const query = new URLSearchParams({
//                 firstname,
//                 minAge,
//                 maxAge,
//                 gender,
//                 religion,
//                 maritalstatus,
//                 occupation,
//                 minSalary,
//                 maxSalary
//             }).toString();
//             const response = await fetch(`http://localhost:1002/User?${query}`);
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

//             <div className='container'>
//                 <section className="search-section" style={{ padding: '2rem 0' }}>
//                     <div className="member-box d-md-flex">
//                         <div className="row">
//                             <div className="col-12 mb-3">
//                                 <div className="search-area">
//                                     <div className="row g-3">
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="text"
//                                                 name="firstname"
//                                                 value={searchParams.firstname}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Member's Name"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="minAge"
//                                                 value={searchParams.minAge}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Min Age"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="maxAge"
//                                                 value={searchParams.maxAge}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Max Age"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="gender"
//                                                 value={searchParams.gender}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Gender</option>
//                                                 <option value="Male">Male</option>
//                                                 <option value="Female">Female</option>
//                                                 <option value="Transgender">Transgender</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="maritalstatus"
//                                                 value={searchParams.maritalstatus}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Marital Status</option>
//                                                 <option value="Never married">Never married</option>
//                                                 <option value="Divorced">Divorced</option>
//                                                 <option value="Widowed">Widowed</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <select
//                                                 name="religion"
//                                                 value={searchParams.religion}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             >
//                                                 <option value="">Religion</option>
//                                                 <option value="Muslim">Muslim</option>
//                                                 <option value="Hindu">Hindu</option>
//                                                 <option value="Christian">Christian</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="text"
//                                                 name="occupation"
//                                                 value={searchParams.occupation}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Occupation"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="minSalary"
//                                                 value={searchParams.minSalary}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Min Salary"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <div className="col-lg-4 col-md-6 form-group">
//                                             <input
//                                                 type="number"
//                                                 name="maxSalary"
//                                                 value={searchParams.maxSalary}
//                                                 onChange={handleInputChange}
//                                                 className="form-control"
//                                                 placeholder="Max Salary"
//                                                 style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                             />
//                                         </div>
//                                         <center>
//                                             <div className="col-lg-2 col-md-6 form-group">
//                                                 <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
//                                             </div>
//                                         </center>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
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
//     const [searchParams, setSearchParams] = useState({
//         firstname: '',
//         minAge: '',
//         maxAge: '',
//         gender: '',
//         religion: '',
//         maritalstatus: '',
//         occupation: '',
//         minSalary: '',
//         maxSalary: ''
//     });
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const navigate = useNavigate(); // Use useNavigate hook to get navigate function

//     useEffect(() => {
//         // Retrieve logged-in user ID from sessionStorage
//         const userId = sessionStorage.getItem('UserId');
//         console.log('Retrieved UserId from sessionStorage:', userId); // Debugging log
//         if (userId) {
//             setLoggedInUserId(Number(userId)); // Convert to integer
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams({
//             ...searchParams,
//             [name]: value
//         });
//     };

//     const handleSearch = async () => {
//         try {
//             // Construct query string from searchParams
//             const query = new URLSearchParams(searchParams).toString();
//             const url = `http://localhost:1002/User?${query}`;
//             console.log('Query URL:', url); // Debugging log

//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log('Fetched data:', data); // Debugging log

//             // Filter out the logged-in user's profile
//             const filteredData = data.filter(profile => profile.userid !== loggedInUserId);
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

//             <div className='container'>
//                 <section className="search-section" style={{ padding: '2rem 0' }}>
//                     <div className="member-box d-md-flex">
//                         <div className="row">
//                             <div className="col-12 mb-3">
//                                 <div className="search-area">
//                                     <div className="row g-3">
//                                         {[
//                                             { name: 'firstname', type: 'text', placeholder: "Member's Name" },
//                                             { name: 'minAge', type: 'number', placeholder: 'Min Age' },
//                                             { name: 'maxAge', type: 'number', placeholder: 'Max Age' },
//                                             { name: 'minSalary', type: 'number', placeholder: 'Min Salary' },
//                                             { name: 'maxSalary', type: 'number', placeholder: 'Max Salary' }
//                                         ].map(({ name, type, placeholder }) => (
//                                             <div className="col-lg-4 col-md-6 form-group" key={name}>
//                                                 <input
//                                                     type={type}
//                                                     name={name}
//                                                     value={searchParams[name]}
//                                                     onChange={handleInputChange}
//                                                     className="form-control"
//                                                     placeholder={placeholder}
//                                                     style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                                 />
//                                             </div>
//                                         ))}

//                                         {[
//                                             { name: 'gender', options: ['Male', 'Female', 'Transgender'] },
//                                             { name: 'maritalstatus', options: ['Never married', 'Divorced', 'Widowed'] },
//                                             { name: 'religion', options: ['Muslim', 'Hindu', 'Christian'] }
//                                         ].map(({ name, options }) => (
//                                             <div className="col-lg-4 col-md-6 form-group" key={name}>
//                                                 <select
//                                                     name={name}
//                                                     value={searchParams[name]}
//                                                     onChange={handleInputChange}
//                                                     className="form-select"
//                                                     style={{ borderRadius: '0.25rem', padding: '0.5rem 1rem' }}
//                                                 >
//                                                     <option value="">{name.charAt(0).toUpperCase() + name.slice(1)}</option>
//                                                     {options.map(option => (
//                                                         <option key={option} value={option}>{option}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         ))}

//                                         <center>
//                                             <div className="col-lg-2 col-md-6 form-group">
//                                                 <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
//                                             </div>
//                                         </center>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
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
