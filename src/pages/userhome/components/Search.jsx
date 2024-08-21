
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link ,useNavigate } from 'react-router-dom';

// // const InterestList = () => {
// //     const [members, setMembers] = useState([]);
// //     const [searchParams, setSearchParams] = useState({
// //         firstname: '',
// //         age: '',
// //         gender: ''
// //     });

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setSearchParams({
// //             ...searchParams,
// //             [name]: value
// //         });
// //     };

// //     const handleSearch = async () => {
// //         try {
// //             console.log('Search parameters:', searchParams); // Log search parameters
// //             const response = await axios.get('http://localhost:1002/User', {
// //                 params: searchParams
// //             });
// //             console.log('Response data:', response.data); // Log response data
// //             setMembers(response.data);
// //         } catch (error) {
// //             console.error('Error fetching data:', error);
// //         }
// //     };

// //     const handleDelete = async (id) => {
// //         try {
// //             await axios.delete(`http://localhost:1002/User/delete/${id}`);
// //             setMembers(members.filter(member => member.id !== id));
// //         } catch (error) {
// //             console.error('Error deleting data:', error);
// //         }
// //     };
// // import React, { useState } from 'react';
// // import axios from 'axios';


// const InterestList = () => {
//     const [members, setMembers] = useState([]);
//     const [searchParams, setSearchParams] = useState({
//         firstname: '',
//         age: '',
//         gender: ''
//     });
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams({
//             ...searchParams,
//             [name]: value
//         });
//     };

//     const handleSearch = async () => {
//         try {
//             console.log('Search parameters:', searchParams); // Log search parameters
//             const response = await axios.get('http://localhost:1002/User', {
//                 params: searchParams
//             });
//             console.log('Response data:', response.data); // Log response data
//             setMembers(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:1002/User/delete/${id}`);
//             setMembers(members.filter(member => member.id !== id));
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//     };
//     return (
//         <section className="dashboard-section">
//             <div className="container">
//             <h2>Search and find your pair</h2>
//                 <div className="col-lg-12">
//                     <div className="dashboard-content">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="dashboard-title">
                                    
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-12 mb-3">
//                                         <div className="search-area table-search">
//                                             <div className="row g-3">
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         name="firstname"
//                                                         value={searchParams.firstname}
//                                                         onChange={handleInputChange}
//                                                         className="form-control"
//                                                         placeholder="Search Member's Name"
//                                                     />
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         name="age"
//                                                         value={searchParams.age}
//                                                         onChange={handleInputChange}
//                                                         className="form-control"
//                                                         placeholder="Search By Age"
//                                                     />
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <select
//                                                         name="gender"
//                                                         value={searchParams.gender}
//                                                         onChange={handleInputChange}
//                                                         className="form-select"
//                                                     >
//                                                         <option value="">Gender</option>
//                                                         <option value="Male">Male</option>
//                                                         <option value="Female">Female</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className="table-wrapper table-responsive">
//                                         <table className="table table-striped">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">SL.</th>
//                                                     <th scope="col">Member's Name</th>
//                                                     <th scope="col">Age</th>
//                                                     <th scope="col">Religion</th>
//                                                     <th scope="col">Gender</th>
//                                                     {/* <th scope="col">Action</th> */}
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {members.map((member, index) => (
//                                                     <tr key={index}>
//                                                         <td>{index + 1}</td>
//                                                         <td>
//                                                             <Link to={`/User/${member.userid}`}>
//                                                                 <div className="d-flex no-block align-items-center">
//                                                                     <div className="me-2">
//                                                                         <img src={member.image} alt="interestList user img" className="rounded-circle" width="45" height="45" />
//                                                                     </div>
//                                                                     <div className="">
//                                                                         <h5 className="text-dark mb-0 font-16 font-weight-medium">{member.firstname}</h5>
//                                                                         <span className="text-muted font-14"><span>@</span>{member.lastname}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </Link>
//                                                         </td>
//                                                         <td>{member.age}</td>
//                                                         <td>{member.religion}</td>
//                                                         <td>{member.gender}</td>
//                                                         <td>
//                                                             {/* <Link
//                                                                 to={`/updateuser/${member.id}`}
//                                                                 className="btn btn-sm btn-success"
//                                                             >
//                                                                 Update
//                                                             </Link>
//                                                             <button
//                                                                 role="deletebutton"
//                                                                 onClick={() => handleDelete(member.id)}
//                                                                 className="btn btn-sm ms-1 btn-danger"
//                                                             >
//                                                                 Delete
//                                                             </button> */}
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default InterestList;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const InterestList = () => {
//     const [members, setMembers] = useState([]);
//     const [searchParams, setSearchParams] = useState({
//         firstname: '',
//         age: '',
//         gender: ''
//     });
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams({
//             ...searchParams,
//             [name]: value
//         });
//     };

//     const handleSearch = async () => {
//         try {
//             console.log('Search parameters:', searchParams); // Log search parameters
//             const response = await axios.get('http://localhost:1002/User', {
//                 params: searchParams
//             });
//             console.log('Response data:', response.data); // Log response data
//             setMembers(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:1002/User/delete/${id}`);
//             setMembers(members.filter(member => member.id !== id));
//         } catch (error) {
//             console.error('Error deleting data:', error);
//         }
//     };

//     return (
//         <section className="dashboard-section">
//             <div className="container">
//                 <h2>Search and find your pair</h2>
//                 <div className="col-lg-12">
//                     <div className="dashboard-content">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="dashboard-title"></div>
//                                 <div className="row">
//                                     <div className="col-12 mb-3">
//                                         <div className="search-area table-search">
//                                             <div className="row g-3">
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         name="firstname"
//                                                         value={searchParams.firstname}
//                                                         onChange={handleInputChange}
//                                                         className="form-control"
//                                                         placeholder="Search Member's Name"
//                                                     />
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         name="age"
//                                                         value={searchParams.age}
//                                                         onChange={handleInputChange}
//                                                         className="form-control"
//                                                         placeholder="Search By Age"
//                                                     />
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <select
//                                                         name="gender"
//                                                         value={searchParams.gender}
//                                                         onChange={handleInputChange}
//                                                         className="form-select"
//                                                     >
//                                                         <option value="">Gender</option>
//                                                         <option value="Male">Male</option>
//                                                         <option value="Female">Female</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="col-lg-3 col-md-6 form-group">
//                                                     <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className="table-wrapper table-responsive">
//                                         <table className="table table-striped">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">SL.</th>
//                                                     <th scope="col">Member's Name</th>
//                                                     <th scope="col">Age</th>
//                                                     <th scope="col">Religion</th>
//                                                     <th scope="col">Gender</th>
//                                                     <th scope="col">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {members.map((member, index) => (
//                                                     <tr key={index}>
//                                                         <td>{index + 1}</td>
//                                                         <td>
//                                                             <Link to={`/User/${member.userid}`}>
//                                                                 <div className="d-flex no-block align-items-center">
//                                                                     <div className="me-2">
//                                                                         <img src={member.image} alt="interestList user img" className="rounded-circle" width="45" height="45" />
//                                                                     </div>
//                                                                     <div className="">
//                                                                         <h5 className="text-dark mb-0 font-16 font-weight-medium">{member.firstname}</h5>
//                                                                         <span className="text-muted font-14"><span>@</span>{member.lastname}</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </Link>
//                                                         </td>
//                                                         <td>{member.age}</td>
//                                                         <td>{member.religion}</td>
//                                                         <td>{member.gender}</td>
//                                                         <td>
//                                                             <button className="btn btn-danger" onClick={() => handleDelete(member.id)}>Delete</button>
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default InterestList;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const InterestList = () => {
    const [members, setMembers] = useState([]);
    const [searchParams, setSearchParams] = useState({
        firstname: '',
        age: '',
        gender: '',
        religion: '',
        maritalstatus: '',
        occupation: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    const handleSearch = async () => {
        try {
            console.log('Search parameters:', searchParams); // Log search parameters
            const response = await axios.get('http://localhost:1002/User', {
                params: searchParams
            });
            console.log('Response data:', response.data); // Log response data
            setMembers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:1002/User/delete/${id}`);
            setMembers(members.filter(member => member.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <section className="dashboard-section">
            <div className="container">
                <h2>Search and find your pair</h2>
                <div className="col-lg-12">
                    <div className="dashboard-content">
                        <div className="row">
                            <div className="col-12">
                                <div className="dashboard-title"></div>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="search-area table-search">
                                            <div className="row g-3">
                                                <div className="col-lg-2 col-md-4 form-group">
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        value={searchParams.firstname}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder="Member's Name"
                                                    />
                                                </div>
                                                <div className="col-lg-2 col-md-4 form-group">
                                                    <input
                                                        type="text"
                                                        name="age"
                                                        value={searchParams.age}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder="Age"
                                                    />
                                                </div>
                                                <div className="col-lg-2 col-md-4 form-group">
                                                    <select
                                                        name="gender"
                                                        value={searchParams.gender}
                                                        onChange={handleInputChange}
                                                        className="form-select"
                                                    >
                                                        <option value="">Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Transgender">Transgender</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-4 form-group">
                                                <select
                                                        name="maritalstatus"
                                                        value={searchParams.maritalstatus}
                                                        onChange={handleInputChange}
                                                        className="form-select"
                                                    >
                                                         <option value="">Marital status</option>
                                                        <option value="Never married">Never married</option>
                                                        <option value="Divorced">Divorced</option>
                                                        <option value="Widowed">Widowed</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-4 form-group">
                                                <select
                                                        name="religion"
                                                        value={searchParams.religion}
                                                        onChange={handleInputChange}
                                                        className="form-select"
                                                    >
                                                        <option value="">Religion</option>
                                                        <option value="Muslim">Muslim</option>
                                                        <option value="Hindu">Hindu</option>
                                                        <option value="Christian">Christian</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2 col-md-4 form-group">
                                                    <input
                                                        type="text"
                                                        name="occupation"
                                                        value={searchParams.occupation}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        placeholder="Occupation"
                                                    />
                                                </div>
                                                <center>
                                                <div className="col-lg-3 col-md-6 form-group">
                                                    <button className="btn-flower2 w-100" onClick={handleSearch}>Search</button>
                                                </div></center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="table-wrapper table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">SL.</th>
                                                    <th scope="col">Member's Name</th>
                                                    <th scope="col">Age</th>
                                                    <th scope="col">Religion</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Marital Status</th>
                                                    <th scope="col">Occupation</th>
                                                    {/* <th scope="col">Action</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {members.map((member, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <Link to={`/User/${member.userid}`}>
                                                                <div className="d-flex no-block align-items-center">
                                                                    <div className="me-2">
                                                                        <img src={member.pho} alt="interestList user img" className="rounded-circle" width="45" height="45" />
                                                                    </div>
                                                                    <div className="">
                                                                        <h5 className="text-dark mb-0 font-16 font-weight-medium">{member.firstname}</h5>
                                                                        <span className="text-muted font-14"><span>@</span>{member.lastname}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                        <td>{member.age}</td>
                                                        <td>{member.religion}</td>
                                                        <td>{member.gender}</td>
                                                        <td>{member.maritalstatus}</td>
                                                        <td>{member.occupation}</td>
                                                        {/* <td>
                                                            <button className="btn btn-danger" onClick={() => handleDelete(member.id)}>Delete</button>
                                                        </td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterestList;
