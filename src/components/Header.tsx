import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<h1>reactblog</h1>
			<ul className="navigation">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/new">글쓰기</Link>
				</li>
				<li>
					<Link to="/profile">프로필</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
