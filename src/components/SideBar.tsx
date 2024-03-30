import { FC } from "react";
import { NavLink } from "react-router-dom";

const SideBar: FC = () => {
	return (
		<nav className="nav-sidebar">
			<div className="sidebar-title">
				<h2>Options: </h2>
			</div>
			<ul className="sidebar-list">
				<li>
					<NavLink to="/link-1">Link 1</NavLink>
				</li>
				<li>
					<NavLink to="/link-2">Link 2</NavLink>
				</li>
				<li>
					<NavLink to="/link-3">Link 3</NavLink>
				</li>
				<li>
					<NavLink to="/link-4">Link 4</NavLink>
				</li>
				<li>
					<NavLink to="/link-5">Link 5</NavLink>
				</li>
				<li>
					<NavLink to="/link-6">Link 6</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideBar;
