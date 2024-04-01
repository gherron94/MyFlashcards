import { FC } from "react";
import { NavLink } from "react-router-dom";

const SignInPage: FC = () => {
	return (
		<>
			<div className="signin-container">
				<header>
					<div className="sign-title">
						<h1>My Flashcards</h1>
					</div>
					<div className="sign-message">
						<h2>
							Simple, sleek, and<br></br> always at your fingertips
						</h2>
					</div>
				</header>
				<main>
					<div className="sign-buttons">
						<button>Sign In</button>
						<button>Sign Up</button>
					</div>
					<div className="guest-button">
						<button>
							{" "}
							<NavLink to="/home">Use as Guest</NavLink>
						</button>
					</div>
				</main>
			</div>
		</>
	);
};

export default SignInPage;
