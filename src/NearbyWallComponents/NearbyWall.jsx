import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import NearbyCard from "./NearbyCard";
import data from "../nearByData";
import usePagination from "./Pagination";

const NearbyWall = () => {
	let [page, setPage] = useState(1);
	const PER_PAGE = 12;

	const count = Math.ceil(data.length / PER_PAGE);
	const _DATA = usePagination(data, PER_PAGE);

	const handleChange = (e, p) => {
		setPage(p);
		_DATA.jump(p);
	};

	return (
		<Container
			sx={{
				position: "relative",
				marginTop: 10,
				flexGrow: 1,
			}}
		>
			<Grid>
				<Typography variant="h2" component="div" gutterBottom>
					Explore More Fun Places
				</Typography>
			</Grid>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				direction="row"
				justifyContent="center"
			>
				{_DATA.currentData().map((content) => (
					<Grid item xs={12} md={4} lg={4}>
						<NearbyCard title={content.title} img={content.image} />
					</Grid>
				))}
			</Grid>
			<Grid
				container
				sx={{ justifyContent: "center", marginTop: 10, marginBottom: 7 }}
			>
				<Stack spacing={2}>
					<Pagination
						count={count}
						page={page}
						showFirstButton
						showLastButton
						onChange={handleChange}
					/>
				</Stack>
			</Grid>
		</Container>
	);
};

export default NearbyWall;
