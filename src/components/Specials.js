import "../App.css";
import greekSalad from "./pics/greek salad.jpg";
import lemonDessert from "./pics/lemon dessert.jpg";
import restFood from "./pics/restauranfood.jpg";

export default function Specials() {
    return (
        <article className='specials'>
            <div id="specialsHeader">
                <h2>Specials</h2>
                <input type="button" value="On the menu"/>
            </div>
            <div>
                <aside>
                    <img src={greekSalad} alt="Greek Salad"/>
                    <h3>Greek Salad - $10.00</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p><br/>

                    <input type="button" value="Order from menu"/>
                </aside>
                <aside>
                    <img src={restFood} alt="Restaurant food"/>
                    <h3>Main Course - $14.00</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p><br/>
                    <input type="button" value="Order from menu"/>
                </aside>
                <aside>
                    <img src={lemonDessert} alt="Lemon Dessert"/>
                    <h3>Lemon Dessert - $10.00</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p><br/>
                    <input type="button" value="Order from menu"/>
                </aside>
            </div>
        </article>
    );
}