import { FC, useEffect, useState } from "react";
import Cards from "./Cards";

const FlashCards: FC = () => {
	const [newWordEnglish, setNewWordEnglish] = useState<string>("");
	const [newWordTL, setNewWordTL] = useState<string>("");
	const [wordList, setWordList] = useState<[string, string][]>([
		["O Leão", "Lion"],
		["O Tigre", "Tiger"],
		["A Tartaruga", "Turtle"],
		["A Formiga", "Ant"],
		["O Elefante", "Elephant"],
	]);
	const [cardsCount, setCardsCount] = useState<number>();
	const [isFlipped, SetIsFlipped] = useState<boolean>(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (newWordEnglish && newWordTL) {
			setWordList((currentWordList): [string, string][] => {
				return [...currentWordList, [newWordTL, newWordEnglish]];
			});
			setNewWordEnglish("");
			setNewWordTL("");
		}
	};

	useEffect(() => {
		setCardsCount(wordList.length);
	}, [wordList]);

	const handleOnChangeEnglish = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setNewWordEnglish(event.currentTarget.value);
	};

	const handleOnChangeTarget = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setNewWordTL(event.currentTarget.value);
	};

	handleOnChangeEnglish;
	return (
		<>
			<h1>My Flash Cards</h1>
			<div className="newWord">
				<h3>Add New Flash Card</h3>
				<form onSubmit={handleSubmit}>
					<label htmlFor="englishWord">
						Word in English:
						<input
							type="text"
							value={newWordEnglish}
							onChange={handleOnChangeEnglish}
							name="englshWord"
							id="englshWord"
							placeholder="e.g. House"
						></input>
					</label>
					<label htmlFor="targetLWord">
						Word in target language:
						<input
							value={newWordTL}
							type="text"
							onChange={handleOnChangeTarget}
							name="targetLWord"
							id="targetLWord"
							placeholder="e.g. A Casa"
						></input>
					</label>
					<button>Add Card</button>
				</form>
			</div>
			<div
				onClick={() => {
					SetIsFlipped(!isFlipped);
				}}
			>
				Change to target language
			</div>{" "}
			{isFlipped ? (
				<ul className="flashCardContainer">
					{wordList.map((words, index) => (
						<Cards key={index} firstCard={words[0]} secondCard={words[1]} />
					))}
				</ul>
			) : (
				<ul className="flashCardContainer">
					{wordList.map((words, index) => (
						<Cards key={index} firstCard={words[1]} secondCard={words[0]} />
					))}
				</ul>
			)}
			<h3 className="total">Total Flash Cards: {cardsCount}</h3>
		</>
	);
};

export default FlashCards;
