import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// import components
import Home from "./HomePage";
import Nearby from "./NearbyPage";
import NavBar from "./NavBar";
import NearbyWall from "./NearbyWallComponents/NearbyWall";

const rootElement = document.getElementById("root");

render(
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/home" element={<Home />} />
			<Route path="/nearby" element={<NearbyWall />} />
			{/* <Route path="/login" element={<UpdateLogin />} /> */}
			<Route
				path="*"
				element={
					<main style={{ padding: "1rem" }}>
						<p>There's nothing here!</p>
					</main>
				}
			/>
		</Routes>
	</BrowserRouter>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
