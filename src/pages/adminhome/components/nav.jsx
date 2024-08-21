// import React, { useState } from 'react';
// import'./nav.css';

// const Navigation = () => {
//     const [items, setItems] = useState([]); // Example state for notifications

//     const readAt = (id, link) => {
//         // Handle read notification
//     };

//     const readAll = () => {
//         // Handle read all notifications
//     };

//     return (
//         <nav className="navbar navbar-expand-lg fixed-top">
//             <div className="container-fluid">
//                 {/* <a className="navbar-brand" href="">Wedding Wonders</a> */}
//                 <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <i className="fal fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav mx-auto">
//                         <li className="nav-item">
//                             <a className="nav-link active" href="">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/about">About</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/Search">Search</a>
//                         </li>
//                         {/* <li className="nav-item">
//                             <a className="nav-link" href="/plan">Package</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/members">Members</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/blog">Blog</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/contact">Contact</a>
//                         </li> */}
//                     </ul>
//                 </div>
//                 <span className="navbar-text">
//                     <div className="notification-panel pe-3">
//                         <button className="dropdown-toggle">
//                             <i className="fal fa-user-circle"></i>
//                         </button>
//                         <ul className="notification-dropdown userprofile">
//                             <div className="dropdown-box">
//                                 <li>
//                                     <a className="dropdown-item align-items-center px-3" href="/AdminHome">
//                                         <i className="far fa-tachometer-alt-fast"></i>
//                                         <p>Dashboard</p>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item align-items-center px-3" href="/user/profile">
//                                         <i className="far fa-user-cog"></i>
//                                         <p>My Profile</p>
//                                     </a>
//                                 </li>
//                                 {/* <li>
//                                     <a className="dropdown-item align-items-center px-3" href="">
//                                         <i className="fas fa-user-lock"></i>
//                                         <p>2FA Security</p>
//                                     </a>
//                                 </li> */}
//                                 <li>
//                                     <a className="dropdown-item align-items-center px-3" href="/logout"
//                                        onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
//                                         <i className="far fa-power-off"></i>
//                                         <p>Logout</p>
//                                     </a>
//                                     <form id="logout-form" action="/logout" method="POST" className="d-none">
//                                         <input type="hidden" name="_token" value="8ErWxXrIHIkXRCcpDcnvV3s9YecKZp1fUAias7EL" />
//                                     </form>
//                                 </li>
//                             </div>
//                         </ul>
//                     </div>
//                     <div className="notification-panel pe-3" id="pushNotificationArea">
//                         <button className="dropdown-toggle">
//                             <i className="fal fa-bell"></i>
//                             <sup><span className="count">{items.length}</span></sup>
//                         </button>
//                         <ul className="notification-dropdown">
//                             <div className="dropdown-box">
//                                 {items.length > 0 ? (
//                                     items.map((item, index) => (
//                                         <li key={index}>
//                                             <a onClick={(e) => { e.preventDefault(); readAt(item.id, item.description.link); }} className="dropdown-item px-3" href="javascript:void(0)">
//                                                 <i className="fal fa-bell"></i>
//                                                 <div>
//                                                     <p dangerouslySetInnerHTML={{ __html: item.description.text }}></p>
//                                                     <span>{item.formatted_date}</span>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     ))
//                                 ) : (
//                                     <li>You have no notifications</li>
//                                 )}
//                             </div>
//                             <div className="clear-all fixed-bottom">
//                                 {items.length > 0 && <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); readAll(); }}>Clear all</a>}
//                             </div>
//                         </ul>
//                     </div>
//                     {/* <button data-bs-toggle="modal" data-bs-target="#searchModal">
//                         <i className="fal fa-search"></i>
//                     </button> */}
//                 </span>
//             </div>
//         </nav>
//     );
// };

// export default Navigation;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Navbar.css'; // Ensure your styles are in place

const Navigation = () => {
    const [notifications, setNotifications] = useState([]);
    const navigate = useNavigate();

    // Function to mark a notification as read
    const readAt = (id, link) => {
        // Handle notification read
        setNotifications(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
        // Navigate to the link if needed
        if (link) {
            navigate(link);
        }
    };

    // Function to mark all notifications as read
    const readAll = () => {
        setNotifications(prevNotifications =>
            prevNotifications.map(notification => ({ ...notification, read: true }))
        );
    };

    // Fetch notifications from an API or any other source
    const fetchNotifications = async () => {
        try {
            const response = await fetch('/api/notifications'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch notifications');
            }
            const data = await response.json();
            setNotifications(data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    // Logout handler
    const handleLogout = (e) => {
        e.preventDefault();
        // sessionStorage.clear(); // Clear session storage if needed
        navigate('/'); // Navigate to home page
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fal fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <div className="notification-panel pe-3">
                        <button className="dropdown-toggle">
                            <i className="fal fa-user-circle"></i>
                        </button>
                        <ul className="notification-dropdown userprofile">
                            <div className="dropdown-box">
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="/Preference">
                                        <i className="far fa-tachometer-alt-fast"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="/editprofile">
                                        <i className="far fa-user-cog"></i>
                                        <p>Edit Profile</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="/" onClick={handleLogout}>
                                        <i className="far fa-power-off"></i>
                                        <p>Logout</p>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="notification-panel pe-3" id="pushNotificationArea">
                        <button className="dropdown-toggle">
                            <i className="fal fa-bell"></i>
                            <sup><span className="count">{notifications.length}</span></sup>
                        </button>
                        <ul className="notification-dropdown">
                            <div className="dropdown-box">
                                {notifications.length > 0 ? (
                                    notifications.map((notification, index) => (
                                        <li key={index}>
                                            <a onClick={(e) => { e.preventDefault(); readAt(notification.id, notification.link); }} className="dropdown-item px-3" href="javascript:void(0)">
                                                <i className={`fal fa-bell ${notification.read ? 'read' : 'unread'}`}></i>
                                                <div>
                                                    <p dangerouslySetInnerHTML={{ __html: notification.text }}></p>
                                                    <span>{notification.formatted_date}</span>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li>You have no notifications</li>
                                )}
                            </div>
                            <div className="clear-all fixed-bottom">
                                {notifications.length > 0 && <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); readAll(); }}>Clear all</a>}
                            </div>
                        </ul>
                    </div>
                </span>
            </div>
        </nav>
    );
};

export default Navigation;
