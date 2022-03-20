import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// pages
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Nearby from "./NearbyPage";
import FooterPage from "./FooterPage";
import NearbyUpdate from "./NearbyPageUpdate";

const HomePage = () => {
	return (
		<div>
			<Container maxWidth="lg" sx={{ position: "relative" }}>
				<Grid
					container
					spacing={2}
					sx={{
						height: "calc(100vh - 50px)",
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
				<Grid container>
					<Nearby />
				</Grid>
			</Container>
			<FooterPage />
		</div>
	);
};

export default HomePage;
