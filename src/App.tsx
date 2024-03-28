import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import FlashCards from "./components/FlashCards";

const App: FC = () => {
	return (
		<div className={"container"}>
			<div className="header">
				<header>
					<Header />
					<NavBar />
				</header>
			</div>
			<div className="body">
				<div className="content">
					<div className="sidebar"></div>
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/flash-cards" element={<FlashCards />} />
						</Routes>
					</main>
				</div>
			</div>
			<footer className="footer">
				<p>© 2024 Language App</p>
			</footer>
		</div>
	);
};

export default App;
