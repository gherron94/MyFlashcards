import { FC, Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { User } from "./types";

interface NavBarProps {
	setSignedInUser: Dispatch<SetStateAction<User>>;
}

const NavBar: FC<NavBarProps> = ({ setSignedInUser }) => {
	function handleOnClick() {
		setSignedInUser((currentUser) => {
			return { ...currentUser, username: "" };
		});
	}
	return (
		<nav>
			<ul>
				<li>MyFlashcards</li>
				<li onClick={handleOnClick} className="currentUser">
					<NavLink to="/sign-in"> Sign out</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
