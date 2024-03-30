import { FC, useState } from "react";
import axios from "axios";

const Form: FC = () => {
	const [newWordEnglish, setNewWordEnglish] = useState<string>("");
	const [newWordTL, setNewWordTL] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (newWordEnglish && newWordTL) {
			axios.post("https://language-app-backend.onrender.com/api/words", {
				tl_word: newWordTL,
				english_word: newWordEnglish,
			});
			setNewWordEnglish("");
			setNewWordTL("");
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
				<button>Add Card</button>
			</form>
		</div>
	);
};

export default Form;
