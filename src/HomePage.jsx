import React from "react";
import NavBar from "./NavBar";
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

function Home() {
	return (
		<body>
			<NavBar />
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
		</body>
	);
}

export default Home;
