import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    CircularProgress,
    Grid,
    Chip,
    Button,
    Stack,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ProfileProvider = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const providerId = localStorage.getItem("userId");

        const fetchProfile = async () => {
            try {
                const response = await axios.get(`https://backend-999h.onrender.com/auth/${providerId}`);
                setProfile(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "83vh",
                background: "linear-gradient(to right,rgb(230, 211, 250),rgb(159, 182, 223))",
                padding: 4,
            }}
        >
            {profile ? (
                <Card
                    sx={{
                        width: "100%",
                        maxWidth: 600,
                        boxShadow: 6,
                        borderRadius: 4,
                        padding: 4,
                        backgroundColor: "#ffffff",
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 3,
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: deepPurple[500],
                                width: 100,
                                height: 100,
                                fontSize: 40,
                                boxShadow: 3,
                            }}
                        >
                            {profile.name.charAt(0)}
                        </Avatar>
                    </Box>
                    <CardContent>
                        <Typography
                            variant="h4"
                            component="div"
                            gutterBottom
                            sx={{ fontWeight: "bold", color: "#333" }}
                        >
                            {profile.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            sx={{ fontSize: "1.1rem" }}
                        >
                            <strong>Email:</strong> {profile.email}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            sx={{ fontSize: "1.1rem" }}
                        >
                            <strong>Phone No:</strong> {profile.phoneNo}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            sx={{ fontSize: "1.1rem" }}
                        >
                            <strong>Role:</strong> Service Provider
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                            sx={{ fontSize: "1.1rem" }}
                        >
                            <strong>Status:</strong>{" "}
                            <Chip
                                label={profile.status}
                                color={profile.status === "Active" ? "success" : "warning"}
                                size="medium"
                                sx={{ fontSize: "1rem", fontWeight: "bold" }}
                            />
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
                            <Button variant="contained" color="primary">
                                Edit Profile
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Logout
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            ) : (
                <Grid container justifyContent="center" alignItems="center">
                    <CircularProgress size={80} sx={{ color: "#ffffff" }} />
                </Grid>
            )}
        </Box>
    );
};

export default ProfileProvider;
