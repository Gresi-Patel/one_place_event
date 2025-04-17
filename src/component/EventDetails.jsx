import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventDetails = () => {
    const { eventId } = useParams(); // Extract eventId from the URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(` http://localhost:5000/event/${eventId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch event details");
                }

                const data = await response.json();
                console.log("event detail:",data);
                console.log("event detail book:",data.bookings);
                setEvent(data);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>No event found.</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🎉 Event Details 🎉</h2>
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                    <h3 className="card-title text-center">{event.name}</h3>
                </div>
                <div className="card-body">
                    <p><strong>Date:</strong> {new Date(event.start_date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {new Date(event.start_date).toLocaleTimeString()} - {new Date(event.end_date).toLocaleTimeString()}</p>
                    <p><strong>Venue:</strong> {event.address}</p>
                    {/* <p><strong>Description:</strong> {event.description || "No description available."}</p> */}
                </div>
                <div className="card-footer bg-light">
                    <h5>Bookings:</h5>
                    {event.bookings.length > 0 ? (
                        <ul>

                            {event.bookings.map((booking, index) => (
                                <li key={index}>
                                    <strong>Service:</strong> {booking.service.name} | <strong>Booked By:</strong> {booking.event.manager.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center">
                            <p>No bookings yet! Be the first to book a service for this event. 🎉</p>
                        </div>
                    )}
                    <div className="text-center mt-3">
                        <button className="btn btn-success" onClick={() => navigate("/event-manager-panel/book-services/" + eventId)}>
                            Book a Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
