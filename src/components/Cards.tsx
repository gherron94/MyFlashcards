import { FC, useState } from "react";

interface CardsProps {
	words: [string, string];
}

const Cards: FC<CardsProps> = ({ words }) => {
	const [isFlipped, SetIsFlipped] = useState<boolean>(false);

	return (
		<li
			className="flashCard"
			key={words[1]}
			onClick={() => {
				SetIsFlipped(!isFlipped);
			}}
		>
			{isFlipped ? <p>{words[1]}</p> : <p>{words[0]}</p>}
		</li>
	);
};

export default Cards;
