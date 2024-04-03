import { FC, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

interface SignInFormProps {
	setSignedInUser: Dispatch<SetStateAction<User>>;
}

const SignInForm: FC<SignInFormProps> = ({ setSignedInUser }) => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [usernameDoesNotExist, setUsernameDoesNotExist] =
		useState<boolean>(false);
	const [incorrectPassword, setincorrectPassword] = useState<boolean>(false);

	let navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		axios
			.get(`https://language-app-backend.onrender.com/api/users/${username}`)
			.then(({ data }) => {
				if (data.user.password !== password) {
					setincorrectPassword(true);
				} else {
					setSignedInUser((currentUser) => {
						return { ...currentUser, username: username };
					});
					return navigate("/home");
				}
			})
			.catch(({ response }) => {
				if (response.data.msg === "Username does not exist")
					setUsernameDoesNotExist(true);
			});

		setUsername("");
		setPassword("");
	};

	return (
		<>
			<header>
				<h1 id="title">Sign In</h1>
				<p id="description">Please sign in with your details</p>
			</header>
			<main>
				<form onSubmit={handleSubmit} id="survey-form">
					<fieldset>
						<label id="username-label" htmlFor="username">
							Username:
						</label>
						<input
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setUsername(event.currentTarget.value);
								setUsernameDoesNotExist(false);
								setincorrectPassword(false);
							}}
							value={username}
							type="text"
							id="username"
							placeholder="Enter your username..."
							required
						/>
						<label id="password-label" htmlFor="password">
							Password:
						</label>
						<input
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setPassword(event.currentTarget.value);
								setUsernameDoesNotExist(false);
								setincorrectPassword(false);
							}}
							value={password}
							type="password"
							id="password"
							placeholder="Enter your password..."
							required
						/>
					</fieldset>
					<button type="submit" id="submit" name="submit">
						Submit
					</button>
				</form>
				{usernameDoesNotExist ? (
					<p className="username-error">User does not exist</p>
				) : null}
				{incorrectPassword ? (
					<p className="username-error">Incorrect Password</p>
				) : null}
			</main>
		</>
	);
};

export default SignInForm;
