import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(" https://backend-999h.onrender.com/event/") 
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error("Error fetching events:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Select an Event</h2>
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-md-4">
                        <div className="card p-3 shadow-sm">
                            <h5>{event.name}</h5>
                            <p><b>📅 {new Date(event.start_date).toDateString()}</b></p>
                            <p>📍 {event.address}</p>
                            <Link to={`/events/${event.id}/services`} className="btn btn-primary">View Services</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;






