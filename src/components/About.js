import "../App.css";
import adrianandmarioa from "./pics/Mario and Adrian A.jpg";
import restaurant from "./pics/restaurant.jpg";

export default function About() {
    return (
        <article className='aboutLittleLemon'>
            <aside>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </aside>
            <aside>
                <img src={adrianandmarioa} alt="Adrian and Mario"/>
                <img src={restaurant} alt="The restaurant"/>
            </aside>
        </article>
    );
}