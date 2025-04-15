import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ServiceProviderPanel.css';
import '../styles/EventManagerPanel.css';
import Header from "./Header";
import { useNavigate, Link, Outlet } from 'react-router-dom';
import LogoutButton from "./LogOut";

const ServiceProviderPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("role");

        if (!userId || userRole !== "service_provider") {
            navigate("/login");
        }
    }, [navigate]);

    const handleAboutUsClick = () => {
        navigate("/aboutus");
    };

    const handleDecoratorsClick = () => {
        navigate("/services");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <>
            <Header
                handleAboutUsClick={handleAboutUsClick}
                handleServicesClick={handleDecoratorsClick}
                handleLoginClick={handleLoginClick}
            />

            <div className="container-fluid" id="eventManagerPanel">
                {/* Sidebar */}
                <div className="sidebar-fixed d-flex flex-column">
                    <h4 className="mb-3 p-3 bg-info text-black">Service Panel</h4>

                    <div className="flex-grow-1 overflow-auto px-3 d-flex flex-column gap-2">
                        <Link to="service-list" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                        <i className="bi bi-stars me-2"></i> Services
                        </Link>
                        <Link to="my-orders" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                            <i class="bi bi-box-seam me-2"></i> My Orders
                        </Link>
                        <Link to="profile-provider" className="text-white p-2 rounded text-decoration-none eventPanel d-flex align-items-center gap-2">
                            <i class="bi bi-person-circle me-2"></i> Profile
                        </Link>
                    </div>

                    <div className="px-3 pb-3">
                        <LogoutButton />
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content-scroll">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export { ServiceProviderPanel };
