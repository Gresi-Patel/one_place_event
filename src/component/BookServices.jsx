import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { ReactComponent as SearchIcon } from '../icons/search.svg'; // Adjust the path to your SVG icon

const BookServices = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [eventId, setEventId] = useState(null);



    // const { eventId } = useParams();
    const { eventId: eventParamId } = useParams();

    useEffect(() => {
        // Fetch services from the API
        axios
            .get(" http://localhost:5000/service/")
            .then((response) => {
                setServices(response.data);
                setFilteredServices(response.data);

                // Extract unique categories
                const uniqueCategories = [
                    ...new Set(response.data.map((service) => service.category.name)),
                ];
                setCategories(uniqueCategories);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, []);


    useEffect(() => {
        console.log("Fetched Event ID from URL:", eventParamId );
        setEventId(eventParamId );
    }, [eventParamId ]);

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);

        // Filter services based on selected categories
        if (updatedCategories.length === 0) {
            setFilteredServices(services);
        } else {
            setFilteredServices(
                services.filter((service) =>
                    updatedCategories.includes(service.category.name)
                )
            );
        }
    };

    const handleBooking = (service) => {

        if (!eventId) {
            alert("Event ID not found. Please wait or refresh the page.");
            return;
        }
        const confirmed = confirm("Are you sure you want to add this service?");
        if (confirmed) {
            const bookingData = {
                eventId: eventId,
                serviceId: service.id,
                startTime:new Date().toISOString(),
                endTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toISOString(), 
                totalPrice: service.price
            };
            console.log(bookingData);

            axios.post(" http://localhost:5000/bookings/", bookingData)
                .then((response) => {
                    alert("Service booked successfully!");
                })
                .catch((error) => {
                    console.error("Error booking service:", error);
                    alert("Error booking service.");
                });
        }
    };


    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Book Services</h1>
            
            {/* Filter Section */}
            <div className="mb-4">
                <h5>Filter by Category</h5>
                {categories.map((category) => (
                    <div key={category} className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        <label className="form-check-label" htmlFor={category}>
                            {category}
                        </label>
                    </div>
                ))}
            </div>

            {/* Services List */}
            <div className="row">
                {filteredServices.map((service) => (
                    <div className="col-md-4 mb-4" key={service.id}>
                        <div className="card shadow-lg h-100 border-0">
                            <div className="card-header bg-primary text-white text-center">
                                <h5 className="mb-0">{service.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="badge bg-info text-dark mb-2">
                                    {service.category.name}
                                </p>
                                <p className="text-success fw-bold">
                                    Price: ₹{service.price}
                                </p>
                                <p className="text-muted">
                                    {service.description}
                                </p>
                            </div>
                            <div className="card-footer bg-light text-center">
                                <button className="btn btn-outline-primary" onClick={() => handleBooking(service)} >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookServices;
