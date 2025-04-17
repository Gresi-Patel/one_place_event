import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo & Description */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">
              <span style={{ color: "#00BFFF" }}>ONE</span> PLACE EVENT
            </h5>
            {/* <p className="">
              Your go-to event platform. Discover, book and enjoy!
            </p> */}
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">About Us</h6>
            <p>One Place Event is your all-in-one destination for discovering, planning, and managing events with ease. From local gatherings to grand celebrations, we bring everything together in one seamless platform.</p>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Contact us</h6>
            <ul className="list-unstyled">
              <li>+91 5348726945</li>
              <li>+91 8954632496</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled">
              <li>Catering</li>
              <li>Lighting</li>
              <li>Photography</li>
           
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>

            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-light" />
              <FaTwitter className="text-light" />
              <FaLinkedinIn className="text-light" />
            </div>

            <div className="mt-3">
              <h6>Subscribe</h6>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter email address" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-4 border-top pt-3 ">
          ©2025 One Place Event, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
