import React, { useState } from 'react';
import searchicon from '../icons/search.svg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.jpg';
import img18 from '../images/18.jpg';
import img19 from '../images/19.jpg';
import img20 from '../images/20.jpg';
import img5 from '../images/5.png';
// import img5 from '../images/5.jpg';

// Sample data for caterers and venues (replace with your actual data)
const catererData = [
  {  image: img20 },
  {  image: img16 },
  {image:img5}
  // {  image: img5 },
  // Add more caterer data
];

const venueData = [
  {  image: img18 },
  {  image: img17 },
  // Add more venue data
];

const decoratorData = [
  { image: img14 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
  { image: img18 },
  { image: img19 },
  { image: img20 },
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
                
              </div>
            </div>
          ))}

        {activeCategory === 'caterers' &&
          filteredCaterers.map((caterer, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={caterer.image} className="card-img-top rounded-0" style={{ height: '15rem', objectFit: 'cover' }} alt={caterer.name} />
              </div>
            </div>
          ))}

        {activeCategory === 'venues' &&
          filteredVenues.map((venue, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={venue.image} className="card-img-top rounded-0" style={{ height: '15rem', objectFit: 'cover' }} alt={venue.name} />
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