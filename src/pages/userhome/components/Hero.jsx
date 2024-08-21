
import React, { useState } from 'react';
import './Main.css'; // Make sure to import the CSS file

const SearchForm = () => {
    const [formData, setFormData] = useState({
        age_from: '',
        age_to: '',
        religion: '',
        marital_status: '',
        gender: '',
        member_id: '',
        caste: '',
        mother_tongue: '',
        country: '',
        state: '',
        city: '',
        max_height: '',
        min_height: ''
    });
    const [showReportModal, setShowReportModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
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
        <div >
          <div className="banner" style={{ background: 'url(https://wedding-wonders.bugfinder.net/assets/uploads/logo/banner.jpg)', backgroundSize: 'cover' }}>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-text">
                                    <h2>Active Members</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
          <div className="search-form">
            <div className="row">
                <div className="col-lg-3">
                    <div className="side-search-area">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="age_from">Age from</label>
                                    <input
                                        type="number"
                                        name="age_from"
                                        id="age_from"
                                        value={formData.age_from}
                                        onChange={handleChange}
                                        className="form-control"
                                        min="1"
                                        step="1"
                                        placeholder="Age from"
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="age_to">To</label>
                                    <input
                                        type="number"
                                        name="age_to"
                                        id="age_to"
                                        value={formData.age_to}
                                        onChange={handleChange}
                                        className="form-control"
                                        min="1"
                                        step="1"
                                        placeholder="Age to"
                                    />
                                </div>
                                {/* <div className="col-md-12 form-group">
                                    <label htmlFor="member_id">Member ID</label>
                                    <input
                                        type="text"
                                        name="member_id"
                                        id="member_id"
                                        value={formData.member_id}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Member ID"
                                    />
                                </div> */}
                                <div className="col-md-12 form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select
                                        className="form-select"
                                        name="gender"
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        aria-label="Gender"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="marital_status">Marital Status</label>
                                    <select
                                        name="marital_status"
                                        id="marital_status"
                                        className="form-select"
                                        value={formData.marital_status}
                                        onChange={handleChange}
                                        aria-label="Marital status"
                                    >
                                        <option value="">Select Marital Status</option>
                                        <option value="5">Married</option>
                                        <option value="4">Never Married</option>
                                        <option value="3">Divorced</option>
                                        <option value="2">Separated</option>
                                        <option value="1">Widowed</option>
                                    </select>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label htmlFor="religion-dds">Select Religion</label>
                                    <select
                                        name="religion"
                                        id="religion-dds"
                                        className="form-select"
                                        value={formData.religion}
                                        onChange={handleChange}
                                        aria-label="Religion"
                                    >
                                        <option value="">Select Religion</option>
                                        <option value="6">Spiritual</option>
                                        <option value="5">Buddhist</option>
                                        <option value="4">Christian</option>
                                        <option value="3">Hindu</option>
                                        <option value="1">Muslim</option>
                                    </select>
                                </div>
                               
                                <div className="col-12">
                                    <button type="submit" className="btn-flower">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
          <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="member-box d-md-flex">
                            <div className="img-box">
                                <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="member's image" />
                            </div>
                            <div>
                                
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                               
                                    <h4 className="name">{formData.name}</h4>
                               
                                <span className="member-id">Member ID: <span>{formData.memberId}</span></span>
                                <div className="row g-2 mt-3 member-info">
                                    <div className="col-6">
                                        
                                            <input type="text" name="age" value={formData.age} onChange={handleChange} />
                                       
                                            <span>age : {formData.age}</span>
                                        
                                    </div>
                                    <div className="col-6">
                                       
                                            <input type="text" name="height" value={formData.height} onChange={handleChange} />
                                        
                                            <span>height : {formData.height}</span>
                                       
                                    </div>
                                    <div className="col-6">
                                       
                                            <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
                                      
                                            <span>religion : {formData.religion}</span>
                                      
                                    </div>
                                    <div className="col-6">
                                        
                                            <input type="text" name="caste" value={formData.caste} onChange={handleChange} />
                                       
                                            <span>caste : {formData.caste}</span>
                                       
                                    </div>
                                    <div className="col-6">
                                        
                                            <input type="text" name="location" value={formData.location} onChange={handleChange} />
                                       
                                            <span>location : {formData.location}</span>
                                      
                                    </div>
                                    <div className="col-6">
                                        
                                            <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
                                       
                                            <span>marital status : {formData.maritalStatus}</span>
                                       
                                    </div>
                                </div>
                                {/* <div className="button-group">
                                    {isEditing ? (
                                        <button type="button" onClick={handleSaveClick}>Save</button>
                                    ) : (
                                        <button type="button" onClick={handleEditClick} style={{ backgroundColor: 'pink', color: 'white' }}>
                                        Edit Profile
                                    </button>
                                    
                                    )}
                                </div> */}
                            </div>
                            <span className="tag">Premium</span>
                        </div>
                    </div>
                </div>
            </div> 
                    {/* Report Modal */}
                    {showReportModal && (
                        <div className="modal fade modal-with-form" id="reportModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="reportModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="reportModalLabel">Report Member!</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowReportModal(false)}></button>
                                    </div>
                                    <form action="" method="post" className="reportSubmit">
                                        <input type="hidden" name="_token" value="BIU3Mfxlzq6dvXpZAbAZ0vpO7nPOftB1hFidEqo4" />
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="reason">Report Reason</label>
                                                <textarea name="reason" id="reason" cols="30" rows="4" className="form-control" required placeholder="type here..."></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn-flower btn1" data-bs-dismiss="modal" onClick={() => setShowReportModal(false)}>Cancel</button>
                                            <button type="submit" className="btn-flower btn2">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
        
                    {/* Message Modal */}
                    {showMessageModal && (
                        <div className="modal fade modal-with-form" id="messageModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="reportModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="reportModalLabel">Send Message</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowMessageModal(false)}></button>
                                    </div>
                                    <form action="" method="post" className="messageSend">
                                        <input type="hidden" name="_token" value="BIU3Mfxlzq6dvXpZAbAZ0vpO7nPOftB1hFidEqo4" />
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" id="message" cols="30" rows="4" className="form-control" required placeholder="type here..."></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn-flower btn1" data-bs-dismiss="modal" onClick={() => setShowMessageModal(false)}>Cancel</button>
                                            <button type="submit" className="btn-flower btn2">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
        
                    {/* Goto Purchase Plan Modal */}
                    <div id="gotoPlanModal" className="modal fade modal-with-form" data-bs-backdrop="static" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content form-block">
                                <div className="modal-body">
                                    <div className="form-group">
                                        <h4 className="text-green text-center py-4 mb-0">Please Upgrade Your Package</h4>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn-flower2 btn1" data-bs-dismiss="modal">Close</button>
                                    <a href="https://wedding-wonders.bugfinder.net/plan">
                                        <button type="submit" className="btn-flower2 btn2 planPurchaseButton">Purchase Package</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
         </div>
         </div>
        </div>
        </div>
     );
 };
 export default SearchForm;           