// // import React, { useState, useEffect } from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './App.css';

// // const App = () => {
// //   const [contacts, setContacts] = useState([]);
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [messages, setMessages] = useState([]);
// //   const [message, setMessage] = useState('');
// //   const [file, setFile] = useState(null);
// //   const [onlineFriends, setOnlineFriends] = useState([]);
// //   const [typingFriend, setTypingFriend] = useState({});
// //   const [photo, setPhoto] = useState('');
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     // Fetch initial data, e.g., contacts and messages
// //   }, []);

// //   const handleFileUpload = (e) => {
// //     const file = e.target.files[0];
// //     setFile(file);
// //     setPhoto(URL.createObjectURL(file));
// //   };

// //   const removeImage = () => {
// //     setFile(null);
// //     setPhoto('');
// //   };

// //   const sendMessage = () => {
// //     // Logic to send the message
// //   };

// //   const selectContact = (contact) => {
// //     setSelectedContact(contact);
// //     // Fetch messages for the selected contact
// //   };

// //   const viewProfile = (id) => {
// //     // Logic to view profile
// //   };

// //   return (
// //     <div>
// //       {/* Search Modal */}
// //       <div className="modal fade search-modal" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //         <div className="modal-dialog modal-dialog-centered modal-xl">
// //           <div className="modal-content">
// //             <div className="modal-body p-0">
// //               <form action="https://wedding-wonders.bugfinder.net/search/member" method="GET">
// //                 <div className="row g-4">
// //                   <div className="col-lg-2">
// //                     <input type="number" name="age_from" id="age_from" className="form-control" min="1" step="1" placeholder="age from" />
// //                   </div>
// //                   <div className="col-lg-2">
// //                     <input type="number" name="age_to" id="age_to" className="form-control" min="1" step="1" placeholder="age to" />
// //                   </div>
// //                   <div className="col-lg-2">
// //                     <select name="religion" className="form-select" aria-label="religion">
// //                       <option value="" selected>Select Religion</option>
// //                       <option value="6">Spiritual</option>
// //                       <option value="5">Buddhist</option>
// //                       <option value="4">Christian</option>
// //                       <option value="3">Hindu</option>
// //                       <option value="1">Muslim</option>
// //                     </select>
// //                   </div>
// //                   <div className="col-lg-2">
// //                     <select name="marital_status" id="marital_status" className="form-select" aria-label="Marital status">
// //                       <option value="" selected>Marital Status</option>
// //                       <option value="5">Married</option>
// //                       <option value="4">Never Married</option>
// //                       <option value="3">Divorced</option>
// //                       <option value="2">Separated</option>
// //                       <option value="1">Widowed</option>
// //                     </select>
// //                   </div>
// //                   <div className="col-lg-2">
// //                     <select className="form-select" name="gender" id="gender" aria-label="gender">
// //                       <option value="" selected>Select Gender</option>
// //                       <option value="Male">Male</option>
// //                       <option value="Female">Female</option>
// //                     </select>
// //                   </div>
// //                   <div className="col-lg-2">
// //                     <button type="submit" className="btn-flower">Search</button>
// //                   </div>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Banner */}
// //       <div className="banner">
// //         <div className="overlay">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col">
// //                 <div className="header-text">
// //                   <h2>Messages</h2>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <section className="dashboard-section" id="messenger">
// //         <div className="container">
// //           <div className="row gy-5 g-lg-4">
// //             {/* Sidebar */}
// //             <div className="col-lg-3">
// //               <div className="sidebar">
// //                 <div className="profile">
// //                   <img src="https://wedding-wonders.bugfinder.net/assets/uploads/users/65f9c7c652b671710868422.jpeg" className="img-fluid" alt="user profile" />
// //                   <h5>demouser</h5>
// //                 </div>
// //                 {/* <ul>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/dashboard"><i className="fal fa-home-alt"></i>dashboard</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/gallery"><i className="fal fa-image"></i>gallery</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/story"><i className="fal fa-calendar-star"></i>Manage story</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/my-plans"><i className="far fa-cart-plus"></i>Purchased Packages</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/fund-history"><i className="fas fa-money-check-alt"></i>Payment History</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/shortlist/show"><i className="fal fa-list-ul"></i>shortlist</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/interest/show"><i className="fal fa-heart"></i>My Interest</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/ignore/members/show"><i className="fal fa-ban"></i>Ignored List</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/matched/profile"><i className="fas fa-handshake"></i>Matched Profile</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/profile"><i className="far fa-user-cog"></i>Manage Profile</a></li>
// //                   <li className="active"><a href="https://wedding-wonders.bugfinder.net/user/messenger"><i className="fal fa-envelope"></i>Messages</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/ticket"><i className="fas fa-user-headset"></i>Support Ticket</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/change/password"><i className="fas fa-lock-alt"></i>Change password</a></li>
// //                   <li><a href="https://wedding-wonders.bugfinder.net/user/twostep-security"><i className="fas fa-user-lock"></i>2FA Security</a></li>
// //                   <li>
// //                     <a href="https://wedding-wonders.bugfinder.net/logout" onClick={(e) => {
// //                       e.preventDefault();
// //                       document.getElementById('userLogout-form').submit();
// //                     }}>
// //                       <i className="far fa-power-off"></i>Logout
// //                     </a>
// //                     <form id="userLogout-form" action="https://wedding-wonders.bugfinder.net/logout" method="POST" className="d-none">
// //                       <input type="hidden" name="_token" value="cPJrk6cIw31FX7OhRgO8ykC3V9n8BfiUu7Wj2BIY" />
// //                     </form>
// //                   </li>
// //                 </ul> */}
// //               </div>
// //             </div>

