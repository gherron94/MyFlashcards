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
					<NavLink to="/flash-cards">Flash Cards</NavLink>
				</li>
				<li className="currentUser">
					<NavLink to="/"> Sign In</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
