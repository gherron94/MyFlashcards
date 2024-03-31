import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FlashCards from "./components/FlashCards";
import Options from "./components/Options";
// import SideBar from "./components/SideBar";

const App: FC = () => {
	const [isFlipped, SetIsFlipped] = useState<boolean>(false);
	const [isDeleteSelected, setIsDeleteSelected] = useState<boolean>(false);
	const [addCard, setAddCard] = useState<boolean>(false);

	return (
		<div className={"container"}>
			<div className="header">
				<header>
					<NavBar />
					<Options
						isFlipped={isFlipped}
						SetIsFlipped={SetIsFlipped}
						isDeleteSelected={isDeleteSelected}
						setIsDeleteSelected={setIsDeleteSelected}
						addCard={addCard}
						setAddCard={setAddCard}
					/>
				</header>
			</div>
			<div className="body">
				{/* <div className="sidebar">
					<SideBar />
				</div> */}
				<div className="content">
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/flash-cards"
								element={
									<FlashCards
										isFlipped={isFlipped}
										isDeleteSelected={isDeleteSelected}
										addCard={addCard}
										setAddCard={setAddCard}
									/>
								}
							/>
						</Routes>
					</main>
					<footer className="footer">
						<p>© 2024 Language App</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default App;
