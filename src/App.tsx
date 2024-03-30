import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FlashCards from "./components/FlashCards";
import AddCards from "./components/AddCards";
// import SideBar from "./components/SideBar";

const App: FC = () => {
	return (
		<div className={"container"}>
			<div className="header">
				<header>
					<NavBar />
				</header>
			</div>
			<div className="body">
				{/* <div className="sidebar">
					<SideBar />
				</div> */}
				<div className="content">
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/flash-cards" element={<FlashCards />} />
							<Route path="/new-card" element={<AddCards />} />
						</Routes>
					</main>
					<footer className="footer">
						<p>© 2024 Language App</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default App;
