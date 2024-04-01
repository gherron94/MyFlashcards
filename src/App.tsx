import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles";
import Home from "./components/Home";
import Wrapper from "./wrappe";
import SignInPage from "./SignInPage";
import SignUpForm from "./components/SignUpForm";

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route index element={<Navigate to="/sign-in" replace />} />
				<Route path="/home" element={<Home />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/sign-up" element={<SignUpForm />} />
				<Route path="/flash-cards" element={<Wrapper />} />
			</Routes>
		</>
	);
};

export default App;
