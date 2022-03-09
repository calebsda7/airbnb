import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// pages
import Booking from "./BookingComponents/BookingPage";
import PhotoSlide from "./PhotoSlide";
import Nearby from "./NearbyPage";
import FooterPage from "./FooterPage";

const HomePage = () => {
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
            position: "relative"
          }}
        >
          <Grid>
            <Booking />
          </Grid>
          <Grid>
            <PhotoSlide />
          </Grid>
        </Grid>
        <Grid>
          <Nearby />
        </Grid>
      </Container>
      <FooterPage />
    </div>
  );
};

export default HomePage;