// //             {/* Main Messaging Area */}
// //             <div className="col-lg-9">
// //               <div className="dashboard-content">
// //                 <div className="row">
// //                   <div className="col-12">
// //                     <div className="dashboard-title">
// //                       <h5>Messages</h5>
// //                     </div>

// //                     {/* Message List */}
// //                     <div className="message-wrapper">
// //                       <div className="row g-md-0">
// //                         <div className="col-md-4">
// //                           <div className="messages-box">
// //                             {contacts.map((contact) => (
// //                               <div
// //                                 key={contact.id}
// //                                 className={`message ${contact.id === selectedContact?.id ? 'new message' : ''}`}
// //                                 onClick={() => selectContact(contact)}
// //                               >
// //                                 <div className={`img-box position-relative ${onlineFriends.find(user => user.id === contact.id) ? 'online' : ''}`}>
// //                                   <img src={contact.avatar} alt={contact.name} className="img-fluid" />
// //                                   {onlineFriends.find(user => user.id === contact.id) && <div className="online-indicator"></div>}
// //                                 </div>
// //                                 <div className="details">
// //                                   <h5>{contact.name}</h5>
// //                                   <p>{contact.lastMessage}</p>
// //                                 </div>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         {/* Message View */}
// //                         <div className="col-md-8">
// //                           {selectedContact ? (
// //                             <div className="message-view">
// //                               <div className="message-header">
// //                                 <div className="img-box">
// //                                   <img src={selectedContact.avatar} alt={selectedContact.name} className="img-fluid" />
// //                                 </div>
// //                                 <div className="details">
// //                                   <h5>{selectedContact.name}</h5>
// //                                   <p>{selectedContact.status}</p>
// //                                 </div>
// //                               </div>
// //                               <div className="message-body">
// //                                 {messages.map((msg, index) => (
// //                                   <div key={index} className={`message-item ${msg.from === 'me' ? 'me' : 'other'}`}>
// //                                     <p>{msg.text}</p>
// //                                   </div>
// //                                 ))}
// //                                 {file && (
// //                                   <div className="message-item">
// //                                     <img src={photo} alt="attachment" className="attachment-preview" />
// //                                     <button type="button" className="btn-remove" onClick={removeImage}>Remove</button>
// //                                   </div>
// //                                 )}
// //                               </div>
// //                               <div className="message-footer">
// //                                 <input
// //                                   type="text"
// //                                   value={message}
// //                                   onChange={(e) => setMessage(e.target.value)}
// //                                   placeholder="Type a message"
// //                                 />
// //                                 <input type="file" onChange={handleFileUpload} />
// //                                 <button type="button" onClick={sendMessage}>Send</button>
// //                               </div>
// //                               {typingFriend.name && <div className="typing-indicator">{typingFriend.name} is typing...</div>}
// //                             </div>
// //                           ) : (
// //                             <div className="no-message-selected">Select a contact to start messaging</div>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState, useEffect } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './App.css';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const [file, setFile] = useState(null);
//   const [photo, setPhoto] = useState('');
//   const [typingFriend, setTypingFriend] = useState({});
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     // Fetch initial data for contacts and messages
//     // Example: fetchContacts(); fetchMessages();
//   }, []);

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     setFile(file);
//     setPhoto(URL.createObjectURL(file));
//   };

