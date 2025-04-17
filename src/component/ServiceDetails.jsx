import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap"; // For a better loading spinner
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const navigate = useNavigate();

    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`http://localhost:5000/service/${serviceId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch service details");
                }

                const data = await response.json();
                setService(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetails();
    }, [serviceId]);

    if (loading) {
        return (
            <div className="loading-container">
                <Spinner animation="border" variant="primary" />
                <p>Loading service details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h3 className="text-danger">Error: {error}</h3>
                <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }

    if (!service) {
        return <div className="text-center">No service found.</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 fancy-title">🎉 Service Details 🎉</h2>
            <div className="card shadow-lg service-card">
                <div className="card-header bg-primary text-white">
                    <h3 className="card-title text-center ">{service.name}</h3>
                </div>
                <div className="card-body">
                    <p>
                        <strong>Provider Name:</strong> {service.provider.name}
                    </p>
                    <p>
                        <strong>Category Name:</strong> {service.category.name}
                    </p>
                    <p>
                        <strong>Description:</strong> {service.description || "No description available."}
                    </p>
                    <p>
                        <strong>Price:</strong> ₹{service.price}
                    </p>
                </div>
                <div className="card-footer text-center">
                   
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;