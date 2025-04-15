import React from 'react'
import LandingPage from './component/LandingPage'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "react-bootstrap-icons"
import '../src/styles/LandingPage.css'
import '../src/styles/Login.css'
import '../src/styles/SignUp.css'
import '../src/styles/Plan.css'
import '../src/styles/Decorators.css'
import '../src/styles/AboutUs.css'
import Login from './component/Login';
import SignUp from './component/SignUp';
import Decorators from './component/Decorators';
import AboutUs from './component/AboutUs';
import { ServiceProviderPanel } from './component/ServiceProviderPanel';
import Events from './component/Events';
import SelectServices from './component/SelectServices';
import EventList from './component/EventList';
import AddEvent from './component/AddEvent';
import ServiceList from './component/ServiceList';
import { AddService } from './component/AddService';
import { EventManagerPanel } from './component/EventManagerPanel';
import EventDetails from './component/EventDetails';
import BookServices from './component/BookServices';
import MyOrders from './component/MyOrders';
import Booking from './component/Booking';
import ForgotPassword from './component/ForgotPassword';
import VerifyOtp from './component/VerifyOtp';
import ResetPassword from './component/ResetPassword';
import ProfileManager from './component/ProfileManager';
import ServiceDetails from './component/ServiceDetails';
import ProfileProvider from './component/ProfileProvider';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service-provider-panel" element={<ServiceProviderPanel />} >
          <Route path="service-list" element={<ServiceList />} />
          <Route path="add-service" element={<AddService />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="service-details/:serviceId" element={<ServiceDetails/>} />
          <Route path="profile-provider" element={<ProfileProvider/>} />
        </Route>
        <Route path="/event-manager-panel" element={<EventManagerPanel />}>
          <Route path="event-list" element={<EventList />} />
          <Route path="create-event" element={<AddEvent />} />
          <Route path="event-details/:eventId" element={<EventDetails />} />
          <Route path="book-services/:eventId" element={<BookServices />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile-manager" element={<ProfileManager />} />

        </Route>
        <Route path="/select-services/:eventId" element={<SelectServices />} />
        {/* <Route path="/plannow" element={<Plan />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        

        <Route path='/signup' element={<SignUp />} />
        <Route path='/decorators' element={<Decorators />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
