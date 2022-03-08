import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// pages
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Nearby from "./NearbyPage";

function Home() {
	return (
		<div>
			<Container root maxWidth="lg" sx={{ position: "relative" }}>
				<Grid
					container
					maxWidth
					justifyContent="center"
					spacing={2}
					sx={{
						height: "calc(100vh - 50px)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
					}}
				>
					<Grid>
						<Booking />
					</Grid>
					<Grid Container xs={6} md={4}>
						<PhotoSlide />
					</Grid>
				</Grid>
				<Grid>
					<Nearby />
				</Grid>
			</Container>
		</div>
	);
}

export default Home;
