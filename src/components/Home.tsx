import { FC } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Home: FC = () => {
	return (
		<>
			<div className={"container"}>
				<div className="header">
					<header>
						<NavBar />
					</header>
				</div>
				<div className="body">
					<div className="content">
						<main>
							<h1 className="home-title">Welcome to MyFlashcards</h1>
							<h2 className="home-intro">
								Click below to see your cards and begin learning!
							</h2>
							<NavLink to="/flash-cards">
								<button className="home-button">See My Cards</button>
							</NavLink>
						</main>
						<footer className="footer">
							<p>© 2024 Language App</p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
