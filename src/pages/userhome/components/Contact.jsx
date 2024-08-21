// import React from 'react';

// const SearchModal = () => {
//   return (
//     <div>
//       {/* Search Modal */}
//       <div className="modal fade search-modal" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-xl">
//           <div className="modal-content">
//             <div className="modal-body p-0">
//               <form action="https://wedding-wonders.bugfinder.net/search/member" method="GET">
//                 <div className="row g-4">
//                   <div className="col-lg-2">
//                     <input type="number" name="age_from" id="age_from" className="form-control" min="1" step="1" placeholder="age from" />
//                   </div>
//                   <div className="col-lg-2">
//                     <input type="number" name="age_to" id="age_to" className="form-control" min="1" step="1" placeholder="age to" />
//                   </div>
//                   <div className="col-lg-2">
//                     <select name="religion" className="form-select" aria-label="religion">
//                       <option value="" selected>Select Religion</option>
//                       <option value="6">Spritual</option>
//                       <option value="5">Buddhist</option>
//                       <option value="4">Christian</option>
//                       <option value="3">Hindu</option>
//                       <option value="1">Muslim</option>
//                     </select>
//                   </div>
//                   <div className="col-lg-2">
//                     <select name="marital_status" id="marital_status" className="form-select" aria-label="Maritial status">
//                       <option value="" selected>Maritial Status</option>
//                       <option value="5">Married</option>
//                       <option value="4">Never Married</option>
//                       <option value="3">Divorced</option>
//                       <option value="2">Separated</option>
//                       <option value="1">Widowed</option>
//                     </select>
//                   </div>
//                   <div className="col-lg-2">
//                     <select className="form-select" name="gender" id="gender" aria-label="gender">
//                       <option value="" selected>Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                     </select>
//                   </div>
//                   <div className="col-lg-2">
//                     <button type="submit" className="btn-flower">Search</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Preloader */}
//       <div id="preloader">
//         <img src="https://wedding-wonders.bugfinder.net/assets/themes/deepblue/images/love.gif" alt="loader" className="loader" />
//       </div>

//       {/* Arrow Up */}
//       <a href="#" className="scroll-up">
//         <i className="fal fa-chevron-double-up"></i>
//       </a>

