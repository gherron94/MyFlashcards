import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/home">MyFlashcards</NavLink>
				</li>
				<li className="currentUser">
					<NavLink to="/"> Sign out</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
