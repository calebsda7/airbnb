import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// pages
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Nearby from "./NearbyPage";

const HomePage = () => {
	return (
		<Container sx={{ position: "relative" }}>
			<Grid
				container
				spacing={2}
				alignItems="center"
				sx={{
					height: 600,
					marginTop: 10,
					marginBottom: 10,
					position: "relative",
				}}
			>
				<Grid item xs={12} md={4}>
					<Booking />
				</Grid>
				<Grid item xs={12} md={8}>
					<PhotoSlide />
				</Grid>
			</Grid>
			<Grid container sx={{ height: 600, position: "relative" }}>
				<Nearby />
			</Grid>
		</Container>
	);
};

export default HomePage;
