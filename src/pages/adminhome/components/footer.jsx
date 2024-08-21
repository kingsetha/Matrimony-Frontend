import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row gy-5 g-md-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="box box1">
                            {/* <a className="navbar-brand" href="">
                                <img src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png" alt="Wedding Wonders" />
                            </a> */}
                            <p><span>7 Green Lake Street </span><span>Crawfordsville, IN 47933</span></p>
                            <p>Email: info@metrimony.com</p>
                            <p>Phone: +1 800 123 456 789</p>
                            <div className="social-links">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box">
                            <h5>useful links</h5>
                            <ul className="links">
                                <li><a href="">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/plan">Package</a></li>
                                <li><a href="/blog">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box">
                            <h5>quick search</h5>
                            <ul className="links">
                                <li><a href="">faq</a></li>
                                <li><a href="">contact</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="box">
                            <h5>SUBSCRIBE NEWSLETTER</h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                            <form className="subscribe-form" action="" method="post">
                                <input type="hidden" name="_token" value="8ErWxXrIHIkXRCcpDcnvV3s9YecKZp1fUAias7EL" />
                                <div className="input-group">
                                    <input name="email" type="email" placeholder="Enter email" className="form-control" />
                                    <button type="submit"><i className="fal fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copyright">
                                Copyright © 2024 <a href="">Wedding Wonders</a> All Rights Reserved.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <span></span>
            <img
                src="https://wedding-wonders.bugfinder.net/assets/uploads/content/63425fd5595131665294293.png"
                alt="Footer image"
                className="flower"
            />
        </footer>
    );
};

export default Footer;
