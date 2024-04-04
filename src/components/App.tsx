import { FC, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "../styles";
import Home from "./Home";
import Wrapper from "./wrappe";
import SignInPage from "../SignInPage";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import UserContext from "./UserContext";

const App: FC = () => {
	let user = JSON.parse(localStorage.getItem("users") || "{}");

	if (!user.username) {
		user = { username: "Guest" };
	}

	const [signedInUser, setSignedInUser] = useState(user);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(signedInUser));
	}, [signedInUser]);

	return (
		<>
			<UserContext.Provider value={signedInUser}>
				<Routes>
					<Route
						index
						element={
							signedInUser.username.length ? (
								<Navigate to="/home" replace />
							) : (
								<Navigate to="/sign-in" replace />
							)
						}
					/>
					<Route
						path="/home"
						element={<Home setSignedInUser={setSignedInUser} />}
					/>
					<Route
						path="/sign-in"
						element={<SignInPage setSignedInUser={setSignedInUser} />}
					/>
					<Route
						path="/sign-in-form"
						element={<SignInForm setSignedInUser={setSignedInUser} />}
					/>
					<Route
						path="/sign-up-form"
						element={<SignUpForm setSignedInUser={setSignedInUser} />}
					/>
					<Route
						path="/flash-cards"
						element={<Wrapper setSignedInUser={setSignedInUser} />}
					/>
				</Routes>
			</UserContext.Provider>
		</>
	);
};

export default App;
