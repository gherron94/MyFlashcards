import { FC } from "react";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/flash-cards">My Flash Cards</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
