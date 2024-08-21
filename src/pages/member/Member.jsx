import React, { useState } from 'react';

// Navigation Component
const Navigation = () => {
    const [items, setItems] = useState([]); // Example state for notifications

    const readAt = (id, link) => {
        // Handle read notification
    };

    const readAll = () => {
        // Handle read all notifications
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Wedding Wonders</a>
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
                            <a className="nav-link" href="/story">Story</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/plan">Package</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/members">Members</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
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
                                    <a className="dropdown-item align-items-center px-3" href="/user/dashboard">
                                        <i className="far fa-tachometer-alt-fast"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="/user/profile">
                                        <i className="far fa-user-cog"></i>
                                        <p>My Profile</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="">
                                        <i className="fas fa-user-lock"></i>
                                        <p>2FA Security</p>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item align-items-center px-3" href="/logout"
                                       onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                        <i className="far fa-power-off"></i>
                                        <p>Logout</p>
                                    </a>
                                    <form id="logout-form" action="/logout" method="POST" className="d-none">
                                        <input type="hidden" name="_token" value="8ErWxXrIHIkXRCcpDcnvV3s9YecKZp1fUAias7EL" />
                                    </form>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="notification-panel pe-3" id="pushNotificationArea">
                        <button className="dropdown-toggle">
                            <i className="fal fa-bell"></i>
                            <sup><span className="count">{items.length}</span></sup>
                        </button>
                        <ul className="notification-dropdown">
                            <div className="dropdown-box">
                                {items.length > 0 ? (
                                    items.map((item, index) => (
                                        <li key={index}>
                                            <a onClick={(e) => { e.preventDefault(); readAt(item.id, item.description.link); }} className="dropdown-item px-3" href="javascript:void(0)">
                                                <i className="fal fa-bell"></i>
                                                <div>
                                                    <p dangerouslySetInnerHTML={{ __html: item.description.text }}></p>
                                                    <span>{item.formatted_date}</span>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <li>You have no notifications</li>
                                )}
                            </div>
                            <div className="clear-all fixed-bottom">
                                {items.length > 0 && <a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); readAll(); }}>Clear all</a>}
                            </div>
                        </ul>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i className="fal fa-search"></i>
                    </button>
                </span>
            </div>
        </nav>
    );
};

// Hero Component
const Hero = () => {
    return (
        <div className='hero container' id="main">
            <div className='hero-text'>
                <h1>Celebrate the joy of food!!!</h1>
                <p>
                    Discover a mouthwatering selection of dishes that cater to every taste. Our menu features fresh, locally-sourced ingredients, expertly prepared to bring out rich flavors and satisfying textures.
                    From hearty meats to vibrant vegetarian options, each plate is crafted with care to ensure a memorable dining experience.
                </p>
                <button className='btn' >Explore More
                    <i className="fa fa-caret-right" style={{fontSize: "24px",marginLeft:"10px"}}></i>
                </button>
            </div>
        </div>
    );
};

// SearchModal Component
const SearchModal = () => {
    const [formData, setFormData] = useState({
        age_from: '',
        age_to: '',
        religion: '',
        marital_status: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="modal fade search-modal" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-lg-2">
                                    <input
                                        type="number"
                                        name="age_from"
                                        value={formData.age_from}
                                        onChange={handleChange}
                                        className="form-control"
                                        min="1"
                                        step="1"
                                        placeholder="age from"
                                    />
                                </div>
                                <div className="col-lg-2">
                                    <input
                                        type="number"
                                        name="age_to"
                                        value={formData.age_to}
                                        onChange={handleChange}
                                        className="form-control"
                                        min="1"
                                        step="1"
                                        placeholder="age to"
                                    />
                                </div>
                                <div className="col-lg-2">
                                    <select
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                        className="form-select"
                                        aria-label="religion"
                                    >
                                        <option value="" selected>Select Religion</option>
                                        <option value="6">Spiritual</option>
                                        <option value="5">Buddhist</option>
                                        <option value="4">Christian</option>
                                        <option value="3">Hindu</option>
                                        <option value="1">Muslim</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select
                                        name="marital_status"
                                        value={formData.marital_status}
                                        onChange={handleChange}
                                        className="form-select"
                                        aria-label="Marital status"
                                    >
                                        <option value="" selected>Marital Status</option>
                                        <option value="5">Married</option>
                                        <option value="4">Never Married</option>
                                        <option value="3">Divorced</option>
                                        <option value="2">Separated</option>
                                        <option value="1">Widowed</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="form-select"
                                        aria-label="gender"
                                    >
                                        <option value="" selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    </div>
                                <div className="col-lg-2">
                                    <button type="submit" className="btn-flower">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
