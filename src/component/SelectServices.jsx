import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SelectServices = () => {
  const { eventId } = useParams();
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios.get(' https://backend-999h.onrender.com/service/') 
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSelect = (serviceId) => {
    setSelected(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = () => {
    axios.post(` https://backend-999h.onrender.com/event/${eventId}/select-services`, { services: selected })
      .then(() => alert("Services selected successfully!"))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2>Select Services for Your Event</h2>
      <div className="row">
        {services.map(service => (
          <div className="col-md-4" key={service.id}>
            <div className={`card mb-3 ${selected.includes(service.id) ? 'border-primary' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <button 
                  className={`btn ${selected.includes(service.id) ? 'btn-danger' : 'btn-success'}`}
                  onClick={() => handleSelect(service.id)}
                >
                  {selected.includes(service.id) ? 'Deselect' : 'Select'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>Confirm Services</button>
    </div>
  );
};

export default SelectServices;
