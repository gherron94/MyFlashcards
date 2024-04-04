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
				<li>
					<NavLink to="/home">MyFlashcards</NavLink>
				</li>
				<li onClick={handleOnClick} className="currentUser">
					<NavLink to="/"> Sign out</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
