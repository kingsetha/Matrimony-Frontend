import React from "react";
// import Member from "././member";

function Hero() {
  return (
    <div className="home-section">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid" id="pushNotificationArea">
          {/* <a className="navbar-brand" href="">
            <img src="" alt="Wedding Wonders" />
          </a> */}
          <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fal fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/login">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">About</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="">Story</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Package</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/members">Members</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="">Blog</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="">Contact</a>
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
                    <a className="dropdown-item align-items-center px-3" href="/login">
                      <i className="far fa-sign-in"></i>
                      <p>Login</p>
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item align-items-center px-3" href="/adminlogin">
                      <i className="far fa-sign-in"></i>
                      <p>Admin Login</p>
                    </a>
                  </li> */}
                  <li>
                    <a className="dropdown-item align-items-center px-3" href="/register">
                      <i className="far fa-user-plus"></i>
                      <p>Register</p>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            {/* <button data-bs-toggle="modal" data-bs-target="#searchModal">
              <i className="fal fa-search"></i>
            </button> */}
          </span>
        </div>
      </nav>
      
      <section class="home-section">
         <div class="overlay h-100">
            <div class="container h-100">
               <div class="row h-100 align-items-center justify-content-around">
                  <div class="col d-flex justify-content-center">
                     <div class="text-box w-75">
                        <h1>Marriages: From Heaven to Your Screen!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur elit.Id cupiditate repudiandae blanditiis ullam natus quas explicabo, totam tempore iste quia qui odit optio autem laudantium.</p>
                        <a href="">
                            <button class="btn-flower">
                            discover more                        </button></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-text">
                <h2>Latest Posts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit id cupiditate. Repudiandae blanditiis ullam natus quas explicabo</p>
              </div>
            </div>
          </div>
          <div className="row gy-5 g-md-5">
            <div className="col-lg-4 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src="https://wedding-wonders.bugfinder.net/assets/uploads/blog/thumb_6342cd9ad5fee1665322394.jpg"
                    alt="blog image"
                  />
                </div>
                <div className="text-box">
                  <h4>Samarjit &amp; Ivani</h4>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was...</p>
                  <a href="" className="read-more">Read more...</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src="https://wedding-wonders.bugfinder.net/assets/uploads/blog/thumb_6342ce253b6591665322533.jpg"
                    alt="blog image"
                  />
                </div>
                <div className="text-box">
                  <h4>It seems surreal to find som...</h4>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was...</p>
                  <a href="" className="read-more">Read more...</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    className="img-fluid"
                    src="https://wedding-wonders.bugfinder.net/assets/uploads/blog/thumb_6342cde3d83421665322467.jpg"
                    alt="blog image"
                  />
                </div>
                <div className="text-box">
                  <h4>Dipesh Dayama weds Divya Cha...</h4>
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was...</p>
                  <a href="" className="read-more">Read more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="container">
          <div className="row gy-5 g-md-5">
            <div className="col-lg-3 col-md-6">
              <div className="box box1">
                {/* <a className="navbar-brand" href="">
                  <img src="https://wedding-wonders.bugfinder.net/assets/uploads/logo/logo.png" alt="Wedding Wonders" />
                </a> */}
                <p>7 Green Lake Street, Crawfordsville, IN 47933</p>
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
                <h5>Useful Links</h5>
                <ul className="links">
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Package</a></li>
                  <li><a href="">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h5>Quick Search</h5>
                <ul className="links">
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h5>Subscribe Newsletter</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                <form className="subscribe-form" action="" method="post">
                  <input type="hidden" name="_token" value="P8ANTBgQLSXEnfCDrjRJXYByviEuZR5fPowBYhZK" />
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
                  Copyright &copy; 2024 <a href="">Matrimony</a> All Rights Reserved.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <img src="https://wedding-wonders.bugfinder.net/assets/uploads/content/63425fd5595131665294293.png" alt="Footer image" className="flower" />
      </footer>
    </div>
  );
}

export default Hero;
