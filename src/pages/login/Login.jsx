
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// function LoginSection() {
//   const [inputData, setInputData] = useState({ email: "", password: "", role: "user" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); 
//   const { login } = useAuth();

  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const result = validateValues(inputData);
  
//     if (result === true) {
//       try {
//         const url = 'http://localhost:1002/User'; // Single login URL
  
//         console.log('Making request to:', url);
//         console.log('Input data:', inputData);
  
//         const response = await axios.post(url, inputData);
//         console.log('Response data:', response.data);
//         const { userid, message, role } = response.data;
  
//         sessionStorage.setItem("UserId", userid);
  
//         if (message === 'LoginSuccess') {
//           if (role === 'admin') {
//             navigate('/AdminHome');
//           } else if (role === 'user') {
//             navigate('/Preference');
//           } else {
//             alert('Unknown user role');
//           }
//         } else {
//           alert('Login failed. Please check your credentials.');
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//         alert('An error occurred during login. Please try again later.');
//       }
//     }
//   };
  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const result = validateValues(inputData);
//   //   if (result === true) {
//   //     const { agreeToTerms, ...formData } = inputData;
  
//   //     // if (!agreeToTerms) {
//   //     //   alert('You must agree to the privacy policy.');
//   //     //   return;
//   //     // }
  
//   //     try {
//   //       const url = formData.role === "admin" ? "http://localhost:1002/Admin" : "http://localhost:1002/User";
//   //       const res = await axios.post(url, formData);
//   //       console.log("API Response:", res.data);
  
//   //       const { id, status, role } = res.data;
  
//   //       sessionStorage.setItem("UserId", id);
  
//   //       if (status === 'LoginSuccess') {
//   //         const user = { email: formData.email, role: formData.role, userid: id };
//   //         login(user, formData.role);
//   //         alert("Login success");
  
//   //         if (role === "admin") {
//   //           navigate("/AdminHome");
//   //         } else if (role === "client") {
//   //           navigate("/Dashboard");
//   //         } else if (role === "officer") {
//   //           navigate("/customs");
//   //         } else {
//   //           alert('Unknown user role');
//   //         }
//   //       } else {
//   //         alert('Login failed. Please check your credentials.');
//   //       }
//   //     } catch (err) {
//   //       console.error('Login error:', err);
//   //       alert('An error occurred during login. Please try again later.');
//   //     }
//   //   }
//   // };
  

//   const validateValues = (inputData) => {
//     if (inputData.email.length === 0) {
//       setError("Please enter email");
//       return false;
//     } else if (inputData.password.length === 0) {
//       setError("Please enter password");
//       return false;
//     } else {
//       setError("");
//       return true;
//     }
//   };

//   return (
//     <section className="login-section">
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
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
//                 {/* <div className='col-12'>
//                   <label>Role :</label>
//                   <select
//                     name="role"
//                     className="form-control"
//                     value={inputData.role}
//                     onChange={(e) =>
//                       setInputData({ ...inputData, role: e.target.value })
//                     }
//                   >
//                     <option value="user">user</option>
//                     <option value="admin">admin</option>
//                   </select>
//                 </div> */}
//               </div><br></br>
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

function LoginSection() {
  const [inputData, setInputData] = useState({ email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = validateValues(inputData);
  
    if (result === true) {
      try {
        const url = 'http://localhost:1002/User'; // Adjust URL as necessary
  
        console.log('Making request to:', url);
        console.log('Input data:', inputData);
  
        const response = await axios.post(url, inputData);
        console.log('Response data:', response.data);
        const { userid, message, role, blocked } = response.data;
  
        // Check if the user is blocked
        if (blocked) {
          alert('Your account is blocked. Please contact support.');
          return;
        }
  
        sessionStorage.setItem("UserId", userid);
  
        if (message === 'LoginSuccess') {
          // Handle navigation based on role
          if (role === 'admin') {
            navigate('/AdminHome');
          } else if (role === 'user') {
            navigate('/Preference');
          } else {
            alert('Unknown user role');
          }
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login. Please try again later.');
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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                {/* Uncomment if role selection is necessary */}
                {/* <div className='col-12'>
                  <label>Role :</label>
                  <select
                    name="role"
                    className="form-control"
                    value={inputData.role}
                    onChange={(e) =>
                      setInputData({ ...inputData, role: e.target.value })
                    }
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div> */}
              </div><br />
              <button type="submit" className="btn-flower">Sign in</button>
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

export default LoginSection;
