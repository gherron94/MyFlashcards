import {
	Dispatch,
	FC,
	useContext,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import UserContext from "./UserContext";
import { Words } from "./types";
import axios from "axios";
import Cards from "./Cards";
import AddCards from "./AddCards";
import EditWord from "./EditWord";

interface FlashCardsProps {
	isFlipped: boolean;
	isDeleteSelected: boolean;
	addCard: boolean;
	setAddCard: Dispatch<SetStateAction<boolean>>;
	editSelected: boolean;
	setEditSelected: Dispatch<SetStateAction<boolean>>;
}

const FlashCards: FC<FlashCardsProps> = ({
	isFlipped,
	isDeleteSelected,
	addCard,
	setAddCard,
	editSelected,
	setEditSelected,
}) => {
	const signedInUser = useContext(UserContext);

	const [wordList, setWordList] = useState<Words[]>([]);
	const [cardsCount, setCardsCount] = useState<number>();
	const [wordidNum, setWordIdNum] = useState<number>(0);
	const [englishToEdit, setEnglishToEdit] = useState<string>("");
	const [tlToEdit, setTlToEdit] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [currentLanguage, setCurrentLanguage] = useState<string>("");

	useEffect(() => {
		axios
			.get("https://language-app-backend.onrender.com/api/words")
			.then(({ data }) => {
				const filteredWords = data.words.filter((wordObj: any) => {
					return signedInUser.username === wordObj.account_owner;
				});
				setWordList(filteredWords);
				setIsLoading(false);
			});
		setCardsCount(wordList.length);
	}, [wordList]);

	useEffect(() => {
		isFlipped
			? setCurrentLanguage("English")
			: setCurrentLanguage("Portuguese");
	});

	return (
		<>
			<p className="welcome">Welcome {signedInUser.username}!</p>
			{isLoading ? (
				<div className="loading">Loading Cards...</div>
			) : (
				<p className="welcome">
					You are learning {cardsCount} words in {currentLanguage}
				</p>
			)}

			{addCard ? <AddCards setAddCard={setAddCard} addCard={addCard} /> : null}
			{editSelected ? (
				<EditWord
					wordidNum={wordidNum}
					tlToEdit={tlToEdit}
					englishToEdit={englishToEdit}
					setEditSelected={setEditSelected}
					editSelected={editSelected}
				/>
			) : null}
			{isFlipped ? (
				<ul className="flashCardFlexContainer">
					{wordList.map((words, index) => (
						<Cards
							key={index}
							firstCard={words.tl_word}
							secondCard={words.english_word}
							word_id={words.word_id}
							setWordIdNum={setWordIdNum}
							isDeleteSelected={isDeleteSelected}
							editSelected={editSelected}
							setEditSelected={setEditSelected}
							setEnglishToEdit={setEnglishToEdit}
							setTlToEdit={setTlToEdit}
						/>
					))}
				</ul>
			) : (
				<ul className="flashCardFlexContainer">
					{wordList.map((words, index) => (
						<Cards
							key={index}
							firstCard={words.english_word}
							secondCard={words.tl_word}
							word_id={words.word_id}
							setWordIdNum={setWordIdNum}
							isDeleteSelected={isDeleteSelected}
							editSelected={editSelected}
							setEditSelected={setEditSelected}
							setEnglishToEdit={setEnglishToEdit}
							setTlToEdit={setTlToEdit}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export default FlashCards;
