import { FC, Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { User } from "./types";

interface SignInPageProps {
	setSignedInUser: Dispatch<SetStateAction<User>>;
}

const SignInPage: FC<SignInPageProps> = ({ setSignedInUser }) => {
	return (
		<>
			<div className="signin-container">
				<header>
					<div className="sign-title">
						<h1>MyFlashcards</h1>
					</div>
					<div className="sign-message">
						<h2>
							Simple, sleek, and<br></br> always at your fingertips
						</h2>
					</div>
				</header>
				<main>
					<div className="sign-buttons">
						<NavLink to="/sign-in-form">
							<button>Sign In</button>
						</NavLink>
						<NavLink to="/sign-up-form">
							<button>Sign Up</button>
						</NavLink>
					</div>
					<div className="guest-button">
						<NavLink to="/home">
							<button
								onClick={() => {
									setSignedInUser((currentUser) => {
										return { ...currentUser, username: "Guest" };
									});
								}}
							>
								Use as Guest
							</button>
						</NavLink>
					</div>
				</main>
			</div>
		</>
	);
};

export default SignInPage;
