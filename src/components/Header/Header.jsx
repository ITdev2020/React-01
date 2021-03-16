import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		//<header /> component from React
		<header className={s.header}>
			<img src="https://www.logodesign.net/logo/line-art-triangle-forming-letter-a-shape-5087ld.png"></img>

			<div className={s.loginBlock}>
				{ props.isAuth ? props.login
				: <NavLink to={'/login'}>Login</NavLink> }
			</div>
		</header>
	);
};

export default Header;