//   const removeImage = () => {
//     setFile(null);
//     setPhoto('');
//   };

//   const sendMessage = () => {
//     // Logic to send message
//     // Example: sendMessageToServer(message, file);
//     setMessage('');
//     setFile(null);
//     setPhoto('');
//   };

//   const selectContact = (contact) => {
//     setSelectedContact(contact);
//     // Fetch messages for the selected contact
//     // Example: fetchMessagesForContact(contact.id);
//   };

//   const viewProfile = (id) => {
//     // Logic to view profile
//     // Example: window.open(`/profile/${id}`, '_blank');
//   };

//   return (
//     <div className="container">
//       <section className="dashboard-section" id="messenger">
//         <div className="row gy-5 g-lg-4">
//           <div className="col-lg-9">
//             <div className="dashboard-content">
//               <div className="row">
//                 <div className="col-12">
//                   <div className="dashboard-title">
//                     <h5>Messages</h5>
//                   </div>

//                   <div className="message-wrapper">
//                     <div className="row g-md-0">
//                       <div className="col-md-4">
//                         <div className="messages-box">
//                           {contacts.length > 0 ? (
//                             contacts.map((contact) => (
//                               <div
//                                 key={contact.id}
//                                 className={`message ${contact.id === selectedContact?.id ? 'new' : ''}`}
//                                 onClick={() => selectContact(contact)}
//                               >
//                                 <div
//                                   className={`img-box position-relative ${contact.isOnline ? 'active' : ''}`}
//                                 >
//                                   <img src={contact.image} alt={contact.firstname} className="img-fluid" />
//                                   {contact.unread && (
//                                     <span className="unread position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
//                                       {contact.unread}
//                                     </span>
//                                   )}
//                                 </div>
//                                 <div className="text-box">
//                                   <a href="#!">
//                                     <p className="name">
//                                       {`${contact.firstname} ${contact.lastname}`}
//                                       <span className="time">
//                                         {contact.isOnline && contact.chat_last_seen ? contact.chat_last_seen : ''}
//                                       </span>
//                                       {!contact.isOnline && (
//                                         <span className="time">{contact.chat_last_seen}</span>
//                                       )}
//                                     </p>
//                                     <p>
//                                       {contact.chat_last_message.message
//                                         ? contact.chat_last_message.message
//                                         : 'Sent an image'}
//                                     </p>
//                                   </a>
//                                 </div>
//                               </div>
//                             ))
//                           ) : (
//                             <div className="message justify-content-center">
//                               <p className="py-5 text-danger font14">No member available for chat.</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="col-md-8">
//                         <div className="inbox-wrapper">
//                           {/* Top Bar */}
//                           <div className="top-bar">
//                             {selectedContact ? (
//                               <>
//                                 <div>
//                                   <img src={selectedContact.image} alt={selectedContact.firstname} className="user img-fluid" />
//                                   <span className="name">{`${selectedContact.firstname} ${selectedContact.lastname}`}</span>
//                                 </div>
//                                 <div>
//                                   <button className="info-btn">
//                                     <i className="fal fa-info-circle"></i>
//                                   </button>
//                                 </div>
//                               </>
//                             ) : (
//                               <div>
//                                 <button className="info-btn">
//                                   <i className="fas fa-comments-alt"></i>
//                                 </button>
//                                 <span className="name">Wedding Wonders Messenger</span>
//                               </div>
//                             )}
//                           </div>

