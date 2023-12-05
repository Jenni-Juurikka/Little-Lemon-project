import '../App.css';
import footerLogo from "./pics/Asset 20@4x.png";

export default function Footer() {
    return (
        <footer className='footer'>
            <aside className='footerAside'>
                <img src={footerLogo} alt="Little Lemon footer logo"/>
            </aside>
            <aside>
                <ul>
                    <li><h4>Doormat</h4></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order online</li>
                    <li>Login</li>
                </ul>
            </aside>
            <aside>
                <ul>
                    <li><h4>Contact</h4></li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </aside>
            <aside>
                <ul>
                    <li><h4>Social media</h4></li>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </aside>
        </footer>
    );
}