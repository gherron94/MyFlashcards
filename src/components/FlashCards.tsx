import { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Words } from "../types";
import axios from "axios";
import Cards from "./Cards";
import AddCards from "./AddCards";

const FlashCards: FC = () => {
	const [wordList, setWordList] = useState<Words[]>([]);
	const [cardsCount, setCardsCount] = useState<number>();
	const [isFlipped, SetIsFlipped] = useState<boolean>(false);
	const [isDeleteSelected, setIsDeleteSelected] = useState<boolean>(false);
	const [addCard, setAddCard] = useState<boolean>(false);

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
			<h1>My Flash Cards</h1>
			{isFlipped ? (
				<div
					className="editCards"
					onClick={() => {
						SetIsFlipped(!isFlipped);
					}}
				>
					Change to target language
				</div>
			) : (
				<div
					className="editCards"
					onClick={() => {
						SetIsFlipped(!isFlipped);
					}}
				>
					Change to English
				</div>
			)}
			<div
				className="editCards"
				onClick={() => {
					setIsDeleteSelected(!isDeleteSelected);
				}}
			>
				<p>Edit Cards</p>
			</div>
			<div
				className="editCards"
				onClick={() => {
					setAddCard(!addCard);
				}}
			>
				<p>Add Card</p>
			</div>
			{addCard ? <AddCards setAddCard={setAddCard} addCard={addCard} /> : null}
			{isFlipped ? (
				<ul className="flashCardFlexContainer">
					{wordList.map((words, index) => (
						<Cards
							key={index}
							firstCard={words.english_word}
							secondCard={words.tl_word}
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
							firstCard={words.tl_word}
							secondCard={words.english_word}
							isDeleteSelected={isDeleteSelected}
							word_id={words.word_id}
						/>
					))}
				</ul>
			)}
			<h3 className="total">Total Flash Cards: {cardsCount}</h3>
		</>
	);
};

export default FlashCards;
