import '../App.css';
import logo from './pics/Logo .svg';
import {Link} from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

export default function Nav() {
    return (
        <>
            <nav className='navigation'>
                <li className="navLogo"><img src={logo} alt="Navigation logo"/></li>
                <Link to="/" className="navItem">Home</Link>
                <Link className="navItem">About</Link>
                <Link className='navItem'>Menu</Link>
                <Link to="/booking" className="navItem">Reservations</Link>
                <Link className='navItem'>Order Online</Link>
                <Link className="navItem">Login</Link>
                <li className="menuIcon"><IoIosMenu /></li>
            </nav>
        </>
    );
}