import { Dispatch, FC, SetStateAction, useState } from "react";
import "./styles";
import NavBar from "./components/NavBar";
import FlashCards from "./components/FlashCards";
import Options from "./components/Options";
import { User } from "./types";

interface wrapperProps {
	setSignedInUser: Dispatch<SetStateAction<User>>;
}

const Wrapper: FC<wrapperProps> = ({ setSignedInUser }) => {
	const [isFlipped, SetIsFlipped] = useState<boolean>(false);
	const [isDeleteSelected, setIsDeleteSelected] = useState<boolean>(false);
	const [addCard, setAddCard] = useState<boolean>(false);
	const [editSelected, setEditSelected] = useState<boolean>(false);

	return (
		<div className={"container"}>
			<div className="header">
				<header>
					<NavBar setSignedInUser={setSignedInUser} />
					<Options
						isFlipped={isFlipped}
						SetIsFlipped={SetIsFlipped}
						isDeleteSelected={isDeleteSelected}
						setIsDeleteSelected={setIsDeleteSelected}
						addCard={addCard}
						setAddCard={setAddCard}
						setEditSelected={setEditSelected}
					/>
				</header>
			</div>
			<div className="body">
				<div className="content">
					<main>
						<FlashCards
							isFlipped={isFlipped}
							isDeleteSelected={isDeleteSelected}
							addCard={addCard}
							setAddCard={setAddCard}
							editSelected={editSelected}
							setEditSelected={setEditSelected}
						/>
					</main>
					<footer className="footer">
						<p>© 2024 MyFlashcards</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
