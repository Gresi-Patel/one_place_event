import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    CircularProgress,
    Alert,
    Box,
    Chip,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
// } from "@mui/material";

import { styled } from "@mui/material/styles";

const getStatusColor = (status) => {
    switch (status) {
        case "accepted":
        case "confirmed":
            return "success";
        case "rejected":
            return "error";
        case "completed":
            return "info";
        case "approved":
            return "warning";
        default:
            return "default";
    }
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: "bold",
    backgroundColor: theme.palette.grey[100],
}));

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [openOtpModal, setOpenOtpModal] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [otpInput, setOtpInput] = useState("");


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const providerId = localStorage.getItem("userId");
                const userType = localStorage.getItem("role");
                const response = await fetch(
                    `https://backend-999h.onrender.com/bookings?userId=${providerId}&userType=${userType}&status=approved,confirmed,completed,rejected`
                );
                if (!response.ok) throw new Error("Failed to fetch orders");
                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);


    const handleCompleteClick = async (order) => {
        try {
            // send OTP to event manager
            await fetch("https://backend-999h.onrender.com/otp-api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: order?.event?.manager?.email

                }),
            });

            // await axios.post("https://backend-999h.onrender.com/otp-api/send-otp", {
            //     email: order?.event?.managerId?.email
            //   });
            // console.log(order.event.managerId.email);
            console.log("order:", order);
            console.log("event:", order?.event);
            console.log("managerId:", order?.event?.manager);
            console.log("email:", order?.event?.manager?.email);

            setCurrentOrder(order);
            setOpenOtpModal(true);
        } catch (error) {
            alert("Failed to send OTP: " + error.message);
        }
    };

    const verifyOtpAndComplete = async () => {
        try {
            // const response = await fetch("https://backend-999h.onrender.com/otp-api/verify-otp", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         email: currentOrder.event.managerId.email,
            //         otp: otpInput,
            //     }),
            // });

            const response = await axios.post("https://backend-999h.onrender.com/otp-api/verify-otp", {
                email: currentOrder.event.manager.email, // make sure this is defined
                otp: otpInput
            });
            console.log("response:", response);

            const result = response.data;


            if (!result.success) {
                return;
            }
            
            alert(result.message || "OTP verification failed");
            // Now update booking status
            await handleStatusChange(currentOrder.id, "completed");
            setOpenOtpModal(false);
            alert("Booking marked as completed successfully.");
        } catch (err) {
            alert("Error completing booking: " + err.message);
        }
    };


    const handleCloseOtpModal = () => {
        setOpenOtpModal(false);
        setOtpInput("");
        setCurrentOrder(null);
    };



    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`https://backend-999h.onrender.com/bookings/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) throw new Error("Failed to update status");

            setOrders((prev) =>
                prev.map((order) =>
                    order.id === id ? { ...order, status: newStatus } : order
                )
            );
        } catch (err) {
            alert(err.message);
        }
    };

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
    };

    if (loading) {
        return (
            <Container sx={{ mt: 4, textAlign: "center" }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="error">Error: {error}</Alert>
            </Container>
        );
    }

    return (
        <>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    My Bookings
                </Typography>

                {orders.length === 0 ? (
                    <Box textAlign="center" py={6}>
                        <Typography variant="h6" color="textSecondary">
                            No bookings found
                        </Typography>
                        <Typography variant="body2" color="textSecondary" mt={2}>
                            You currently have no bookings. Check back later!
                        </Typography>
                    </Box>
                ) : (
                    <TableContainer component={Paper} elevation={3}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Sr.No.</StyledTableCell>
                                    <StyledTableCell>Event</StyledTableCell>
                                    <StyledTableCell>Service</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Start</StyledTableCell>
                                    <StyledTableCell>End</StyledTableCell>
                                    <StyledTableCell>Total Price</StyledTableCell>
                                    <StyledTableCell>Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={order.id} hover>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{order.event.name}</TableCell>
                                        <TableCell>{order.service.name}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={order.status.toUpperCase()}
                                                color={getStatusColor(order.status)}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>{formatDate(order.startTime)}</TableCell>
                                        <TableCell>{formatDate(order.endTime)}</TableCell>
                                        <TableCell>₹{order.totalPrice}</TableCell>
                                        <TableCell>

                                            {order.status === "approved" && (
                                                <Stack direction="row" spacing={1}>
                                                    <Button
                                                        variant="outlined"
                                                        color="success"
                                                        size="small"
                                                        onClick={() =>
                                                            handleStatusChange(order.id, "accepted")
                                                        }
                                                    >
                                                        Accept
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        color="error"
                                                        size="small"
                                                        onClick={() =>
                                                            handleStatusChange(order.id, "rejected")
                                                        }
                                                    >
                                                        Reject
                                                    </Button>
                                                </Stack>
                                            )}

                                            {order.status === "confirmed" && (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={() => handleCompleteClick(order)}
                                                >
                                                    Complete
                                                </Button>
                                            )}

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>

            <Dialog open={openOtpModal} onClose={handleCloseOtpModal}>
                <DialogTitle>Enter OTP</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Enter OTP"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value)}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenOtpModal(false)}>Cancel</Button>
                    <Button onClick={verifyOtpAndComplete} variant="contained" color="primary">
                        Verify & Complete
                    </Button>
                </DialogActions>
            </Dialog>

        </>

    );
};

export default MyOrders;
