import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";
// import "./ServiceList.css"; // Import custom CSS for additional styling

const ServiceList = () => {
  const [services, setservices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    const serviceProviderId = localStorage.getItem("userId");

    if (!ignore) {
      setLoading(true);
      fetch(` https://backend-999h.onrender.com/service?serviceProviderId=${serviceProviderId}`)
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) {
            setservices(data);
          }
          console.log("Fetched services:", data);
        })
        .catch((error) => console.error("Error fetching services:", error))
        .finally(() => {
          if (!ignore) {
            setLoading(false);
          }
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  const handleAddService = () => {
    navigate("/service-provider-panel/add-service");
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">Service List</h3>
        <Button variant="primary" onClick={handleAddService}>
          Add a Service
        </Button>
      </div>

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : services.length === 0 ? (
        <div className="text-center mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No services"
            width="200"
            height="200"
            className="mb-3"
          />
          <h5 className="text-muted">No services added yet!</h5>
          <p className="text-secondary">Click the button above to add your first service.</p>
        </div>
      ) : (
        <div className="row mt-3">
          {services.map((service, idx) => (
            <div className="col-md-4" key={idx}>
              <Card className="mb-3 shadow-sm service-card">
                {/* <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Service"
                  className="service-card-img"
                /> */}
                <Card.Body>
                  <Card.Title className="text-primary">{service.name}</Card.Title>
                  <Card.Text className="text-secondary">
                    <strong>Category:</strong> {service.category?.name || "N/A"}
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    <strong>Price:</strong> ₹{service.price}
                  </Card.Text>
                  {/* <Card.Text className="text-muted">{service.name}</Card.Text> */}
                  <Button variant="outline-primary" size="sm " onClick={() => navigate(`/service-provider-panel/service-details/${service.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;
