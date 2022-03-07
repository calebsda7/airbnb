import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// pages
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Login from "./LoginPage";

function Home() {
	return (
		<body>
			<Container root maxWidth="lg" sx={{ position: "relative" }}>
				<Grid container maxWidth justifyContent="center" spacing={2}>
					<Grid>
						<Booking />
					</Grid>
					<Grid Container xs={6} md={4}>
						<PhotoSlide />
					</Grid>
				</Grid>
			</Container>
			<Grid>
				<Login />
			</Grid>
		</body>
	);
}

export default Home;
