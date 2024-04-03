import { FC, useContext } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

const Home: FC = () => {
	const signedInUser = useContext(UserContext);
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
							<h2 className="signed-in-user-home">
								You are signed in as {signedInUser.username}
							</h2>
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
