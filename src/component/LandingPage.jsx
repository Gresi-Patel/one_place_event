import React from "react";
import bgimg from '../images/bgimg.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import icon1 from '../icons/fb.svg';
import icon2 from '../icons/insta.svg';
import icon3 from '../icons/th.svg';
import icon4 from '../icons/x.svg';
import photo1 from '../images/photo 1.jpg'
import photo2 from '../images/photo 2.jpeg'
import { useNavigate } from 'react-router-dom';
import img21 from '../images/21.jpg'
import "../styles/AboutUs.css"
// import OurServices from "./OurServices";


const LandingPage = () => {
  const navigate = useNavigate();
  const handlePlanNowClick = () => {
    navigate("/plannow");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleDecoratorsClick = () => {
    navigate("/decorators")
  };
  const handleAboutUsClick = () => {
    navigate("/aboutus")
  }

  return (
    <>
      <div className="home-container">
        <div
          className="bgimg d-flex flex-column"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <div className='container landingpage' >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid navstyle">
                <a className="navbar-brand" href="#">OnePlaceEvent</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" >Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleAboutUsClick} >AboutUS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleDecoratorsClick}>Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" onClick={handleLoginClick}>Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" onClick={handleSignUpClick}>Sign Up</a>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-md-12 text-center text-md-center herosection-content-wrapper">
                <h6>Sparking Unforgettable Moments</h6>
                <p className="lead">
                  Connect with trusted event Decorators & make Sparking moments with OnePlaceEvent
                </p>
                {/* <button className="btn btn-light btn-lg" onClick={handlePlanNowClick}>PlanNow</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h1 className="section2heading">Find the best Event decorators & <br className="d-none d-md-block" /> make event sparking and amazing</h1>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="section2desc">
                <p className="lead">
                  EventSpark is a dynamic event management platform designed to simplify the planning, execution, and coordination of events by offering distinct features for users, vendors, and administrators. EventSpark provides users with tools for event creation and planning, including task and timeline management, budget tracking, and vendor booking. Users can browse vendors, leave reviews,
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div>
                <img src={img2} className="img-fluid" alt="Event Planning Illustration" style={{ paddingTop: '20px' }} />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="section3 py-5" style={{ backgroundColor: 'rgba(150, 197, 246, 1)' }}>
        <div className="container section3border p-4">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <h1>Wedding planning</h1>
                    <p className="lead">
                      EventHub is a dynamic event management platform designed to simplify the planning, execution, and coordination of events by offering distinct features for users, vendors, and administrators. EventHub provides users with tools for event creation and planning, including task and timeline management, budget tracking, and vendor booking. Users can browse vendors, leave reviews,
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <img src={img3} className="img-fluid" alt="Wedding Planning" />
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <h1>Birthday planning</h1>
                    <p className="lead">
                      EventHub is a dynamic event management platform designed to simplify the planning, execution, and coordination of events by offering distinct features for users, vendors, and administrators. EventHub provides users with tools for event creation and planning, including task and timeline management, budget tracking, and vendor booking. Users can browse vendors, leave reviews,
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <img src={img4} className="img-fluid" alt="Birthday Planning" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     


      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="section2desc">
                <h1 className="section2heading">decorators</h1>
                <p className="lead">
                  Make your event beautiful with our expert decorators. We design stunning setups with flowers, lights, and themed decorations to match your style. Whether it's a wedding, party, or corporate event, we create the perfect ambiance to make your day special!
                </p>
                <button className="btn btn-light btn-lg section5btn" onClick={handleSignUpClick}>
                  view more
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div>
                <img src={img7} className="img-fluid" alt="Event Planning Illustration" style={{ height: "350px", width: 'auto', paddingTop: '20px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-start">
              <div>
                <img src={img6} className="img-fluid" alt="Event Planning Illustration" style={{ height: "350px", width: 'auto', paddingTop: '20px' }} />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="section2desc">
                <h1 className="section2heading">Caterers</h1>
                <p className="lead">
                  Serve delicious food at your event with our expert caterers. We offer a variety of cuisines to match your taste, whether it's a wedding, party, or corporate event. From buffets to plated meals, we ensure great food and service for your special day!
                </p>
                <button className="btn btn-light btn-lg section5btn" onClick={handleSignUpClick}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="section2desc">
                <h1 className="section2heading">Venues</h1>
                <p className="lead">
                  Find the perfect venue for your event, whether it's a wedding, party, or corporate gathering. We offer beautiful spaces with great ambiance, seating, and decor options to match your style. Make your event special with the right venue!
                </p>
                <button className="btn btn-light btn-lg section5btn" onClick={handleSignUpClick}>
                  View more
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div>
                <img src={img7} className="img-fluid" alt="Event Planning Illustration" style={{ height: "350px", width: 'auto', paddingTop: '20px' }} />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="section2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-start">
              <div>
                <img src={photo2} className="img-fluid" alt="Event Planning Illustration" style={{ height: "350px", width: 'auto', paddingTop: '20px' }} />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="section2desc">
                <h1 className="section2heading">Photography</h1>
                <p className="lead">
                Capture every special moment with our professional photographers! Whether it's a wedding, corporate event, or private celebration, we provide high-quality photography services to preserve your memories. From candid shots to stunning portraits, we ensure every detail is beautifully captured.
                </p>
                <button className="btn btn-light btn-lg section5btn" onClick={handleSignUpClick}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      <section
        className="section5"
        style={{ backgroundColor: "rgba(150, 197, 246, 1)", color: "white", padding: '20px' }}
      >
        <div className="container section5border p-4">
          <div className="section5box">
            <div className="section5content">
              <h1>OnePlaceEvent</h1>
              <p>
                We makes easy to find and connect with best decorators, Caterers, Venues to make your event amazing and memorable.
              </p>
            </div>
            <div className="section5image">
              <img src={img8} alt="Event Illustration" style={{ width: "100%", maxWidth: "500px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      


      <footer className="section6 py-4 text-primary">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1>OnePlaceEvent</h1>
          </div>
          <div>
            <p className="mb-1">Connect with us</p>
            <div className="section6icongrup">
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon1} className="section6icons" alt="Facebook" style={{ height: '30px' }} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon2} className="section6icons" alt="Instagram" style={{ height: '30px' }} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon3} className="section6icons" alt="Threads" style={{ height: '30px' }} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={icon4} className="section6icons" alt="X (Twitter)" style={{ height: '30px' }} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;



