import { FC, useEffect, useState } from "react";
import axios from "axios";

const SignUpForm: FC = () => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [age, setAge] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		axios.post("https://language-app-backend.onrender.com/api/users", {
			username: username,
			email: email,
			password: password,
			age: Number(age),
		});

		setUsername("");
		setEmail("");
		setPassword("");
		setAge("");
	};

	useEffect(() => {
		axios
			.get("https://language-app-backend.onrender.com/api/users")
			.then(({ data }) => {
				console.log(data.users);
			});
	}, []);

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
							}}
							value={username}
							type="text"
							id="username"
							placeholder="Enter your username..."
							required
						/>
						<label id="email-label" htmlFor="email">
							Email:
						</label>
						<input
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setEmail(event.currentTarget.value);
							}}
							value={email}
							type="email"
							id="email"
							placeholder="Enter your email..."
							required
						/>
						<label id="password-label" htmlFor="password">
							Password:
						</label>
						<input
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setPassword(event.currentTarget.value);
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
							}}
							value={age}
							type="number"
							min="18"
							max="120"
							id="number"
							placeholder="Enter your age..."
						/>
					</fieldset>
					{/* <fieldset>
						<label htmlFor="dropdown">How did you hear about us?</label>
						<select id="dropdown">
							<option value="">select</option>
							<option value="1">Friend/Family</option>
							<option value="2">Our website</option>
							<option value="3">Social Media</option>
							<option value="4">Google</option>
							<option value="5">Other</option>
						</select>
					</fieldset>
					<fieldset>
						<legend>
							Which of the below do you use?{" "}
							<small>(select all that apply)</small>
						</legend>
						<label htmlFor="1">
							<input
								id="1"
								className="inline"
								value="1"
								type="checkbox"
								name="1"
							/>
							Facebook
						</label>
						<label htmlFor="2">
							<input
								id="2"
								className="inline"
								value="2"
								type="checkbox"
								name="2"
							/>
							Twitter
						</label>
						<label htmlFor="3">
							<input
								id="3"
								className="inline"
								value="3"
								type="checkbox"
								name="3"
							/>
							Instagtam
						</label>
						<label htmlFor="4">
							<input
								id="4"
								className="inline"
								value="4"
								type="checkbox"
								name="4"
							/>
							Reddit
						</label>
						<label htmlFor="5">
							<input
								id="5"
								className="inline"
								value="5"
								type="checkbox"
								name="5"
							/>
							Whatsapp
						</label>
					</fieldset> */}
					<button type="submit" id="submit" name="submit">
						Submit
					</button>
				</form>
			</main>
		</>
	);
};

export default SignUpForm;
