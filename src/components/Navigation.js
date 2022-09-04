import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['non-active-link'];
    }

    return (
        <nav>
            <ul className = "links">
                <li><NavLink className={setNavStyle} to="/" >Home</NavLink></li>

                <li>
                    <NavLink
                        to="/films"
                        className={setNavStyle}
                    >
                        All films
                    </NavLink>
                </li>
                <li><NavLink className={setNavStyle} to="/species" >Species</NavLink></li>
            
      

            </ul>
        </nav>

    );
}
