// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Preloader = () => (
// //   <div id="preloader">
// //     <img src="https://media.tenor.com/1huXpX94SDkAAAAM/love-you-love.gif" alt="loader" className="loader" />
// //   </div>
// // );

// // window.addEventListener('load', () => {
// //   const preloader = document.getElementById('preloader');
// //   if (preloader) {
// //     preloader.style.display = 'none';
// //   }
// // });

// // const ScrollUp = () => (
// //   <a href="#" className="scroll-up" aria-label="Scroll up">
// //     <i className="fal fa-chevron-double-up"></i>
// //   </a>
// // );

// // const Signup = () => {
// //   const [inputData, setInputData] = useState({
// //     firstname: "", lastname: "", nationality: "", email: "", gender: "", mobilenumber: "", password: "", confirmpassword: "", age: "", religion: "", caste: "", maritalstatus: "", currentsalary: "", occupation: "", height: "", weight: "", dob: "", photourl: "", role: "user",
// //   });

// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const formData = new FormData();
// //       formData.append('file', file);

// //       try {
// //         const response = await fetch('http://localhost:1002/upload', {
// //           method: 'POST',
// //           body: formData,
// //         });
// //         const data = await response.json();
// //         setInputData({ ...inputData, photourl: data.url });
// //       } catch (error) {
// //         console.error('Error uploading file:', error);
// //       }
// //     }
// //   };

// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateValues(inputData)) {
// //         console.log("Payload being sent:", inputData); // Debugging payload
// //         axios.post("http://localhost:1002/User/register", inputData)
// //             .then((res) => {
// //                 console.log("Response:", res);
// //                 Swal.fire({
// //                     icon: 'success',
// //                     title: 'Success',
// //                     text: 'User added successfully!',
// //                 });
// //                 navigate("/login");
// //             })
// //             .catch((err) => {
// //                 console.error("Error response:", err.response);
// //                 console.error("Error message:", err.message);
// //                 Swal.fire({
// //                     icon: 'error',
// //                     title: 'Error',
// //                     text: `Error adding user: ${err.message}`,
// //                 });
// //             });
// //     }
// //   };

// //   // const validateValues = (inputData) => {
// //   //   if (inputData.password !== inputData.confirmpassword) {
// //   //     Swal.fire({
// //   //       icon: 'error',
// //   //       title: 'Error',
// //   //       text: 'Passwords do not match',
// //   //     });
// //   //     return false;
// //   //   }
// //   //   return true;
// //   // };
// //   const validateValues = (inputData) => {
// //     const errors = {};

// //     // Password Validation
// //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //     if (!passwordRegex.test(inputData.password)) {
// //       errors.password = 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.';
// //     }
// //     if (inputData.password !== inputData.confirmpassword) {
// //       errors.confirmpassword = 'Passwords do not match';
// //     }

