import React, { useState } from 'react';
import searchicon from '../icons/search.svg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.jpg';
import img18 from '../images/18.jpg';
import img19 from '../images/19.jpg';
import img20 from '../images/20.jpg';

// Sample data for caterers and venues (replace with your actual data)
const catererData = [
  { name: 'Delicious Caterers', contact: '9876543210', cuisine: 'Indian', image: img20 },
  { name: 'Gourmet Meals', contact: '5551234567', cuisine: 'Continental', image: img16 },
  // Add more caterer data
];

const venueData = [
  { name: 'Grand Ballroom', capacity: '500', location: 'City Center', image: img18 },
  { name: 'Outdoor Gardens', capacity: '200', location: 'Suburb', image: img17 },
  // Add more venue data
];

const decoratorData = [
  { name: 'RK Decorators 1', contact: '1234567890', experience: '5 years', image: img14 },
  { name: 'RK Decorators 2', contact: '1234567890', experience: '5 years', image: img15 },
  { name: 'RK Decorators 3', contact: '1234567890', experience: '5 years', image: img16 },
  { name: 'RK Decorators 4', contact: '1234567890', experience: '5 years', image: img17 },
  { name: 'RK Decorators 5', contact: '1234567890', experience: '5 years', image: img18 },
  { name: 'RK Decorators 6', contact: '1234567890', experience: '5 years', image: img19 },
  { name: 'RK Decorators 7', contact: '1234567890', experience: '5 years', image: img20 },
];

const Decorators = () => {
  const [activeCategory, setActiveCategory] = useState('decorators');
  const [filteredDecorators, setFilteredDecorators] = useState(decoratorData);
  const [filteredCaterers, setFilteredCaterers] = useState(catererData);
  const [filteredVenues, setFilteredVenues] = useState(venueData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm(''); // Clear search term when category changes
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (activeCategory === 'decorators') {
      const filtered = decoratorData.filter(decorator =>
        decorator.name.toLowerCase().includes(term)
      );
      setFilteredDecorators(filtered);
    } else if (activeCategory === 'caterers') {
      const filtered = catererData.filter(caterer =>
        caterer.name.toLowerCase().includes(term) || caterer.cuisine.toLowerCase().includes(term)
      );
      setFilteredCaterers(filtered);
    } else if (activeCategory === 'venues') {
      const filtered = venueData.filter(venue =>
        venue.name.toLowerCase().includes(term) || venue.location.toLowerCase().includes(term)
      );
      setFilteredVenues(filtered);
    }
  };

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid decorators">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'decorators' ? 'active' : ''} btn btn-link`}
                  onClick={() => handleCategoryChange('decorators')}
                >
                  Decorators
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'caterers' ? 'active' : ''} btn btn-link`}
                  onClick={() => handleCategoryChange('caterers')}
                >
                  Caterers
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeCategory === 'venues' ? 'active' : ''} btn btn-link`}
                  onClick={() => handleCategoryChange('venues')}
                >
                  Venues
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='searchbar'>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control searchinput"
            placeholder={`${activeCategory} name or keywords`}
            aria-describedby="searchbtn"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn searchbtn" type="button" id='searchbtn'><img src={searchicon} alt="Search" /></button>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4 decoratorCards'>
        {activeCategory === 'decorators' &&
          filteredDecorators.map((decorator, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={decorator.image} className="card-img-top rounded-0" style={{ height: '15rem', objectFit: 'cover' }} alt={decorator.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{decorator.name}</h5>
                  <p className="card-text">ContactNo:<span style={{ color: 'gray' }}>{decorator.contact}</span></p>
                  <p className="card-text">Work Experience:<span style={{ color: 'gray' }}>{decorator.experience}</span></p>
                </div>
              </div>
            </div>
          ))}

        {activeCategory === 'caterers' &&
          filteredCaterers.map((caterer, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={caterer.image} className="card-img-top rounded-0" style={{ height: '15rem', objectFit: 'cover' }} alt={caterer.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{caterer.name}</h5>
                  <p className="card-text">ContactNo:<span style={{ color: 'gray' }}>{caterer.contact}</span></p>
                  <p className="card-text">Cuisine:<span style={{ color: 'gray' }}>{caterer.cuisine}</span></p>
                </div>
              </div>
            </div>
          ))}

        {activeCategory === 'venues' &&
          filteredVenues.map((venue, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={venue.image} className="card-img-top rounded-0" style={{ height: '15rem', objectFit: 'cover' }} alt={venue.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{venue.name}</h5>
                  <p className="card-text">Capacity:<span style={{ color: 'gray' }}>{venue.capacity}</span></p>
                  <p className="card-text">Location:<span style={{ color: 'gray' }}>{venue.location}</span></p>
                </div>
              </div>
            </div>
          ))}

        {activeCategory === 'decorators' && filteredDecorators.length === 0 && searchTerm && (
          <div className="col-12 text-center">No decorators found matching your search.</div>
        )}
        {activeCategory === 'caterers' && filteredCaterers.length === 0 && searchTerm && (
          <div className="col-12 text-center">No caterers found matching your search.</div>
        )}
        {activeCategory === 'venues' && filteredVenues.length === 0 && searchTerm && (
          <div className="col-12 text-center">No venues found matching your search.</div>
        )}
      </div>
    </div>
  );
};

export default Decorators;