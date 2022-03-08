import * as React from "react";

export default function UpdateLogin() {
	return (
		<div className="login">
			<h1 className="loginTitle">Choose a Login Method</h1>
			<div className="wrapper">
				<div className="left">
					<div className="loginButton google">
						<img src="" alt="" className="icon" />
						Google
					</div>
					<div className="loginButton facebook">
						<img src="" alt="" className="icon" />
						facebook
					</div>
					<div className="loginButton instagram">
						<img src="" alt="" className="icon" />
						instagram
					</div>
				</div>
				<div className="center">
					<div className="line" />
					<div className="or">OR</div>
				</div>
				<div className="right">
					<input type="text" placeholder="Username" />
					<input type="text" placeholder="Password" />
					<button className="submit">Login</button>
				</div>
			</div>
		</div>
	);
}
