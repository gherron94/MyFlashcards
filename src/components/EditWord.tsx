import { Dispatch, FC, SetStateAction, useState } from "react";
import axios from "axios";

interface EditWordProps {
	wordidNum: number;
	englishToEdit: string;
	tlToEdit: string;
	editSelected: boolean;
	setEditSelected: Dispatch<SetStateAction<boolean>>;
}

const EditWord: FC<EditWordProps> = ({
	wordidNum,
	tlToEdit,
	englishToEdit,
	editSelected,
	setEditSelected,
}) => {
	const [updateWordEnglish, setUpdateWordEnglish] = useState<string>("");
	const [updateWordTL, setUpdateWordTL] = useState<string>("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		if (updateWordEnglish && updateWordTL) {
			axios.patch(
				`https://language-app-backend.onrender.com/api/words/${wordidNum}`,
				{ english_word: updateWordEnglish, tl_word: updateWordTL }
			);

			setUpdateWordEnglish("");
			setUpdateWordTL("");
			setEditSelected(!editSelected);
		}
	};

	const handleOnChangeEnglish = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUpdateWordEnglish(event.currentTarget.value);
	};

	const handleOnChangeTarget = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setUpdateWordTL(event.currentTarget.value);
	};

	return (
		<div className="newWord">
			<h3>Edit Flash Card</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="englishWord">Word in English: </label>
				<input
					type="text"
					value={updateWordEnglish}
					onChange={handleOnChangeEnglish}
					name="englshWord"
					id="englshWord"
					placeholder={englishToEdit}
				></input>
				<label htmlFor="targetLWord">Word in Portuguese: </label>
				<input
					value={updateWordTL}
					type="text"
					onChange={handleOnChangeTarget}
					name="targetLWord"
					id="targetLWord"
					placeholder={tlToEdit}
				></input>

				<button>Update Card</button>
			</form>
		</div>
	);
};

export default EditWord;
