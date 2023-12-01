import '../App.css';
import logo from './pics/Logo .svg';
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className='navigation'>
                <li className="navItem"><img src={logo} alt="Navigation logo"/></li>
                <Link to="/" className="navItem">Home</Link>
                <Link to="/booking" className="navItem">Reservations</Link>
            </nav>
        </>
    );
}