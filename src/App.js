import "./App.css";
import * as React from "react";
import Home from "./HomePage";
import NavBar from "./NavBar";
import Login from "./LoginPage";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nearby from "./NearbyPage";
import UpdateLogin from "./UpdateLogin";

const App = () => {
	const [isModalOpen, setModalOpen] = React.useState(false);
	const handleModalOpen = () => setModalOpen(true);
	const handleModalClose = () => setModalOpen(false);

	return (
		<BrowserRouter>
			<div>
				<NavBar handleSetModalOpen={handleModalOpen} />
				<Login open={isModalOpen} close={setModalOpen} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Nearby" element={<Nearby />} />
					<Route path="/Login" element={<UpdateLogin />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
