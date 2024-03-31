import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Words } from "../types";
import axios from "axios";
import Cards from "./Cards";
import AddCards from "./AddCards";

interface FlashCardsProps {
	isFlipped: boolean;
	isDeleteSelected: boolean;
	addCard: boolean;
	setAddCard: Dispatch<SetStateAction<boolean>>;
}

const FlashCards: FC<FlashCardsProps> = ({
	isFlipped,
	isDeleteSelected,
	addCard,
	setAddCard,
}) => {
	const [wordList, setWordList] = useState<Words[]>([]);
	const [cardsCount, setCardsCount] = useState<number>();

	useEffect(() => {
		axios
			.get("https://language-app-backend.onrender.com/api/words")
			.then(({ data }) => {
				setWordList(data.words);
			});
		setCardsCount(wordList.length);
	}, [wordList]);

	return (
		<>
			{isFlipped ? (
				<p className="welcome">
					Welcome! You are learning {cardsCount} words in English
				</p>
			) : (
				<p className="welcome">
					Welcome! You are learning {cardsCount} words in Portuguese
				</p>
			)}
			{addCard ? <AddCards setAddCard={setAddCard} addCard={addCard} /> : null}
			{isFlipped ? (
				<ul className="flashCardFlexContainer">
					{wordList.map((words, index) => (
						<Cards
							key={index}
							firstCard={words.tl_word}
							secondCard={words.english_word}
							word_id={words.word_id}
							isDeleteSelected={isDeleteSelected}
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
							isDeleteSelected={isDeleteSelected}
							word_id={words.word_id}
						/>
					))}
				</ul>
			)}
		</>
	);
};

export default FlashCards;
