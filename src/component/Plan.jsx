import React from 'react';
const Plan = () => {
  return (
    <div className="planpage">
      <div className="planbox">
        <h1 className="plantitle">Plan</h1>
        <div className="row mb-3">
          <label htmlFor="name" className="col-12 col-sm-4 col-md-3 planlabels">
            Name
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <input type="text" className="form-control" id="name" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="mobile" className="col-12 col-sm-5 col-md-3 planlabels mobile-label">
            Mobile No
          </label>
          <div className="col-12 col-sm-7 col-md-9 planinputs">
            <input type="tel" className="form-control" id="mobile" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-12 col-sm-4 col-md-3 planlabels">
            Email
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <input type="email" className="form-control" id="email" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="state" className="col-12 col-sm-4 col-md-3 planlabels">
            State
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <select id="state" className="form-select" required>
              <option value="">Select</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Kerala">Kerala</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="district" className="col-12 col-sm-4 col-md-3 planlabels">
            District
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <select id="district" className="form-select" required>
              <option value="">Select</option>
              <option value="Navsari">Navsari</option>
              <option value="Surat">Surat</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Dang">Dang</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="city" className="col-12 col-sm-4 col-md-3 planlabels">
            City
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <input type="text" className="form-control" id="city" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="eventType" className="col-12 col-sm-4 col-md-3 planlabels">
            Event Type
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <select id="eventType" className="form-select" required>
              <option value="">Select</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Office Party">Office Party</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="eventDate" className="col-12 col-sm-4 col-md-3 planlabels">
            Event Date
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <input type="date" className="form-control" id="eventDate" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="eventDetails" className="col-12 col-sm-4 col-md-3 planlabels">
            Event Details
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <textarea className="form-control" id="eventDetails"></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="referenceImages" className="col-12 col-sm-4 col-md-3 planlabels">
            Reference Images
          </label>
          <div className="col-12 col-sm-8 col-md-9 planinputs">
            <input type="url" className="form-control" id="referenceImages" />
          </div>
        </div>
        <div className="row planbtn">
          <button type="submit" className="col-md-6 btn btn-primary">
            Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;