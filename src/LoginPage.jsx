import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import GoogleLogin from "react-google-login";
import GoogleIcon from "@mui/icons-material/Google";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 400,
	bgcolor: "background.paper",
	border: 0,
	borderRadius: 4,
	boxShadow: 20,
	p: 4,
};

export default function Login({ open, close }) {
	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	};
	const handleClose = () => {
		close(false);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Grid
						container
						alignItems="center"
						justifyContent="center"
						direction="column"
						spacing={4}
					>
						<Grid item>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Choose a Login Method
							</Typography>
						</Grid>
						<Grid item>
							<GoogleLogin
								clientId="453775287476-62hr1aq8s4hm8t6inqinm5nnve42bf6b.apps.googleusercontent.com"
								render={(renderProps) => (
									<Button
										variant="contained"
										size="large"
										sx={{
											backgroundColor: "#de5246",
										}}
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										<GoogleIcon />
										<Typography component="div" sx={{ marginLeft: 2 }}>
											Google
										</Typography>
									</Button>
								)}
								buttonText="Login"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={"single_host_origin"}
							/>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
}
