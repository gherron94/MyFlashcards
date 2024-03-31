import { Dispatch, FC, SetStateAction, useState } from "react";
import axios from "axios";

interface CardsProps {
	firstCard: string;
	secondCard: string;
	word_id: number;
	isDeleteSelected: boolean;
	editSelected: boolean;
	setEditSelected: Dispatch<SetStateAction<boolean>>;
	wordidNum: number;
	setWordIdNum: Dispatch<SetStateAction<number>>;
	englishToEdit: string;
	setEnglishToEdit: Dispatch<SetStateAction<string>>;
	tlToEdit: string;
	setTlToEdit: Dispatch<SetStateAction<string>>;
}

const Cards: FC<CardsProps> = ({
	// wordidNum,
	setWordIdNum,
	word_id,
	firstCard,
	secondCard,
	isDeleteSelected,
	editSelected,
	setEditSelected,
	setEnglishToEdit,
	// englishToEdit,
	// wordidNum,
	// tlToEdit,
	setTlToEdit,
}) => {
	const [flip, setFlip] = useState<Boolean>(false);

	const handleOnClickDelete = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		const wordId = event.currentTarget.value;
		axios.delete(
			`https://language-app-backend.onrender.com/api/words/${wordId}`
		);
	};

	const handleOnClickEdit = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		setWordIdNum(Number(event.currentTarget.value));
		axios
			.get(
				`https://language-app-backend.onrender.com/api/words/${event.currentTarget.value}`
			)
			.then(({ data }) => {
				setEnglishToEdit(data.word.english_word);
				setTlToEdit(data.word.tl_word);
			});
		setEditSelected(!editSelected);
	};

	return (
		<>
			<li className="flashCardContainer">
				<div
					className={flip ? "flashCard flashCard-flip" : "flashCard"}
					key={firstCard}
					onClick={() => {
						setFlip(!flip);
					}}
				>
					<div className="flashCardInner">
						<div className="flash-card-English">
							<p>{firstCard}</p>
						</div>
						<div className="flash-card-TL">
							<p>{secondCard}</p>
						</div>
					</div>
				</div>
				{isDeleteSelected ? (
					<div className="edit-cards">
						<div>
							<button
								value={word_id}
								onClick={handleOnClickEdit}
								className="editButton"
							>
								Edit
							</button>
						</div>
						<div>
							<button
								onClick={handleOnClickDelete}
								value={word_id}
								className="deleteButton"
							>
								Delete
							</button>
						</div>
					</div>
				) : null}
			</li>
		</>
	);
};

export default Cards;
