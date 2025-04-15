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

// const handleSignUpClick = () => {
//   window.open("PlanNow", "_blank");
// };

const LandingPage = () => {
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
          <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <div className="container-fluid navstyle">
                <a className="navbar-brand" href="#">ONEPlaceEvent</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Decorators</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">AboutUs</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">LogIn</a>
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
                  Connect with trusted event Decorators & make Sparking moments with EVENTSpark
                </p>
                {/* <button className="btn btn-light btn-lg" onClick={handleSignUpClick}>PlanNow</button> */}
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
                  EventHub is a dynamic event management platform designed to simplify the planning, execution, and coordination of events by offering distinct features for users, vendors, and administrators. EventHub provides users with tools for event creation and planning, including task and timeline management, budget tracking, and vendor booking. Users can browse vendors, leave reviews,
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img2} className="img-fluid" alt="Event Planning Illustration" style={{ paddingTop: '20px' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section3 py-5" style={{ backgroundColor: 'rgba(150, 197, 246, 1)' }}> {/* Applied background color here */}
        <div className="container section3border p-4">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
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
              <div className="carousel-item" data-bs-interval="5000">
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

      

      <section className="section4 py-5">
        <div className="container">
          <div className="text-center mb-4 section4heading">
            <h1>Provide Services like</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            <div className="col">
              <div className="card h-100 ">
                <img src={img5} className="card-img-top p-2" alt="Caterers" />
                <div className="card-body">
                  <h5 className="card-title">Caterers</h5>
                  <p className="card-text">Savor the flavor, cherish the memory</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={img7} className="card-img-top p-2" alt="Venue" />
                <div className="card-body">
                  <h5 className="card-title">Venue</h5>
                  <p className="card-text">Transforming spaces, crafting memories</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={img6} className="card-img-top p-2" alt="Decorators" />
                <div className="card-body">
                  <h5 className="card-title">Decorators</h5>
                  <p className="card-text">We design the ambiance, you create the memories.</p>
                </div>
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
              <h1>EVENTSPark</h1>
              <p>
                Connect with trusted event Decorators and make Sparking moments with
                EVENTSPark
              </p>
              {/* <button className="btn btn-light btn-lg section5btn" onClick={handleSignUpClick}>
                Plan Now
              </button> */}
            </div>
            <div className="section5image">
              <img src={img8} alt="Event Illustration" style={{ width: "100%", maxWidth: "500px", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>


      <footer className="section6 py-4 bg-light text-primary">
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