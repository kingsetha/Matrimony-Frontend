
// // // // import React, { createContext, useState, useContext } from 'react';

// // // // const AuthContext = createContext();

// // // // export function useAuth() {
// // // //     return useContext(AuthContext);
// // // // }

// // // // export function AuthProvider({ children }) {
// // // //     const [isAuthenticated, setIsAuthenticated] = useState(false);

// // // //     const login = () => setIsAuthenticated(true);
// // // //     const logout = () => setIsAuthenticated(false);

// // // //     return (
// // // //         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
// // // //             {children}
// // // //         </AuthContext.Provider>
// // // //     );
// // // // }
// // // import React, { createContext, useState, useContext, useEffect } from 'react';

// // // const AuthContext = createContext();

// // // export function useAuth() {
// // //     return useContext(AuthContext);
// // // }

// // // export function AuthProvider({ children }) {
// // //     const [isAuthenticated, setIsAuthenticated] = useState(() => {
// // //         return localStorage.getItem('isAuthenticated') === 'true';
// // //     });
// // //     const [user, setUser] = useState(() => {
// // //         return JSON.parse(localStorage.getItem('user')) || null;
// // //     });
// // //     const [role, setRole] = useState(() => {
// // //         return localStorage.getItem('role') || 'user';
// // //     });

// // //     const login = (userData, userRole) => {
// // //         setIsAuthenticated(true);
// // //         setUser(userData);
// // //         setRole(userRole);
// // //         localStorage.setItem('isAuthenticated', 'true');
// // //         localStorage.setItem('user', JSON.stringify(userData));
// // //         localStorage.setItem('role', userRole);
// // //     };

// // //     const logout = () => {
// // //         setIsAuthenticated(false);
// // //         setUser(null);
// // //         setRole('user');
// // //         localStorage.removeItem('isAuthenticated');
// // //         localStorage.removeItem('user');
// // //         localStorage.removeItem('role');
// // //     };

// // //     useEffect(() => {
// // //         const storedUser = JSON.parse(localStorage.getItem('user'));
// // //         if (storedUser) {
// // //             setUser(storedUser);
// // //         }
// // //     }, []);

// // //     return (
// // //         <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // }
// // import React, { createContext, useState, useContext, useEffect } from 'react';

// // const AuthContext = createContext();

// // export function useAuth() {
// //     return useContext(AuthContext);
// // }

// // const safeParseJSON = (item) => {
// //     try {
// //         return JSON.parse(item);
// //     } catch (e) {
// //         return null;
// //     }
// // };

// // export function AuthProvider({ children }) {
// //     const [isAuthenticated, setIsAuthenticated] = useState(() => {
// //         return localStorage.getItem('isAuthenticated') === 'true';
// //     });
// //     const [user, setUser] = useState(() => {
// //         return safeParseJSON(localStorage.getItem('user')) || null;
// //     });
// //     const [role, setRole] = useState(() => {
// //         return localStorage.getItem('role') || 'user';
// //     });

// //     const login = (userData, userRole) => {
// //         setIsAuthenticated(true);
// //         setUser(userData);
// //         setRole(userRole);
// //         localStorage.setItem('isAuthenticated', 'true');
// //         localStorage.setItem('user', JSON.stringify(userData));
// //         localStorage.setItem('role', userRole);
// //     };

// //     const logout = () => {
// //         setIsAuthenticated(false);
// //         setUser(null);
// //         setRole('user');
// //         localStorage.removeItem('isAuthenticated');
// //         localStorage.removeItem('user');
// //         localStorage.removeItem('role');
// //     };

// //     useEffect(() => {
// //         const storedUser = safeParseJSON(localStorage.getItem('user'));
// //         if (storedUser) {
// //             setUser(storedUser);
// //         }
// //     }, []);

// //     return (
// //         <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export function useAuth() {
//     return useContext(AuthContext);
// }

// const safeParseJSON = (item) => {
//     try {
//         return JSON.parse(item);
//     } catch (e) {
//         return null;
//     }
// };

// export function AuthProvider({ children }) {
//     const [isAuthenticated, setIsAuthenticated] = useState(() => {
//         return localStorage.getItem('isAuthenticated') === 'true';
//     });
//     const [user, setUser] = useState(() => {
//         return safeParseJSON(localStorage.getItem('user')) || null;
//     });
//     const [role, setRole] = useState(() => {
//         return localStorage.getItem('role') || 'user';
//     });

//     const login = (userData, userRole) => {
//         setIsAuthenticated(true);
//         setUser(userData);
//         setRole(userRole);
//         localStorage.setItem('isAuthenticated', 'true');
//         localStorage.setItem('user', JSON.stringify(userData));
//         localStorage.setItem('role', userRole);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setUser(null);
//         setRole('user');
//         localStorage.removeItem('isAuthenticated');
//         localStorage.removeItem('user');
//         localStorage.removeItem('role');
//     };

//     useEffect(() => {
//         const storedUser = safeParseJSON(localStorage.getItem('user'));
//         if (storedUser) {
//             setUser(storedUser);
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const safeParseJSON = (item) => {
    try {
        return JSON.parse(item);
    } catch (e) {
        return null;
    }
};

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [user, setUser] = useState(() => {
        return safeParseJSON(localStorage.getItem('user')) || null;
    });
    const [role, setRole] = useState(() => {
        return localStorage.getItem('role') || 'user';
    });

    const login = (userData, userRole) => {
        setIsAuthenticated(true);
        setUser(userData);
        setRole(userRole);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('role', userRole);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setRole('user');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
    };

    useEffect(() => {
        const storedUser = safeParseJSON(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
