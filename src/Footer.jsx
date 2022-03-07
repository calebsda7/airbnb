import { Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";

export default function Footer() {
	const year = new Date().getFullYear;

	return (
		<Typography variant="body1" component="div">
			<Container
				maxWidth="lg"
				sx={{
					paddingLeft: 24,
					paddingRight: 24,
					bottom: 0,
					width: "100%",
					height: "2.5rem",
					position: "absolute",
					textAlign: "center",
				}}
			>
				<Grid container>
					<Box>
						<Typography>© {year} XXXX</Typography>
					</Box>
					<Box>
						<FacebookIcon />
						<InstagramIcon />
						<TwitterIcon />
					</Box>
				</Grid>
			</Container>
		</Typography>
	);
}
