import React, { useState } from "react";
import axios from "axios";
// import "../styles/AddEvent.css"; 
import "../styles/AddEvent.css";
const AddEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    address: "",
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const managerId = localStorage.getItem("userId");
      if (!managerId) {
        alert("Manager ID not found. Please log in again.");
        return;
      }

      const eventWithManager = { ...eventData, managerId };

      const response = await axios.post("http://localhost:5000/event/", eventWithManager);

      const createdEvent = response.data;
      const eventId = createdEvent.id;
      localStorage.setItem("eventId", eventId);

      alert("Event created successfully!");
      setTimeout(() => {
        window.location.href = "/event-manager-panel/event-list";
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
    finally {
      setLoading(false);
      }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80 bg-gradient ">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">🎊 Create Your Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Event Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Ravi's Wedding"
              name="name"
              value={eventData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Start Date & Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="startDate"
              value={eventData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">End Date & Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="endDate"
              value={eventData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Event Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="3"
              placeholder="e.g. Royal Palace, Surat"
              value={eventData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg shadow-sm" disabled={loading}>
              {loading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : "🚀 Create Event"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