//                           {/* Chats */}
//                           <div className="chats">
//                             {selectedContact ? (
//                               <>
//                                 {messages.map((msg) => (
//                                   <div
//                                     key={msg.id}
//                                     className={`chat-box ${msg.receiver_id === selectedContact.id ? 'this-side' : 'opposite-side'}`}
//                                   >
//                                     {msg.receiver_id !== selectedContact.id && (
//                                       <div className="img">
//                                         <img src={msg.sender_image} alt="sender" className="img-fluid" />
//                                       </div>
//                                     )}
//                                     <div className="text-wrapper">
//                                       {msg.message && <div className="text"><p>{msg.message}</p></div>}
//                                       {msg.fileImage && (
//                                         <div className="fileimg">
//                                           <a href={msg.fileImage} data-fancybox="gallery">
//                                             <img src={msg.fileImage} width="50px" height="50px" alt="attachment" />
//                                           </a>
//                                         </div>
//                                       )}
//                                       <span className="time">{msg.sent_at}</span>
//                                     </div>
//                                     {msg.receiver_id === selectedContact.id && (
//                                       <div className="img">
//                                         <img src={msg.sender_image} alt="sender" className="img-fluid" />
//                                       </div>
//                                     )}
//                                   </div>
//                                 ))}

//                                 {typingFriend.fullname && (
//                                   <div className="typing-show">
//                                     <div className="img">
//                                       <img src={selectedContact.image} alt="typing friend" className="img-fluid" />
//                                       <div className="typing is-typing-active">
//                                         <span className="typing__bullet"></span>
//                                         <span className="typing__bullet"></span>
//                                         <span className="typing__bullet"></span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 )}
//                               </>
//                             ) : (
//                               <div className="chats d-flex justify-content-center align-items-center">
//                                 <div className="chat-box text-danger font14">
//                                   Please select a member to chat.
//                                 </div>
//                               </div>
//                             )}
//                           </div>

//                           {/* Typing Area */}
//                           {selectedContact && (
//                             <div className="typing-area">
//                               {file && (
//                                 <div className="img-preview">
//                                   <button className="delete" onClick={removeImage}>
//                                     <i className="fal fa-times"></i>
//                                   </button>
//                                   <img id="attachment" src={photo} alt="attachment" className="img-fluid" />
//                                   <div className="img-info">
//                                     <span className="name">{file.name}</span>
//                                     <br />
//                                     <span className="size">{(file.size / 1024).toFixed(2)} KB</span>
//                                   </div>
//                                 </div>
//                               )}

//                               <div className="input-group">
//                                 <button className="upload-img send-file-btn">
//                                   <i className="fal fa-paperclip text-white me-2"></i>
//                                   <input
//                                     className="form-control"
//                                     id="upload"
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleFileUpload}
//                                   />
//                                 </button>
//                                 <textarea
//                                   value={message}
//                                   onChange={(e) => setMessage(e.target.value)}
//                                   onKeyDown={(e) => {
//                                     if (e.key === 'Enter') {
//                                       e.preventDefault();
//                                       sendMessage();
//                                     }
//                                   }}
//                                   cols="30"
//                                   rows="10"
//                                   className="form-control"
//                                   placeholder="Type your message..."
//                                 ></textarea>
//                                 <button onClick={sendMessage} className="submit-btn text-white">
//                                   <i className="fal fa-paper-plane"></i>
//                                 </button>
//                               </div>
//                               {errors.file && <small className="text-danger">{errors.file[0]}</small>}
//                             </div>
//                           )}

