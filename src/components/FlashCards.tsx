import { FC, useState } from "react";

import Cards from "./Cards";

const FlashCards: FC = () => {
	// const [isFlipped, SetIsFlipped] = useState<boolean>(false);
	const [newWordEnglish, setNewWordEnglish] = useState<string>("");
	const [newWordTL, setNewWordTL] = useState<string>("");
	const [wordList, setWordList] = useState<[string, string][]>([
		["O Leão", "The Lion"],
		["O Tigre", "The Tiger"],
		["A Tartaruga", "The Turtle"],
		["A Formiga", "The Ant"],
		["O Elefante", "The Elephant"],
	]);

	return (
		<>
			<h1>My Flash Cards</h1>
			<div className="newWord">
				<h3>Add New Flash Card</h3>
				<form>
					<label htmlFor="englishWord">
						Word in English:
						<input type="text" name="englshWord" id="englshWord"></input>
					</label>
					<label htmlFor="targetLWord">
						Word in target language:
						<input type="text" name="targetLWord" id="targetLWord"></input>
					</label>
					<button>Add Card</button>
				</form>
			</div>
			<ul className="flashCardContainer">
				{wordList.map((words, index) => (
					<Cards key={index} words={words} />
				))}
			</ul>
		</>
	);
};

export default FlashCards;
