import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";
import "../styles/EventList.css"; // Assuming you have a CSS file for styles


const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    const eventManagerId = localStorage.getItem("userId");

    if (!ignore) {
      setLoading(true);
      fetch(`http://localhost:5000/event?eventManagerId=${eventManagerId}`)
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) setEvents(data);
        })
        .catch((error) => console.error("Error fetching events:", error))
        .finally(() => {
          if (!ignore) setLoading(false);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  const handleAddEvent = () => {
    navigate("/event-manager-panel/create-event");
  };

  return (
    <div className="event-list-wrapper py-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-black fw-bold">🎉 Events List</h2>
          <Button variant="light" size="lg" onClick={handleAddEvent}>
            ➕ Add New Event
          </Button>
        </div>

        {loading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="light" style={{ width: "4rem", height: "4rem" }} />
            <p className="mt-3 text-white-50">Fetching your events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No events"
              width="200"
              height="200"
              className="mb-3"
            />
            <h5 className="text-white-50">No events yet</h5>
            <p className="text-white-50">Click the button above to add your first event.</p>
          </div>
        ) : (
          <div className="row g-4">
            {events.map((event, idx) => {
              const formattedDate = new Date(event.start_date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              });

              return (
                <div className="col-sm-12 col-md-6 col-xl-4" key={idx}>
                  <Card className="event-card h-100 shadow-lg border-0">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text-primary fw-bold">{event.name}</Card.Title>
                      <Card.Text>
                        <i className="bi bi-geo-alt-fill text-danger"></i>{" "}
                        <small className="text-muted">{event.address}</small>
                      </Card.Text>
                      <Card.Text>
                        <i className="bi bi-calendar-event-fill text-success"></i>{" "}
                        <small className="text-muted">{formattedDate}</small>
                      </Card.Text>
                      <div className="mt-auto d-grid">
                        <Button
                          variant="outline-primary"
                          onClick={() => navigate(`/event-manager-panel/event-details/${event.id}`)}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
