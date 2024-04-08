import { FC, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles";
import Home from "./components/Home";
import SignInPage from "./components/SignInPage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import UserContext from "./components/UserContext";

const App: FC = () => {
	let user = JSON.parse(localStorage.getItem("users") || "{}");

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
							signedInUser.username ? (
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
				</Routes>
			</UserContext.Provider>
		</>
	);
};

export default App;
