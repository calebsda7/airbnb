import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography } from "@mui/material";

const FooterPage = () => {
	const year = new Date().getFullYear;

	return (
		<Box
			sx={{
				backgroundColor: "lightblue",
				marginTop: 10,
				paddingBlock: 3,
				padding: 5,
				position: "relative",
			}}
		>
			<Grid
				container
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={2}
				sx={{ flexGrow: 1 }}
			>
				<Grid item xs={4} md={4}>
					<Typography>© {year} XXXX</Typography>
				</Grid>
				<Grid item xs={4} md={4}>
					<FacebookIcon />
					<InstagramIcon />
					<TwitterIcon />
				</Grid>
			</Grid>
		</Box>
	);
};

export default FooterPage;
