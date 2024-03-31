import { Dispatch, FC, SetStateAction, useState } from "react";
import axios from "axios";

interface AddCardProps {
	addCard: boolean;
	setAddCard: Dispatch<SetStateAction<boolean>>;
}

const AddCards: FC<AddCardProps> = ({ setAddCard, addCard }) => {
	const [newWordEnglish, setNewWordEnglish] = useState<string>("");
	const [newWordTL, setNewWordTL] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (newWordEnglish && newWordTL) {
			axios.post("https://language-app-backend.onrender.com/api/words", {
				english_word: newWordEnglish,
				tl_word: newWordTL,
			});
			setNewWordEnglish("");
			setNewWordTL("");
			setAddCard(!addCard);
		}
	};

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

	return (
		<div className="newWord">
			<h3>Add New Flash Card</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="englishWord">Word in English: </label>
				<input
					type="text"
					value={newWordEnglish}
					onChange={handleOnChangeEnglish}
					name="englshWord"
					id="englshWord"
					placeholder="e.g. House"
				></input>
				<label htmlFor="targetLWord">Word in Portuguese: </label>
				<input
					value={newWordTL}
					type="text"
					onChange={handleOnChangeTarget}
					name="targetLWord"
					id="targetLWord"
					placeholder="e.g. A Casa"
				></input>

				<button>Add Card</button>
			</form>
		</div>
	);
};

export default AddCards;
