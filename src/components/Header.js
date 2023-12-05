import '../App.css';
import restauranfood from "./pics/restauranfood.jpg";

export default function Header(props) {
    return (
        <article className='header'>
            <aside className='titleAside'>
                <h1>{props.title}</h1>
                <h3>{props.secondTitle}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p><br/>
                <input type="button" value="Reserve a table"/>
            </aside>
            <aside className='imgAside'>
                <img src={restauranfood} alt="Restaurant food"/>
            </aside>
        </article>
    );
}