import React from 'react'
import img21 from '../images/21.jpg'
import Header from './Header'
import { useNavigate, Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    const handleAboutUsClick = () => {
        navigate("/aboutus");
    };

    const handleDecoratorsClick = () => {
        navigate("/decorators");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <>
            <Header handleAboutUsClick={handleAboutUsClick}
                handleDecoratorsClick={handleDecoratorsClick}
                handleLoginClick={handleLoginClick} />

            <div className='aboutuspage '>
                <div className='container'>
                    <div className='AboutusTitle'>
                        <h1>AboutUs</h1>
                    </div>
                    <div className='AboutusSection row'>
                        <div className='col-md-8 aboutusdesc'>
                            <h1>OnePlaceEvent</h1>
                            <p>Planning an event can be exciting, but finding the right vendors can be time-consuming and stressful. That's where OnePlaceEvent comes in. We're dedicated to streamlining the event planning process by providing a comprehensive marketplace where you can discover and connect directly with top-rated decorators who can transform your vision into reality, skilled caterers who will delight your guests' palates, and a diverse range of venues to suit any occasion and style. Whether you're planning a wedding, corporate gathering, birthday celebration, or any other special event in Navsari, OnePlaceEvent empowers you to build your perfect team with ease and confidence.</p>
                        </div>
                        <div className='col-md-4'>
                            <img src={img21} style={{ width: '100%', height: '450px' }} />
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default AboutUs














