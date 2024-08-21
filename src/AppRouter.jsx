// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Hero from './pages/hero/Hero';
// // // import Login from './pages/login/Login';
// // // import Register from './pages/register/Register';
// // // import UserHome from "./pages/userhome/UserHome";
// // // import Member from "./pages/member/Member";
// // // import Dashboard from "./pages/userhome/Dashboard";
// // // import AdminHome from "./pages/adminhome/AdminHome";
// // // import EditProfile from "./pages/userhome/EditProfile";
// // // import Search from "./pages/userhome/Search";
// // // import { AuthProvider } from './pages/login/AuthContext'; 
// // // import SingleProfile from "./pages/userhome/SingleProfile";
// // // import Logout from "./pages/userhome/components/logout";
// // // import AdminLogin from "./pages/login/AdminLogin"

// // // function AppRouter() {
// // //   return (
// // //     <AuthProvider>  {/* Wrap your Router with AuthProvider */}
// // //       <Router>
// // //         <Routes>
          
// // //           <Route path="/" element={<Hero />} />
// // //           <Route path="/Login" element={<Login />} />
// // //           <Route path="/AdminLogin" element={<AdminLogin />} />
// // //           <Route path="/Register" element={<Register />} />
// // //           <Route path="/Member" element={<Member />} />
// // //            {/* Protected Routes */}
// // //           <Route path="/UserHome" element={<UserHome />} />
// // //           <Route path="/Dashboard" element={<Dashboard />} />
// // //           <Route path="/AdminHome" element={<AdminHome />} />
// // //           <Route path="/EditProfile" element={<EditProfile />} />
// // //           {/* <Route path="/edit-profile/:userid" component={EditProfile} /> */}
// // //           <Route path="/Search" element={<Search />} />
         
// // //           <Route path="/User/:userid" element={<SingleProfile />} />
// // //           <Route path="/Logout" element={<Logout />} />
// // //         </Routes>
// // //       </Router>
// // //     </AuthProvider>
// // //   );
// // // }

// // // export default AppRouter;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Hero from './pages/hero/Hero';
// // import Login from './pages/login/Login';
// // import Register from './pages/register/Register';
// // import UserHome from "./pages/userhome/UserHome";
// // import Member from "./pages/member/Member";
// // import Dashboard from "./pages/userhome/Dashboard";
// // import AdminHome from "./pages/adminhome/AdminHome";
// // import EditProfile from "./pages/userhome/EditProfile";
// // import Search from "./pages/userhome/Search";
// // import { AuthProvider } from './pages/login/AuthContext'; 
// // import SingleProfile from "./pages/userhome/SingleProfile";
// // import Logout from "./pages/userhome/components/logout";
// // import AdminLogin from "./pages/login/AdminLogin";
// // import PrivateRoute from './pages/login/PrivateRoute';

// // function AppRouter() {
// //   return (
// //     <AuthProvider>
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Hero />} />
// //           <Route path="/Login" element={<Login />} />
// //           <Route path="/AdminLogin" element={<AdminLogin />} />
// //           <Route path="/Register" element={<Register />} />
// //           <Route path="/Member" element={<Member />} />
// //           <Route path="/UserHome" element={<PrivateRoute><UserHome /></PrivateRoute>} />
// //           <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
// //           <Route path="/AdminHome" element={<PrivateRoute roles={['admin']}><AdminHome /></PrivateRoute>} />
// //           <Route path="/EditProfile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
// //           <Route path="/Search" element={<PrivateRoute><Search /></PrivateRoute>} />
// //           <Route path="/User/:userid" element={<PrivateRoute><SingleProfile /></PrivateRoute>} />
// //           <Route path="/Logout" element={<logout />} />
// //           <Route path="*" element={<div>404 Not Found</div>} />
// //         </Routes>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // export default AppRouter;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './pages/login/AuthContext';
import PrivateRoute from './pages/login/PrivateRoute';
import Hero from './pages/hero/Hero';
import Login from './pages/login/Login';
import AdminLogin from './pages/login/AdminLogin';
import Register from './pages/register/Register';
import UserHome from './pages/userhome/UserHome';
import Dashboard from './pages/userhome/Dashboard';
import AdminHome from './pages/adminhome/AdminHome';
import Analytics from './pages/adminhome/Analytics';
import EditAdmin from './pages/adminhome/EditAdmin';
import EditProfile from './pages/userhome/EditProfile';
import Search from './pages/userhome/Search';
import SingleProfile from './pages/userhome/SingleProfile';
import Logout from './pages/userhome/components/logout';
import Email from './pages/userhome/Email';
import Message from './pages/userhome/Message';
import Preference from './pages/userhome/Preferences';
import PremiumPlans from './pages/userhome/Premium';
function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserHome" element={<PrivateRoute roles={['user']}><UserHome /></PrivateRoute>} />
          <Route path="/Dashboard" element={<PrivateRoute roles={['user']}><Dashboard /></PrivateRoute>} />
          <Route path="/AdminHome" element={<PrivateRoute roles={['user']}><AdminHome /></PrivateRoute>} />
          <Route path="/EditProfile" element={<PrivateRoute roles={['user']}><EditProfile /></PrivateRoute>} />
          <Route path="/Search" element={<PrivateRoute roles={['user']}><Search /></PrivateRoute>} />
          <Route path="/EditAdmin" element={<PrivateRoute roles={['user']}><EditAdmin /></PrivateRoute>} />
          <Route path="/Preference" element={<PrivateRoute roles={['user']}><Preference /></PrivateRoute>} />
          <Route path="/Analytics" element={<PrivateRoute roles={['user']}><Analytics /></PrivateRoute>} />
          <Route path="/PremiumPlans" element={<PrivateRoute roles={['user']}><PremiumPlans /></PrivateRoute>} />
          <Route path="/messages/:userid" element={<PrivateRoute roles={['user']}><Message /></PrivateRoute>} />
          <Route path="/User/:userid" element={<PrivateRoute roles={['user']}><SingleProfile /></PrivateRoute>} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Email" element={<PrivateRoute roles={['user']}><Email /></PrivateRoute>}/>
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hero from './pages/hero/Hero';
// import Login from './pages/login/Login';
// import AdminLogin from './pages/login/AdminLogin';
// import Register from './pages/register/Register';
// import UserHome from './pages/userhome/UserHome';
// import Dashboard from './pages/userhome/Dashboard';
// import AdminHome from './pages/adminhome/AdminHome';
// import EditProfile from './pages/userhome/EditProfile';
// import Search from './pages/userhome/Search';
// import SingleProfile from './pages/userhome/SingleProfile';
// import Logout from './pages/userhome/components/logout';
// import Email from './pages/userhome/components/Email';

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/AdminLogin" element={<AdminLogin />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/UserHome" element={<UserHome />} />
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/AdminHome" element={<AdminHome />} />
//         <Route path="/EditProfile" element={<EditProfile />} />
//         <Route path="/Search" element={<Search />} />
//         <Route path="/User/:userid" element={<SingleProfile />} />
//         <Route path="/Email" element={<Email/>}/>
//         <Route path="/Logout" element={<Logout />} />
//         <Route path="*" element={<div>404 Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;
