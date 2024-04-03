import { FC, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles";
import Home from "./components/Home";
import Wrapper from "./wrappe";
import SignInPage from "./SignInPage";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import UserContext from "./UserContext";
import { User } from "./types";

const App: FC = () => {
	const [signedInUser, setSignedInUser] = useState<User>({
		username: "Guest",
	});

	return (
		<>
			<UserContext.Provider value={signedInUser}>
				<Routes>
					<Route index element={<Navigate to="/sign-in" replace />} />
					<Route path="/home" element={<Home />} />
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
					<Route path="/flash-cards" element={<Wrapper />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
};

export default App;
