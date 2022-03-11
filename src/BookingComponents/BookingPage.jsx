import * as React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

//Pages
import SelectAdult from "./SelectAdults";
import SelectChildren from "./SelectChildren";

export default function Booking() {
	return (
		<Paper
			sx={{
				p: 3,
				margin: "auto",
				maxWidth: 350,
				flexGrow: 1,
				top: 100,
				left: "2%",
				position: "absolute",
				zIndex: 2,
				backgroundColor: (theme) =>
					theme.palette.mode === "dark" ? "#1A2027" : "#fff",
			}}
			elevation={6}
		>
			<Grid container direction="column" spacing={2}>
				<Grid item>
					<Typography
						gutterBottom
						variant="subtitle1"
						component="div"
						sx={{ fontSize: 35, fontWeight: "500" }}
					>
						Book Now
					</Typography>
					<Typography
						variant="body2"
						gutterBottom
						sx={{ fontSize: 17, color: "gray" }}
					>
						Discover the perfect home for any trip.
					</Typography>
				</Grid>

				<Grid
					item
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						"& > *": {
							m: 1,
						},
					}}
				>
					<ButtonGroup
						disableElevation
						fullWidth
						aria-label="text button group"
						variant="text"
					>
						<Button>
							<SelectAdult />
						</Button>
						<Divider orientation="vertical" variant="middle" flexItem />
						<Button>
							<SelectChildren />
						</Button>
					</ButtonGroup>

					<ButtonGroup
						disableElevation
						fullWidth
						aria-label="text button group"
						variant="text"
					>
						<Button>
							<SelectAdult />
						</Button>
						<Divider orientation="vertical" variant="middle" flexItem />
						<Button>
							<SelectChildren />
						</Button>
					</ButtonGroup>
				</Grid>

				<Grid item>
					<Button
						sx={{ cursor: "pointer" }}
						startIcon={<SearchIcon />}
						variant="contained"
						disableElevation
						fullWidth
					>
						Book
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
}
