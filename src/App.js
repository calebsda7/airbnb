import "./App.css";
import * as React from "react";
import Home from "./HomePage";
import NavBar from "./NavBar";
import Login from "./LoginPage";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nearby from "./NearbyPage";

function App() {
	const [isModalOpen, setModalOpen] = React.useState(false);
	const handleModalOpen = () => setModalOpen(true);
	const handleModalClose = () => setModalOpen(false);

	return (
		<div>
			<Router>
				<NavBar handleSetModalOpen={handleModalOpen} />
				<Login open={isModalOpen} onClose={handleModalClose} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Nearby" element={<Nearby />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
