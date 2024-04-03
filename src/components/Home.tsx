import { FC, useContext, Dispatch, SetStateAction } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import { User } from "../types";

interface HomeProps {
	setSignedInUser: Dispatch<SetStateAction<User>>;
}

const Home: FC<HomeProps> = ({ setSignedInUser }) => {
	const signedInUser = useContext(UserContext);
	return (
		<>
			<div className={"container"}>
				<div className="header">
					<header>
						<NavBar setSignedInUser={setSignedInUser} />
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
							<p>© 2024 MyFlashcards</p>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