// //     // Email Validation
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(inputData.email)) {
// //       errors.email = 'Invalid email address';
// //     }

// //     // Phone Number Validation
// //     const phoneRegex = /^[0-9]{10}$/;
// //     if (!phoneRegex.test(inputData.mobilenumber)) {
// //       errors.mobilenumber = 'Phone number must be 10 digits long';
// //     }

// //     // Age Validation
// //     if (isNaN(inputData.age) || inputData.age < 18 || inputData.age > 100) {
// //       errors.age = 'Age must be a number between 18 and 100';
// //     }

// //     // Date of Birth Validation
// //     if (isNaN(new Date(inputData.dob).getTime())) {
// //       errors.dob = 'Invalid date of birth';
// //     }

// //     // Other Fields Validation
// //     if (!inputData.firstname) errors.firstname = 'First name is required';
// //     if (!inputData.lastname) errors.lastname = 'Last name is required';
// //     if (!inputData.gender) errors.gender = 'Gender is required';
// //     if (!inputData.nationality) errors.nationality = 'Nationality is required';
// //     if (!inputData.religion) errors.religion = 'Religion is required';
// //     if (!inputData.caste) errors.caste = 'Caste is required';
// //     if (!inputData.maritalstatus) errors.maritalstatus = 'Marital status is required';
// //     if (!inputData.currentsalary) errors.currentsalary = 'Current salary is required';
// //     if (!inputData.occupation) errors.occupation = 'Occupation is required';
// //     if (!inputData.height) errors.height = 'Height is required';
// //     if (!inputData.weight) errors.weight = 'Weight is required';
// //     // if (!inputData.photourl) errors.photourl = 'Profile photo is required';

// //     return errors;
// //   };

// //   return (
// //     <section className='login-section'>
// //       <div className="container">
// //         <div className="row">
// //           <div className="col">
// //             <h2>Register</h2>
// //             <form onSubmit={handleSubmit}>
// //               <div className="row g-3 g-md-4">
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="firstname" placeholder="First Name" aria-label="First Name" required onChange={(e) => setInputData({ ...inputData, firstname: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="lastname" placeholder="Last Name" aria-label="Last Name" required onChange={(e) => setInputData({ ...inputData, lastname: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="nationality" placeholder="Nationality" aria-label="Nationality" required onChange={(e) => setInputData({ ...inputData, nationality: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="email" name="email" placeholder="Email Address" aria-label="Email Address" required onChange={(e) => setInputData({ ...inputData, email: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <select name="gender" className="form-control" aria-label="Gender" required onChange={(e) => setInputData({ ...inputData, gender: e.target.value })}>
// //                     <option value="">Select Gender</option>
// //                     <option value="Male">Male</option>
// //                     <option value="Female">Female</option>
// //                     <option value="Transgender">Transgender</option>
// //                   </select>
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input type="text" name="phone" className="form-control" placeholder="Your Phone Number" aria-label="Phone Number" required onChange={(e) => setInputData({ ...inputData, mobilenumber: e.target.value })} />
// //                 </div>
// //                 <input type="hidden" name="country_code" className="text-dark" />
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="password" name="password" placeholder="Password" aria-label="Password" required onChange={(e) => setInputData({ ...inputData, password: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="password" name="password_confirmation" placeholder="Confirm Password" aria-label="Confirm Password" required onChange={(e) => setInputData({ ...inputData, confirmpassword: e.target.value })} />
// //                 </div>
                
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="age" placeholder="Age" aria-label="Age" required onChange={(e) => setInputData({ ...inputData, age: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <select name="religion" className="form-control" aria-label="Religion" required onChange={(e) => setInputData({ ...inputData, religion: e.target.value })}>
// //                     <option value="">Select Religion</option>
// //                     <option value="Christian">Christian</option>
// //                     <option value="Muslim">Muslim</option>
// //                     <option value="Hindu">Hindu</option>
// //                   </select>
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="caste" placeholder="Caste" aria-label="Caste" required onChange={(e) => setInputData({ ...inputData, caste: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <select name="maritalstatus" className="form-control" aria-label="Marital Status" required onChange={(e) => setInputData({ ...inputData, maritalstatus: e.target.value })}>
// //                     <option value="">Select Status</option>
// //                     <option value="Never married">Never Married</option>
// //                     <option value="Widowed">Widowed</option>
// //                     <option value="Divorced">Divorced</option>
// //                   </select>
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="currentsalary" placeholder="Current Salary" aria-label="Current Salary" required onChange={(e) => setInputData({ ...inputData, currentsalary: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="occupation" placeholder="Occupation" aria-label="Occupation" required onChange={(e) => setInputData({ ...inputData, occupation: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="height" placeholder="Height" aria-label="Height" required onChange={(e) => setInputData({ ...inputData, height: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="weight" placeholder="Weight" aria-label="Weight" required onChange={(e) => setInputData({ ...inputData, weight: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="text" name="address" placeholder="Address" aria-label="Address" required onChange={(e) => setInputData({ ...inputData, address: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="date" name="dob" placeholder="Date of Birth" aria-label="Date of Birth" required onChange={(e) => setInputData({ ...inputData, dob: e.target.value })} />
// //                 </div>
// //                 <div className="col-md-6 form-group">
// //                   <input className="form-control" type="file" name="photo" placeholder="Photo" aria-label="Photo" required onChange={handleFileChange} />
// //                 </div>
// //                 <div className="col-12">
// //                   <div className="links">
// //                     <div className="form-check">
// //                       <input className="form-check-input" type="checkbox" id="flexCheckDefault" aria-label="Agree to terms" required />
// //                       <label className="form-check-label" htmlFor="flexCheckDefault">
// //                         By signing up you agree to our <a href="">T&C.</a>
// //                       </label>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <button className="btn-flower" type="submit">Sign Up</button>
// //               <div className="bottom">Already have an account?<br />
// //                 <a href="/login">Sign In</a>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const App = () => (
// //   <div>
// //     <Preloader />
// //     <ScrollUp />
// //     <Signup />
// //   </div>
// // );

// // export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Preloader = () => (
//   <div id="preloader">
//     <img src="https://media.tenor.com/1huXpX94SDkAAAAM/love-you-love.gif" alt="loader" className="loader" />
//   </div>
// );

// window.addEventListener('load', () => {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     preloader.style.display = 'none';
//   }
// });

// const ScrollUp = () => (
//   <a href="#" className="scroll-up" aria-label="Scroll up">
//     <i className="fal fa-chevron-double-up"></i>
//   </a>
// );

// const Signup = () => {
//   const [inputData, setInputData] = useState({
//     firstname: "", lastname: "", nationality: "", email: "", gender: "", mobilenumber: "", password: "", confirmpassword: "", age: "", religion: "", caste: "", maritalstatus: "", currentsalary: "", occupation: "", height: "", weight: "", dob: "", photourl: "", role: "user",
//   });

//   const [errors, setErrors] = useState({});
  
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://localhost:1002/upload', {
//           method: 'POST',
//           body: formData,
//         });
//         const data = await response.json();
//         setInputData({ ...inputData, photourl: data.url });
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     }
//   };

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//     // Validate on change
//     const updatedErrors = validateValues({ ...inputData, [name]: value });
//     setErrors(updatedErrors);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateValues(inputData);
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Payload being sent:", inputData); // Debugging payload
//       axios.post("http://localhost:1002/User/register", inputData)
//         .then((res) => {
//           console.log("Response:", res);
//           Swal.fire({
//             icon: 'success',
//             title: 'Success',
//             text: 'User added successfully!',
//           });
//           navigate("/login");
//         })
//         .catch((err) => {
//           console.error("Error response:", err.response);
//           console.error("Error message:", err.message);
//           Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: `Error adding user: ${err.message}`,
//           });
//         });
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateValues = (inputData) => {
//     const errors = {};

//     // Password Validation
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(inputData.password)) {
//       errors.password = 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.';
//     }
//     if (inputData.password !== inputData.confirmpassword) {
//       errors.confirmpassword = 'Passwords do not match';
//     }

//     // Email Validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(inputData.email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Phone Number Validation
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(inputData.mobilenumber)) {
//       errors.mobilenumber = 'Phone number must be 10 digits long';
//     }

//     // Age Validation
//     if (isNaN(inputData.age) || inputData.age < 18 || inputData.age > 100) {
//       errors.age = 'Age must be a number between 18 and 100';
//     }

//     // Date of Birth Validation
//     if (isNaN(new Date(inputData.dob).getTime())) {
//       errors.dob = 'Invalid date of birth';
//     }

//     // Other Fields Validation
//     if (!inputData.firstname) errors.firstname = 'First name is required';
//     if (!inputData.lastname) errors.lastname = 'Last name is required';
//     if (!inputData.gender) errors.gender = 'Gender is required';
//     if (!inputData.nationality) errors.nationality = 'Nationality is required';
//     if (!inputData.religion) errors.religion = 'Religion is required';
//     if (!inputData.caste) errors.caste = 'Caste is required';
//     if (!inputData.maritalstatus) errors.maritalstatus = 'Marital status is required';
//     if (!inputData.currentsalary) errors.currentsalary = 'Current salary is required';
//     if (!inputData.occupation) errors.occupation = 'Occupation is required';
//     if (!inputData.height) errors.height = 'Height is required';
//     if (!inputData.weight) errors.weight = 'Weight is required';
//     // if (!inputData.photourl) errors.photourl = 'Profile photo is required';

//     return errors;
//   };

//   return (
//     <section className='login-section'>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="row g-3 g-md-4">
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="firstname" 
//                     placeholder="First Name" 
//                     aria-label="First Name" 
//                     onChange={handleChange} 
//                     value={inputData.firstname}
//                   />
//                   {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="lastname" 
//                     placeholder="Last Name" 
//                     aria-label="Last Name" 
//                     onChange={handleChange} 
//                     value={inputData.lastname}
//                   />
//                   {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.nationality ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="nationality" 
//                     placeholder="Nationality" 
//                     aria-label="Nationality" 
//                     onChange={handleChange} 
//                     value={inputData.nationality}
//                   />
//                   {errors.nationality && <div className="invalid-feedback">{errors.nationality}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
//                     type="email" 
//                     name="email" 
//                     placeholder="Email Address" 
//                     aria-label="Email Address" 
//                     onChange={handleChange} 
//                     value={inputData.email}
//                   />
//                   {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <select 
//                     name="gender" 
//                     className={`form-control ${errors.gender ? 'is-invalid' : ''}`} 
//                     aria-label="Gender" 
//                     onChange={handleChange} 
//                     value={inputData.gender}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Transgender">Transgender</option>
//                   </select>
//                   {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.mobilenumber ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="mobilenumber" 
//                     placeholder="Mobile Number" 
//                     aria-label="Mobile Number" 
//                     onChange={handleChange} 
//                     value={inputData.mobilenumber}
//                   />
//                   {errors.mobilenumber && <div className="invalid-feedback">{errors.mobilenumber}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
//                     type="password" 
//                     name="password" 
//                     placeholder="Password" 
//                     aria-label="Password" 
//                     onChange={handleChange} 
//                     value={inputData.password}
//                   />
//                   {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} 
//                     type="password" 
//                     name="confirmpassword" 
//                     placeholder="Confirm Password" 
//                     aria-label="Confirm Password" 
//                     onChange={handleChange} 
//                     value={inputData.confirmpassword}
//                   />
//                   {errors.confirmpassword && <div className="invalid-feedback">{errors.confirmpassword}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.age ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="age" 
//                     placeholder="Age" 
//                     aria-label="Age" 
//                     onChange={handleChange} 
//                     value={inputData.age}
//                   />
//                   {errors.age && <div className="invalid-feedback">{errors.age}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <select 
//                     name="religion" 
//                     className={`form-control ${errors.religion ? 'is-invalid' : ''}`} 
//                     aria-label="Religion" 
//                     onChange={handleChange} 
//                     value={inputData.religion}
//                   >
//                     <option value="">Select Religion</option>
//                     <option value="Christian">Christian</option>
//                     <option value="Muslim">Muslim</option>
//                     <option value="Hindu">Hindu</option>
//                   </select>
//                   {errors.religion && <div className="invalid-feedback">{errors.religion}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.caste ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="caste" 
//                     placeholder="Caste" 
//                     aria-label="Caste" 
//                     onChange={handleChange} 
//                     value={inputData.caste}
//                   />
//                   {errors.caste && <div className="invalid-feedback">{errors.caste}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <select 
//                     name="maritalstatus" 
//                     className={`form-control ${errors.maritalstatus ? 'is-invalid' : ''}`} 
//                     aria-label="Marital Status" 
//                     onChange={handleChange} 
//                     value={inputData.maritalstatus}
//                   >
//                     <option value="">Select Status</option>
//                     <option value="Never married">Never Married</option>
//                     <option value="Widowed">Widowed</option>
//                     <option value="Divorced">Divorced</option>
//                   </select>
//                   {errors.maritalstatus && <div className="invalid-feedback">{errors.maritalstatus}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.currentsalary ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="currentsalary" 
//                     placeholder="Current Salary" 
//                     aria-label="Current Salary" 
//                     onChange={handleChange} 
//                     value={inputData.currentsalary}
//                   />
//                   {errors.currentsalary && <div className="invalid-feedback">{errors.currentsalary}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.occupation ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="occupation" 
//                     placeholder="Occupation" 
//                     aria-label="Occupation" 
//                     onChange={handleChange} 
//                     value={inputData.occupation}
//                   />
//                   {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.height ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="height" 
//                     placeholder="Height" 
//                     aria-label="Height" 
//                     onChange={handleChange} 
//                     value={inputData.height}
//                   />
//                   {errors.height && <div className="invalid-feedback">{errors.height}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.weight ? 'is-invalid' : ''}`} 
//                     type="text" 
//                     name="weight" 
//                     placeholder="Weight" 
//                     aria-label="Weight" 
//                     onChange={handleChange} 
//                     value={inputData.weight}
//                   />
//                   {errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
//                 </div>
                // <div className="col-md-6 form-group">
                //   <input 
                //     className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
                //     type="text" 
                //     name="address" 
                //     placeholder="Address" 
                //     aria-label="Address" 
                //     onChange={handleChange} 
                //     value={inputData.address}
                //   />
                //   {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                // </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.dob ? 'is-invalid' : ''}`} 
//                     type="date" 
//                     name="dob" 
//                     aria-label="Date of Birth" 
//                     onChange={handleChange} 
//                     value={inputData.dob}
//                   />
//                   {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
//                 </div>
//                 <div className="col-md-6 form-group">
//                   <input 
//                     className={`form-control ${errors.photourl ? 'is-invalid' : ''}`} 
//                     type="file" 
//                     name="photo" 
//                     aria-label="Photo" 
//                     onChange={handleFileChange} 
//                   />
//                   {errors.photourl && <div className="invalid-feedback">{errors.photourl}</div>}
//                 </div>
//                 <div className="col-12">
//                   <div className="links">
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" id="flexCheckDefault" aria-label="Agree to terms" required />
//                       <label className="form-check-label" htmlFor="flexCheckDefault">
//                         By signing up you agree to our <a href="">T&C.</a>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button className="btn-flower" type="submit">Sign Up</button>
//               <div className="bottom">Already have an account?<br />
//                 <a href="/login">Sign In</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const App = () => (
//   <div>
//     <Preloader />
//     <ScrollUp />
//     <Signup />
//   </div>
// );

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Preloader = () => (
  <div id="preloader">
    <img src="https://media.tenor.com/1huXpX94SDkAAAAM/love-you-love.gif" alt="loader" className="loader" />
  </div>
);

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

const ScrollUp = () => (
  <a href="#" className="scroll-up" aria-label="Scroll up">
    <i className="fal fa-chevron-double-up"></i>
  </a>
);

const Signup = () => {
  const [inputData, setInputData] = useState({
    firstname: "", lastname: "", nationality: "", email: "", gender: "", mobilenumber: "", password: "", confirmpassword: "", age: "", religion: "", caste: "", maritalstatus: "", currentsalary: "", occupation: "", height: "", weight: "", dob: "",address:"", photourl: "", role: "user",
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:1002/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        setInputData({ ...inputData, photourl: data.url });
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const validateValues = () => {
    const errors = {};

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(inputData.password)) {
      errors.password = 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.';
    }
    if (inputData.password !== inputData.confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputData.email)) {
      errors.email = 'Invalid email address';
    }

    // Phone Number Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(inputData.mobilenumber)) {
      errors.mobilenumber = 'Phone number must be 10 digits long';
    }

    // Age Validation
    if (isNaN(inputData.age) || inputData.age < 18 || inputData.age > 100) {
      errors.age = 'Age must be a number between 18 and 100';
    }

    // Date of Birth Validation
    // if (isNaN(new Date(inputData.dob).getTime())) {
    //   errors.dob = 'Invalid date of birth';
    // }
    const dob = new Date(inputData.dob);
    if (isNaN(dob.getTime())) {
        errors.dob = 'Invalid date of birth';
    } else {
        const today = new Date();
        if (dob > today) {
            errors.dob = 'Date of birth cannot be in the future';
        } else {
            const age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            if (age < 18) {
                errors.dob = 'You must be at least 18 years old';
            }
        }
    }

    // Other Fields Validation
    if (!inputData.firstname) errors.firstname = 'First name is required';
    if (!inputData.lastname) errors.lastname = 'Last name is required';
    if (!inputData.gender) errors.gender = 'Gender is required';
    if (!inputData.nationality) errors.nationality = 'Nationality is required';
    if (!inputData.religion) errors.religion = 'Religion is required';
    if (!inputData.caste) errors.caste = 'Caste is required';
    if (!inputData.maritalstatus) errors.maritalstatus = 'Marital status is required';
    if (!inputData.currentsalary) errors.currentsalary = 'Current salary is required';
    if (!inputData.occupation) errors.occupation = 'Occupation is required';
    if (!inputData.height) errors.height = 'Height is required';
    if (!inputData.weight) errors.weight = 'Weight is required';
    if (!inputData.address) errors.address = 'address is required';
    // if (!inputData.photourl) errors.photourl = 'Profile photo is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateValues();
    if (Object.keys(validationErrors).length === 0) {
      axios.post("http://localhost:1002/User/register", inputData)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User added successfully!',
          });
          navigate("/login");
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Error adding user: ${err.message}`,
          });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className='login-section'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-3 g-md-4">
                <div className="col-md-6 form-group">
                  <label htmlFor="firstname">First Name</label>
                  <input 
                    id="firstname"
                    className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name" 
                    aria-label="First Name" 
                    onChange={handleChange} 
                    value={inputData.firstname}
                  />
                  {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input 
                    id="lastname"
                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name" 
                    aria-label="Last Name" 
                    onChange={handleChange} 
                    value={inputData.lastname}
                  />
                  {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input 
                    id="nationality"
                    className={`form-control ${errors.nationality ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="nationality" 
                    placeholder="Nationality" 
                    aria-label="Nationality" 
                    onChange={handleChange} 
                    value={inputData.nationality}
                  />
                  {errors.nationality && <div className="invalid-feedback">{errors.nationality}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    id="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    aria-label="Email Address" 
                    onChange={handleChange} 
                    value={inputData.email}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="gender">Gender</label>
                  <select 
                    id="gender"
                    name="gender" 
                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`} 
                    aria-label="Gender" 
                    onChange={handleChange} 
                    value={inputData.gender}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="mobilenumber">Mobile Number</label>
                  <input 
                    id="mobilenumber"
                    className={`form-control ${errors.mobilenumber ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="mobilenumber" 
                    placeholder="Your Phone Number" 
                    aria-label="Phone Number" 
                    onChange={handleChange} 
                    value={inputData.mobilenumber}
                  />
                  {errors.mobilenumber && <div className="invalid-feedback">{errors.mobilenumber}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    aria-label="Password" 
                    onChange={handleChange} 
                    value={inputData.password}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input 
                    id="confirmpassword"
                    className={`form-control ${errors.confirmpassword ? 'is-invalid' : ''}`} 
                    type="password" 
                    name="confirmpassword" 
                    placeholder="Confirm Password" 
                    aria-label="Confirm Password" 
                    onChange={handleChange} 
                    value={inputData.confirmpassword}
                  />
                  {errors.confirmpassword && <div className="invalid-feedback">{errors.confirmpassword}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="age">Age</label>
                  <input 
                    id="age"
                    className={`form-control ${errors.age ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="age" 
                    placeholder="Age" 
                    aria-label="Age" 
                    onChange={handleChange} 
                    value={inputData.age}
                  />
                  {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="religion">Religion</label>
                  <select 
                    id="religion"
                    name="religion" 
                    className={`form-control ${errors.religion ? 'is-invalid' : ''}`} 
                    aria-label="Religion" 
                    onChange={handleChange} 
                    value={inputData.religion}
                  >
                    <option value="">Select Religion</option>
                    <option value="Christian">Christian</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Hindu">Hindu</option>
                  </select>
                  {errors.religion && <div className="invalid-feedback">{errors.religion}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="caste">Caste</label>
                  <input 
                    id="caste"
                    className={`form-control ${errors.caste ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="caste" 
                    placeholder="Caste" 
                    aria-label="Caste" 
                    onChange={handleChange} 
                    value={inputData.caste}
                  />
                  {errors.caste && <div className="invalid-feedback">{errors.caste}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="maritalstatus">Marital Status</label>
                  <select 
                    id="maritalstatus"
                    name="maritalstatus" 
                    className={`form-control ${errors.maritalstatus ? 'is-invalid' : ''}`} 
                    aria-label="Marital Status" 
                    onChange={handleChange} 
                    value={inputData.maritalstatus}
                  >
                    <option value="">Select Status</option>
                    <option value="Never married">Never Married</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Divorced">Divorced</option>
                  </select>
                  {errors.maritalstatus && <div className="invalid-feedback">{errors.maritalstatus}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="currentsalary">Current Salary</label>
                  <input 
                    id="currentsalary"
                    className={`form-control ${errors.currentsalary ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="currentsalary" 
                    placeholder="Current Salary" 
                    aria-label="Current Salary" 
                    onChange={handleChange} 
                    value={inputData.currentsalary}
                  />
                  {errors.currentsalary && <div className="invalid-feedback">{errors.currentsalary}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input 
                    id="occupation"
                    className={`form-control ${errors.occupation ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="occupation" 
                    placeholder="Occupation" 
                    aria-label="Occupation" 
                    onChange={handleChange} 
                    value={inputData.occupation}
                  />
                  {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="height">Height</label>
                  <input 
                    id="height"
                    className={`form-control ${errors.height ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="height" 
                    placeholder="Height" 
                    aria-label="Height" 
                    onChange={handleChange} 
                    value={inputData.height}
                  />
                  {errors.height && <div className="invalid-feedback">{errors.height}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="weight">Weight</label>
                  <input 
                    id="weight"
                    className={`form-control ${errors.weight ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="weight" 
                    placeholder="Weight" 
                    aria-label="Weight" 
                    onChange={handleChange} 
                    value={inputData.weight}
                  />
                  {errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input 
                    id="dob"
                    className={`form-control ${errors.dob ? 'is-invalid' : ''}`} 
                    type="date" 
                    name="dob" 
                    aria-label="Date of Birth" 
                    onChange={handleChange} 
                    value={inputData.dob}
                  />
                  {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                </div>
                <div className="col-md-6 form-group">
                <label htmlFor="address">Address</label>
                  <input 
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    aria-label="Address" 
                    onChange={handleChange} 
                    value={inputData.address}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="photo">Photo</label>
                  <input 
                    id="photo"
                    className={`form-control ${errors.photourl ? 'is-invalid' : ''}`} 
                    type="file" 
                    name="photo" 
                    aria-label="Photo" 
                    onChange={handleFileChange}
                  />
                  {errors.photourl && <div className="invalid-feedback">{errors.photourl}</div>}
                </div>
                <div className="col-12">
                  <div className="links">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" aria-label="Agree to terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        By signing up you agree to our <a href="">T&C.</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-flower" type="submit">Sign Up</button>
              <div className="bottom">Already have an account?<br />
                <a href="/login">Sign In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <div>
    <Preloader />
    <ScrollUp />
    <Signup />
  </div>
);

export default App;
