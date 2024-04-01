import { FC } from "react";
import { NavLink } from "react-router-dom";

const SignInPage: FC = () => {
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
						<button>Sign In</button>
						<NavLink to="/sign-up" target="_blank">
							<button>Sign Up</button>
						</NavLink>
					</div>
					<div className="guest-button">
						<NavLink to="/home">
							<button>Use as Guest</button>
						</NavLink>
					</div>
				</main>
			</div>
		</>
	);
};

export default SignInPage;
