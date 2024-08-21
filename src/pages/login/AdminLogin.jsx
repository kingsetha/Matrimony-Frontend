
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// function LoginSection() {
//   const [inputData, setInputData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");  // State for error message
//   const navigate = useNavigate(); 
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       const result = validateValues(inputData);
//       if (result === true) {
//           try {
//               const res = await axios.post("http://localhost:1002/Admin/login", inputData);
//               console.log("API Response:", res.data);

//               if (res.data === "Login successful") {
//                   login();
//                   console.log("entered");
//                   alert("login success");
//                   navigate("/Dashboard");  
//               } else {
//                   console.log("not entered");
//                   setError("Login failed: Invalid email or password");  
//               }
//           } catch (err) {
//               setError("An error occurred. Please try again.");  
//           }
//       }
//   };

//   const validateValues = (inputData) => {
//       if (inputData.email.length === 0) {
//           setError("Please enter email");
//           return false;
//       } else if (inputData.password.length === 0) {
//           setError("Please enter password");
//           return false;
//       } else {
//           setError("");  // Clear any previous error messages
//           return true;
//       }
//   };

//   return (
//     <section className="login-section">
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="hidden" name="_token" value="P8ANTBgQLSXEnfCDrjRJXYByviEuZR5fPowBYhZK" />
//               <div className="row g-3 g-md-4">
//                 <div className='col-12'>
//                   <label>Email :</label>
//                   <input
//                     type="text"
//                     name="email"
//                     className="form-control"
//                     value={inputData.email}
//                     onChange={(e) =>
//                       setInputData({ ...inputData, email: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className='col-12'>
//                   <label>Password :</label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     value={inputData.password}
//                     onChange={(e) =>
//                       setInputData({ ...inputData, password: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="col-12">
//                   <div className="links">
//                     <div className="form-check">
//                       <input className="form-check-input" type="checkbox" name="remember" value="" id="flexCheckDefault" />
//                       <label className="form-check-label" htmlFor="flexCheckDefault">
//                         Remember me
//                       </label>
//                     </div>
//                     <a href="/password/reset">Forgot password?</a>
//                   </div>
//                 </div>
//               </div>
//               <button type="submit" className="btn-flower">Sign in</button>
//               {error && <p className="text-danger">{error}</p>}
//               <div className="bottom">Don't have an account? <br />
//                 <a href="/register">Create account</a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LoginSection;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AdminLogin() {
    const [inputData, setInputData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); 
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = validateValues(inputData);
        if (result === true) {
            setIsSubmitting(true);
            try {
                const res = await axios.post("http://localhost:1002/Admin", inputData);
                console.log("API Response:", res.data);

                if (res.data === "Login successful") {
                    login(res.data.user, 'admin');  // Pass user data and role
                    console.log("entered");
                    alert("login success");
                    navigate("/AdminDashboard");  
                } else {
                    console.log("not entered");
                    setError("Login failed: Invalid email or password");  
                }
            } catch (err) {
                setError("An error occurred. Please try again.");  
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const validateValues = (inputData) => {
        if (inputData.email.length === 0) {
            setError("Please enter email");
            return false;
        } else if (inputData.password.length === 0) {
            setError("Please enter password");
            return false;
        } else {
            setError("");
            return true;
        }
    };

    return (
        <section className="login-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Admin Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_token" value="P8ANTBgQLSXEnfCDrjRJXYByviEuZR5fPowBYhZK" />
                            <div className="row g-3 g-md-4">
                                <div className='col-12'>
                                    <label>Email :</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        value={inputData.email}
                                        onChange={(e) =>
                                            setInputData({ ...inputData, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div className='col-12'>
                                    <label>Password :</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={inputData.password}
                                        onChange={(e) =>
                                            setInputData({ ...inputData, password: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="col-12">
                                    <div className="links">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="/password/reset">Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-flower" disabled={isSubmitting}>Sign in</button>
                            {error && <p className="text-danger">{error}</p>}
                            <div className="bottom">Don't have an account? <br />
                                <a href="/register">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;
