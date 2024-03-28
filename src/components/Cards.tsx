import { FC } from "react";

interface CardsProps {
	firstCard: string;
	secondCard: string;
}

const Cards: FC<CardsProps> = ({ firstCard, secondCard }) => {
	return (
		<li className="flashCard" key={firstCard}>
			<div className="flashCardInner">
				<div className="flash-card-TL">
					<p>{firstCard}</p>
				</div>
				<div className="flash-card-English">
					<p>{secondCard}</p>
				</div>
			</div>
		</li>
	);
};

export default Cards;
