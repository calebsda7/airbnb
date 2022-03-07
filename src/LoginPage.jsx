import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import GoogleLogin from "react-google-login";

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

export default function Login({ open, onClose }) {
	const responseGoogle = (response) => {
		console.log(response);
		console.log(response.profileObj);
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Welcome to Bin's House
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
					<GoogleLogin
						clientId="453775287476-62hr1aq8s4hm8t6inqinm5nnve42bf6b.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				</Box>
			</Modal>
		</div>
	);
}
