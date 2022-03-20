import { Container, Grid } from "@mui/material";
import React from "react";
import NearbyCard from "./NearbyCard";
import data from "../nearByData";
import { useBusiness } from "../hooks/useBuisness";

const NearbyWall = () => {
	const [buisnesses, amountResults] = useBusiness();

	return (
		<Container sx={{ position: "relative", flexGrow: 1 }}>
			<Grid container spacing={3} direction="row">
				{data.map((content) => (
					<Grid item xs={12} md={6} lg={4}>
						<NearbyCard title={content.title} img={content.image} />
					</Grid>
				))}
				{/* {useBusiness.map((content) => (
					<Grid item xs={12} md={6} lg={4}>
						<NearbyCard key={content.id} title={content.buisnesses} img={content.image} />
					</Grid>
				))} */}
			</Grid>
		</Container>
	);
};

export default NearbyWall;
