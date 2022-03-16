import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Img = styled("img")({
	width: 600,
	height: 600,
	objectFit: "cover",
	objectPosition: 100 % 0,
	borderRadius: 10,
	margin: "auto",
	maxWidth: "100%",
	maxHeight: "100%",
	display: "block",
});

export default function Nearby() {
	return (
		<Box sx={{ position: "relative" }}>
			<Grid container>
				<Typography variant="h3" gutterBottom component="div">
					Discover San Diego Experiences
				</Typography>
				<Grid container sx={{ flexGrow: 1 }} spacing={{ xs: 2, md: 3 }}>
					<Grid item xs={12} md={6}>
						<Img src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></Img>
						<ArrowForwardIosIcon />
					</Grid>
					<Grid item xs={12} md={6}>
						<Img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"></Img>
						<ArrowForwardIosIcon />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
