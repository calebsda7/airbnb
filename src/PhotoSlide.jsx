import React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid } from "@mui/material";

export default function PhotoSlide() {
	return (
		<Box
			sx={{
				borderRadius: 2,
				p: 0,
				position: "absolute",
				top: 50,
				left: "25%",
				zIndex: "1",
			}}
		>
			<Grid container>
				<ImageListItem>
					<img
						style={{ borderRadius: 10 }}
						src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80"
						alt=""
					/>
				</ImageListItem>
			</Grid>
		</Box>
	);
}
