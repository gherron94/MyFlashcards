import { FC, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles";
import Home from "./components/Home";
import Wrapper from "./wrappe";
import SignInPage from "./SignInPage";
import SignUpForm from "./components/SignUpForm";
import UserContext from "./UserContext";
import { User } from "./types";

const App: FC = () => {
	const [signedInUser, setSignedInUser] = useState<User>({
		username: "Guest",
	});

	console.log(signedInUser.username);
	return (
		<>
			<UserContext.Provider value={signedInUser}>
				<Routes>
					<Route index element={<Navigate to="/sign-in" replace />} />
					<Route path="/home" element={<Home />} />
					<Route path="/sign-in" element={<SignInPage />} />
					<Route
						path="/sign-up"
						element={<SignUpForm setSignedInUser={setSignedInUser} />}
					/>
					<Route path="/flash-cards" element={<Wrapper />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
};

export default App;
