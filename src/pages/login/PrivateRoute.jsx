// // import React from 'react';
// // import { Navigate } from 'react-router-dom';
// // // import { useAuth } from './pages/login/AuthContext';
// // // Ensure the path is correct and matches the actual file structure
// // import { useAuth } from '../login/AuthContext';


// // function PrivateRoute({ children, roles }) {
// //   const { isAuthenticated, user } = useAuth();

// //   if (!isAuthenticated) {
// //     return <Navigate to="/Login" />;
// //   }

// //   if (roles && roles.indexOf(user.role) === -1) {
// //     return <Navigate to="/Unauthorized" />;
// //   }

// //   return children;
// // }

// // export default PrivateRoute;
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ children, role }) => {
//   const { isAuthenticated, user } = useAuth();

//   if (!isAuthenticated || user.role !== role) {
//     return <Navigate to="/Dashboard" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/Unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
