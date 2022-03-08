import React from "react";

export default function Nearby() {
	return (
		<div className="nearby">
			<h1 className="nearbyTitle">Discover San Diego Experiences</h1>
			<div className="imgList">
				<div className="leftImg">
					<img
						className="nearbyImg"
						src="https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						alt=""
					></img>
				</div>
				<div className="rightImg">
					<img
						className="nearbyImg"
						src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
						alt=""
					></img>
				</div>
			</div>
		</div>
	);
}
