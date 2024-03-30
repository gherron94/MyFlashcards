import { FC } from "react";
import axios from "axios";

interface CardsProps {
	firstCard: string;
	secondCard: string;
	word_id: number;
	isDeleteSelected: boolean;
}

const Cards: FC<CardsProps> = ({
	word_id,
	firstCard,
	secondCard,
	isDeleteSelected,
}) => {
	const handleOnClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		const wordId = event.currentTarget.value;
		axios.delete(
			`https://language-app-backend.onrender.com/api/words/${wordId}`
		);
	};

	return (
		<>
			<li className="flashCardContainer">
				<div className="flashCard" key={firstCard}>
					<div className="flashCardInner">
						<div className="flash-card-TL">
							<p>{firstCard}</p>
						</div>
						<div className="flash-card-English">
							<p>{secondCard}</p>
						</div>
					</div>
				</div>
				{isDeleteSelected ? (
					<div>
						<button
							onClick={handleOnClick}
							value={word_id}
							className="deleteButton"
						>
							Delete card
						</button>
					</div>
				) : null}
			</li>
		</>
	);
};

export default Cards;
