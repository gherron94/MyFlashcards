import { FC, Dispatch, SetStateAction } from "react";

interface Options {
	isFlipped: boolean;
	SetIsFlipped: Dispatch<SetStateAction<boolean>>;
	isDeleteSelected: boolean;
	setIsDeleteSelected: Dispatch<SetStateAction<boolean>>;
	addCard: boolean;
	setAddCard: Dispatch<SetStateAction<boolean>>;
	setEditSelected: Dispatch<SetStateAction<boolean>>;
}

const Options: FC<Options> = ({
	isFlipped,
	setAddCard,
	addCard,
	isDeleteSelected,
	setIsDeleteSelected,
	SetIsFlipped,
	setEditSelected,
}) => {
	return (
		<div className="options">
			<ul>
				<li>
					<div
						className="editCards"
						onClick={() => {
							SetIsFlipped(!isFlipped);
						}}
					>
						Change Language
					</div>
				</li>
				<li>
					<div
						className="editCards"
						onClick={() => {
							setIsDeleteSelected(!isDeleteSelected), setEditSelected(false);
						}}
					>
						<p>Edit Cards</p>
					</div>
				</li>
				<li>
					<div
						className="editCards"
						onClick={() => {
							setAddCard(!addCard);
						}}
					>
						<p>Add Card</p>
					</div>{" "}
				</li>
			</ul>
		</div>
	);
};

export default Options;