//       {/* Banner */}
//       <div className="banner">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col">
//                 <div className="header-text">
//                   <h2>Active Members</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Members Section */}
//       <section className="members-section">
//         <div className="container">
//           <div className="row gy-5 g-md-4">
//             {/* Search Sidebar */}
//             <div className="col-lg-3">
//               <div className="side-search-area">
//                 <form action="https://wedding-wonders.bugfinder.net/search/member" method="GET">
//                   <div className="row g-3">
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="age_from">Age from</label>
//                       <input type="number" name="age_from" id="age_from" className="form-control" min="1" step="1" placeholder="age from" />
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="age_to">To</label>
//                       <input type="number" name="age_to" id="age_to" className="form-control" min="1" step="1" placeholder="age to" />
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="member_id">Member ID</label>
//                       <input type="text" name="member_id" id="member_id" className="form-control" placeholder="Member ID" />
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="gender">Gender</label>
//                       <select className="form-select" name="gender" id="gender" aria-label="gender">
//                         <option value="" selected>Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                       </select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="marital_status">Maritial Status</label>
//                       <select name="marital_status" id="marital_status" className="form-select" aria-label="Maritial status">
//                         <option value="" selected>Select Maritial Status</option>
//                         <option value="5">Married</option>
//                         <option value="4">Never Married</option>
//                         <option value="3">Divorced</option>
//                         <option value="2">Separated</option>
//                         <option value="1">Widowed</option>
//                       </select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="religion-dds">Select Religion</label>
//                       <select name="religion" id="religion-dds" className="form-select" aria-label="religion">
//                         <option value="" selected>Select Religion</option>
//                         <option value="6">Spritual</option>
//                         <option value="5">Buddhist</option>
//                         <option value="4">Christian</option>
//                         <option value="3">Hindu</option>
//                         <option value="1">Muslim</option>
//                       </select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="caste-dds">Select Caste</label>
//                       <select name="caste" id="caste-dds" className="form-select"></select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="mother_tongue">Mother Tongue</label>
//                       <select name="mother_tongue" id="mother_tongue" className="form-select" aria-label="Mother Tongue">
//                         <option value="" selected>Select Mother Tongue</option>
//                         <option value="Urdu">Urdu</option>
//                         <option value="Uzbek">Uzbek</option>
//                         <option value="Venda">Venda</option>
//                         <option value="Vietnamese">Vietnamese</option>
//                         <option value="Volapük">Volapük</option>
//                         <option value="Walloon">Walloon</option>
//                         <option value="Wolof">Wolof</option>
//                         <option value="Xhosa">Xhosa</option>
//                         <option value="Yiddish">Yiddish</option>
//                         <option value="Yoruba">Yoruba</option>
//                         <option value="Zhuang, Chuang">Zhuang, Chuang</option>
//                         <option value="Chinese">Chinese</option>
//                         <option value="Zulu">Zulu</option>
//                       </select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="country-dds">Select Country</label>
//                       <select name="country" id="country-dds" className="form-select" aria-label="Select Country">
//                         <option value="" selected>Select Country</option>
//                         <option value="1">Afghanistan</option>
//                         <option value="2">Albania</option>
//                         <option value="3">Algeria</option>
//                         <option value="4">American Samoa</option>
//                         <option value="5">Andorra</option>
//                       </select>
//                     </div>
//                     <div className="col-md-12 form-group">
//                       <label htmlFor="state-dds">Select State</label>
//                       <select name="state" id="state-dds" className="form-control"></select>
//                       </div>
//                       <div className="col-md-12 form-group">
//             <label htmlFor="city-dds">Select City</label>
//             <select name="city" id="city-dds" className="form-control"></select>
//         </div>
//         <div className="col-md-12 form-group">
//             <label htmlFor="max_height">Max Height (In Feet)</label>
//             <input type="number" name="max_height" id="max_height" className="form-control" min="1" placeholder="Max Height"/>
//         </div>
//         <div className="col-md-12 form-group">
//             <label htmlFor="min_height">Min Height (In Feet)</label>
//             <input type="number" name="min_height" id="min_height" className="form-control" min="1" placeholder="Min Height"/>
//         </div>
//         <div className="col-12">
//             <button type="submit" className="btn-flower">Search</button>
//         </div>
//         <div className="col-lg-9">
//             <div className="member-box d-md-flex">
//                 <div className="img-box">
//                     <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" alt="member post image"/>
//                 </div>
//                 <div>
//                     <h5 className="name">Demo1 User</h5>
//                     <span className="member-id">Member ID : <span>DE96501720</span></span>
//                     <div className="row g-2 mt-3 member-info">
//                         <div className="col-6"><span>age : 35 years</span></div>
//                         <div className="col-6"><span>height : 5.9 Feet</span></div>
//                         <div className="col-6"><span>religion : Muslim</span></div>
//                         <div className="col-6"><span>caste : Sunni</span></div>
//                         <div className="col-6"><span>location : Switzerland</span></div>
//                         <div className="col-6"><span>maritial status : Never Married</span></div>
//                     </div>
//                     <div className="button-group">
//                         <a href="https://wedding-wonders.bugfinder.net/user/member/profile/1">
//                             <i className="fal fa-user"></i><span>Profile</span>
//                         </a>
//                         <a href="javascript:void(0)" id="0" className="update_interest" data-memberid="1">
//                             <i className="fal fa-heart"></i><span className="0interest">Make Interest</span>
//                         </a>
//                         <a href="javascript:void(0)" id="0" className="update_shortlist" data-memberid="1">
//                             <i className="fal fa-list"></i><span className="0">Shortlist</span>
//                         </a>
//                         <a href="javascript:void(0)" id="0" className="ignore" data-memberid="1">
//                             <span className="0ignore"><i className="fal fa-ban"></i> Ignore</span>
//                         </a>
//                         <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#gotoPlanModal">
//                             <i className="fal fa-user"></i><span>Report</span>
//                         </a>
//                     </div>
//                 </div>
//                 <span className="tag">Premium</span>
//             </div>
//         </div>
//         <div id="gotoPlanModal" className="modal fade modal-with-form" data-bs-backdrop="static" tabIndex="-1" aria-hidden="true">
//             <div className="modal-dialog modal-dialog-centered">
//                 {/* Modal content goes here */}
//             </div>
//         </div>
//         </div>
//    {/* Message Modal */}
//    <div className="modal fade modal-with-form" id="messageModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="reportModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="reportModalLabel">Send Message</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <form action="" method="post" className="messageSend">
//                             <input type="hidden" name="_token" value="XuWvfZhSm1rDkUl5ZHSiYdeIXXgV0zqwc2I7xyvf"/>
//                             <div className="modal-body">
//                                 <div className="form-group">
//                                     <label htmlFor="message">Message</label>
//                                     <textarea name="message" id="message" cols="30" rows="4" className="form-control" required placeholder="type here..."></textarea>
//                                 </div>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn-flower btn1" data-bs-dismiss="modal">Cancel</button>
//                                 <button type="submit" className="btn-flower btn2">Send</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//     );
// };
// export default SearchModal;
import React, { useState } from 'react';

const MemberProfile = () => {
    const [showReportModal, setShowReportModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);

    return (
        <div className="col-lg-9">
          
            <div className="member-box d-md-flex">
                <div className="img-box">
                    <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" alt="member post image" />
                </div>
                <div>
                    <h5 className="name">Demo1 User</h5>
                    <span className="member-id">Member ID : <span>DE96501720</span></span>
                    <div className="row g-2 mt-3 member-info">
                        <div className="col-6"><span>age : 35 years</span></div>
                        <div className="col-6"><span>height : 5.9 Feet</span></div>
                        <div className="col-6"><span>religion : Muslim</span></div>
                        <div className="col-6"><span>caste : Sunni</span></div>
                        <div className="col-6"><span>location : Switzerland</span></div>
                        <div className="col-6"><span>maritial status : Never Married</span></div>
                    </div>
                    <div className="button-group">
                        <a href="https://wedding-wonders.bugfinder.net/user/member/profile/1">
                            <i className="fal fa-user"></i>
                            <span>Profile</span>
                        </a>
                        <a href="javascript:void(0)" id="0" className="update_interest" data-memberid="1">
                            <i className="fal fa-heart"></i>
                            <span className="0interest">Make Interest</span>
                        </a>
                        <a href="javascript:void(0)" id="0" className="update_shortlist" data-memberid="1">
                            <i className="fal fa-list"></i>
                            <span className="0">Shortlist</span>
                        </a>
                        <a href="javascript:void(0)" id="0" className="ignore" data-memberid="1">
                            <span className="0ignore"><i className="fal fa-ban"></i> Ignore</span>
                        </a>
                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#gotoPlanModal">
                            <i className="fal fa-user"></i>
                            <span>Report</span>
                        </a>
                    </div>
                </div>
                <span className="tag">Premium</span>
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
    );
};

export default MemberProfile;
