import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EventManagerPanel.css';
import Header from "./Header";
import { useNavigate, Link, Outlet } from 'react-router-dom';
import LogoutButton from "./LogOut";


const EventManagerPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("role");

        if (!userId || userRole !== "event_manager") {
            navigate("/login");
        }
    }, [navigate]);

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
            <Header
                handleAboutUsClick={handleAboutUsClick}
                handleDecoratorsClick={handleDecoratorsClick}
                handleLoginClick={handleLoginClick}
            />

            <div className="container-fluid" id="eventManagerPanel">
                {/* Sidebar */}
                <div className="sidebar-fixed d-flex flex-column">
                    <h4 className="mb-3 p-2 bg-info text-black">Customer Panel</h4>

                    <div className="flex-grow-1 overflow-auto px-3 d-flex flex-column gap-2">
                        <Link to="event-list" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                            <i className="bi bi-calendar-event"></i> Events
                        </Link>
                        <Link to="booking" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                            <i className="bi bi-journal-check"></i> Booking
                        </Link>
                        <Link to="profile-manager" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                            <i className="bi bi-person-circle"></i> Profile
                        </Link>
                    </div>

                    <div className="px-3 pb-3">
                        <LogoutButton />
                    </div>
                </div>

                <div className="main-content-scroll">
                    <Outlet />
                </div>
            </div>

        </>
    );
};

export { EventManagerPanel };
