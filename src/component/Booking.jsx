import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";
// import React from "react";
import { format } from "date-fns";
import axios from "axios";

const Booking = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null); // For modal

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const managerId = localStorage.getItem("userId");

                const userType = localStorage.getItem("role");
                const response = await fetch(`https://backend-999h.onrender.com/bookings?userId=${managerId}&userType=${userType}&status=completed,rejected,accepted,confirmed`);

                // const response = await fetch(" https://backend-999h.onrender.com/bookings/");
                if (!response.ok) throw new Error("Failed to fetch orders");

                const data = await response.json();
                console.log(data);
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`https://backend-999h.onrender.com/bookings/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) throw new Error("Failed to update status");

            setOrders(prev =>
                prev.map(order =>
                    order.id === id ? { ...order, status: newStatus } : order
                )
            );
        } catch (err) {
            alert(err.message);
        }
    };

    const handleConfirmClick = (order) => {
        if (order.status !== "accepted") {
            alert("Only accepted bookings can be confirmed.");
            return;
        }
        setSelectedBooking(order);
        // const modal = new window.bootstrap.Modal(document.getElementById("confirmModal"));
        const modal = new Modal(document.getElementById("confirmModal"));
        modal.show();
    };

    const handlePaymentConfirm = () => {
        if (!selectedBooking) return;

        // const modal = new Modal(document.getElementById("confirmModal"));

        const options = {
            key: "rzp_test_kDxzqag5jcHuFm",
            amount: selectedBooking.totalPrice * 100,
            currency: "INR",
            name: "OnePlaceEvent",
            description: "Payment for booking",
            handler: async (response) => {
                let transactionId = response['razorpay_payment_id'];
                let bookingId = selectedBooking.id;
                let amount = selectedBooking.totalPrice;

                console.log(transactionId, bookingId, amount);

                const res = await axios.post("https://backend-999h.onrender.com/payment/", {
                    transactionId: transactionId,
                    bookingId: bookingId,
                    amount: amount,
                });

                // const verifyRes=await axios.post("")
                alert("Payment successful and booking confirmed!");
                const modalElement = document.getElementById("confirmModal");
                let modalInstance = Modal.getInstance(modalElement);
                if (!modalInstance) {
                    modalInstance = new Modal(modalElement);
                }
                modalInstance.hide();
                setOrders((prev) =>
                    prev.map((order) =>
                        order.id === selectedBooking.id ? { ...order, status: "confirmed" } : order
                    )
                );
                // if (res.data && res.data.payment && res.data.payment.invoiceUrl) {
                //     window.open(`https://backend-999h.onrender.com${res.data.payment.invoiceUrl}`, "_blank");
                // }

                //  Immediately open invoice, if available
                if (res.data?.payment?.invoiceUrl) {
                    window.open(`https://backend-999h.onrender.com${res.data.payment.invoiceUrl}`, "_blank");
                }
            },
            // prefill: {
            //     name: "Your Name", 
            //     email: "your.email@example.com", 
            //     contact: "9999999999", 
            // },
            theme: {
                color: "#3399cc",
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();

        // handleStatusChange(selectedBooking.id, "confirmed");

    };

    if (loading)
        return (
            <div className="container mt-4 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Fetching your bookings...</p>
            </div>
        );

    if (error)
        return (
            <div className="container mt-4 text-center text-danger">
                <i className="bi bi-exclamation-triangle-fill fs-1"></i>
                <p className="mt-2">Error: {error}</p>
            </div>
        );

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center text-primary">My Bookings</h1>

            {orders.length === 0 ? (
                <div className="text-center text-muted fs-5 mt-5">
                    <i className="bi bi-calendar-x fs-1 d-block mb-3"></i>
                    No bookings are available.
                </div>
            ) : (
                <div className="table-responsive shadow-lg p-3 mb-5 bg-white rounded">
                    <table className="table table-hover table-striped">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>Sr. No.</th>
                                <th>Event</th>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id}>
                                    <td>{index + 1}</td>
                                    <td>{order.event.name}</td>
                                    <td>{order.service.name}</td>
                                    <td>
                                        <span
                                            className={`badge ${order.status === "confirmed"
                                                ? "bg-success"
                                                : order.status === "cancelled"
                                                    ? "bg-danger"
                                                    : "bg-primary"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>{format(new Date(order.startTime), "dd/MM/yyyy hh:mm aa")}</td>
                                    <td>{format(new Date(order.endTime), "dd/MM/yyyy hh:mm aa")}</td>
                                    <td>₹{order.totalPrice}</td>
                                    <td>
                                        {order.status !== "rejected" && (
                                            <div className="d-flex gap-2">
                                                <button
                                                    className="btn btn-outline-success btn-sm"
                                                    onClick={() => handleConfirmClick(order)}
                                                >
                                                    Confirm
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => handleStatusChange(order.id, "cancelled")}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Payment Confirmation Modal */}
            <div className="modal fade" id="confirmModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Payment Confirmation</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <p className="fs-5">
                                You will be paying for this booking. Do you want to proceed?
                            </p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handlePaymentConfirm}
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Booking;