//                           {/* Side Profile */}
//                           {selectedContact && (
//                             <div className="side-profile" id="sideProfile">
//                               <button id="closeProfile">
//                                 <i className="fal fa-times"></i>
//                               </button>
//                               <div className="img-box">
//                                 <img src={selectedContact.image} alt="contact" className="img-fluid" />
//                               </div>
//                               <div className="mb-4">
//                                 <h5>{`${selectedContact.firstname} ${selectedContact.lastname}`}</h5>
//                                 <p>Age: {selectedContact.age}</p>
//                                 <p>Height: {selectedContact.height} feet</p>
//                                 <p>Mother Tongue: {selectedContact.mother_tongue}</p>
//                               </div>
//                               <a href={`profile/${selectedContact.id}`} target="_blank" rel="noopener noreferrer">
//                                 <button className="btn-flower2">View Full Profile</button>
//                               </a>
//                             </div>
//                           )}

//                           <audio id="myAudio">
//                             <source src="https://wedding-wonders.bugfinder.net/assets/global/sound.mp3" type="audio/mpeg" />
//                           </audio>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './messaging.css'; // Assuming you have styling for this component

const App = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState('');
  const [typingFriend, setTypingFriend] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchMessages = async (contactId) => {
    try {
      const response = await fetch(`/api/messages/${contactId}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPhoto(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setFile(null);
    setPhoto('');
  };

  const sendMessage = async () => {
    if (message.trim() === '' && !file) return; // Prevent sending empty messages

    const formData = new FormData();
    formData.append('message', message);
    if (file) formData.append('file', file);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, data]);
      setMessage('');
      setFile(null);
      setPhoto('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const selectContact = (contact) => {
    setSelectedContact(contact);
    fetchMessages(contact.id);
  };

  const viewProfile = (id) => {
    navigate(`/profile/${id}`); // Navigate to profile page
  };

  return (
    <div className="container">
      <section className="dashboard-section" id="messenger">
        <div className="row gy-5 g-lg-4">
          <div className="col-lg-9">
            <div className="dashboard-content">
              <div className="row">
                <div className="col-12">
                  <div className="dashboard-title">
                    <h5>Messages</h5>
                  </div>

                  <div className="message-wrapper">
                    <div className="row g-md-0">
                      <div className="col-md-4">
                        <div className="messages-box">
                          {contacts.length > 0 ? (
                            contacts.map((contact) => (
                              <div
                                key={contact.id}
                                className={`message ${contact.id === selectedContact?.id ? 'new' : ''}`}
                                onClick={() => selectContact(contact)}
                              >
                                <div
                                  className={`img-box position-relative ${contact.isOnline ? 'active' : ''}`}
                                >
                                  <img src={contact.image} alt={contact.firstname} className="img-fluid" />
                                  {contact.unread && (
                                    <span className="unread position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                      {contact.unread}
                                    </span>
                                  )}
                                </div>
                                <div className="text-box">
                                  <a href="#!" onClick={() => selectContact(contact)}>
                                    <p className="name">
                                      {`${contact.firstname} ${contact.lastname}`}
                                      <span className="time">
                                        {contact.isOnline && contact.chat_last_seen ? contact.chat_last_seen : ''}
                                      </span>
                                      {!contact.isOnline && (
                                        <span className="time">{contact.chat_last_seen}</span>
                                      )}
                                    </p>
                                    <p>
                                      {contact.chat_last_message.message
                                        ? contact.chat_last_message.message
                                        : 'Sent an image'}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="message justify-content-center">
                              <p className="py-5 text-danger font14">No member available for chat.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="inbox-wrapper">
                          {/* Top Bar */}
                          <div className="top-bar">
                            {selectedContact ? (
                              <>
                                <div>
                                  <img src={selectedContact.image} alt={selectedContact.firstname} className="user img-fluid" />
                                  <span className="name">{`${selectedContact.firstname} ${selectedContact.lastname}`}</span>
                                </div>
                                <div>
                                  <button className="info-btn">
                                    <i className="fal fa-info-circle"></i>
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div>
                                <button className="info-btn">
                                  <i className="fas fa-comments-alt"></i>
                                </button>
                                <span className="name">Wedding Wonders Messenger</span>
                              </div>
                            )}
                          </div>

                          {/* Chats */}
                          <div className="chats">
                            {selectedContact ? (
                              <>
                                {messages.map((msg) => (
                                  <div
                                    key={msg.id}
                                    className={`chat-box ${msg.receiver_id === selectedContact.id ? 'this-side' : 'opposite-side'}`}
                                  >
                                    {msg.receiver_id !== selectedContact.id && (
                                      <div className="img">
                                        <img src={msg.sender_image} alt="sender" className="img-fluid" />
                                      </div>
                                    )}
                                    <div className="text-wrapper">
                                      {msg.message && <div className="text"><p>{msg.message}</p></div>}
                                      {msg.fileImage && (
                                        <div className="fileimg">
                                          <a href={msg.fileImage} data-fancybox="gallery">
                                            <img src={msg.fileImage} width="50px" height="50px" alt="attachment" />
                                          </a>
                                        </div>
                                      )}
                                      <span className="time">{msg.sent_at}</span>
                                    </div>
                                    {msg.receiver_id === selectedContact.id && (
                                      <div className="img">
                                        <img src={msg.sender_image} alt="sender" className="img-fluid" />
                                      </div>
                                    )}
                                  </div>
                                ))}

                                {typingFriend.fullname && (
                                  <div className="typing-show">
                                    <div className="img">
                                      <img src={selectedContact.image} alt="typing friend" className="img-fluid" />
                                      <div className="typing is-typing-active">
                                        <span className="typing__bullet"></span>
                                        <span className="typing__bullet"></span>
                                        <span className="typing__bullet"></span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="chats d-flex justify-content-center align-items-center">
                                <div className="chat-box text-danger font14">
                                  Please select a member to chat.
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Typing Area */}
                          {selectedContact && (
                            <div className="typing-area">
                              {file && (
                                <div className="img-preview">
                                  <button className="delete" onClick={removeImage}>
                                    <i className="fal fa-times"></i>
                                  </button>
                                  <img id="attachment" src={photo} alt="attachment" className="img-fluid" />
                                  <div className="img-info">
                                    <span className="name">{file.name}</span>
                                    <br />
                                    <span className="size">{(file.size / 1024).toFixed(2)} KB</span>
                                  </div>
                                </div>
                              )}

                              <div className="input-group">
                                <button className="upload-img send-file-btn">
                                  <i className="fal fa-paperclip text-white me-2"></i>
                                  <input
                                    className="form-control"
                                    id="upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                  />
                                </button>
                                <textarea
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      e.preventDefault();
                                      sendMessage();
                                    }
                                  }}
                                  cols="30"
                                  rows="10"
                                  className="form-control"
                                  placeholder="Type your message..."
                                ></textarea>
                                <button onClick={sendMessage} className="submit-btn text-white">
                                  <i className="fal fa-paper-plane"></i>
                                </button>
                              </div>
                              {errors.file && <small className="text-danger">{errors.file[0]}</small>}
                            </div>
                          )}

                          {/* Side Profile */}
                          {selectedContact && (
                            <div className="side-profile" id="sideProfile">
                              <button id="closeProfile">
                                <i className="fal fa-times"></i>
                              </button>
                              <div className="img-box">
                                <img src={selectedContact.image} alt="contact" className="img-fluid" />
                              </div>
                              <div className="mb-4">
                                <h5>{`${selectedContact.firstname} ${selectedContact.lastname}`}</h5>
                                <p>Age: {selectedContact.age}</p>
                                <p>Height: {selectedContact.height} feet</p>
                                <p>Mother Tongue: {selectedContact.mother_tongue}</p>
                              </div>
                              <button className="btn-flower2" onClick={() => viewProfile(selectedContact.id)}>
                                View Full Profile
                              </button>
                            </div>
                          )}

                          <audio id="myAudio">
                            <source src="https://wedding-wonders.bugfinder.net/assets/global/sound.mp3" type="audio/mpeg" />
                          </audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
