import { FC, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignUpForm: FC = () => {
	const [username, setUsername] = useState<string>("");
	// const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [age, setAge] = useState<string>("");
	const [usernameExists, setUsernameExists] = useState<boolean>(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		axios
			.post("https://language-app-backend.onrender.com/api/users", {
				username: username,
				password: password,
				age: Number(age),
			})
			.catch(({ response }) => {
				if (response.data.msg === "Username already exists")
					setUsernameExists(true);
			});

		if (!usernameExists) {
			{
				<NavLink to="/home"></NavLink>;
			}
		}
		axios
			.get("https://language-app-backend.onrender.com/api/users")
			.then(({ data }) => {
				console.log(data);
			});
		console.log(usernameExists);

		setUsername("");
		setPassword("");
		setAge("");
	};

	return (
		<>
			<header>
				<h1 id="title">Sign up Form</h1>
				<p id="description">Please fill out this Sign-up form</p>
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
								setUsernameExists(false);
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
								setUsernameExists(false);
							}}
							value={password}
							type="password"
							id="password"
							placeholder="Enter your password..."
							required
						/>
						<label id="number-label" htmlFor="number">
							Age:
						</label>
						<input
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setAge(event.currentTarget.value);
								setUsernameExists(false);
							}}
							value={age}
							type="number"
							min="18"
							max="120"
							id="number"
							placeholder="Enter your age..."
						/>
					</fieldset>
					<button type="submit" id="submit" name="submit">
						Submit
					</button>
				</form>
				{usernameExists ? (
					<p className="username-error">Username already exists</p>
				) : null}
			</main>
		</>
	);
};

export default SignUpForm;
