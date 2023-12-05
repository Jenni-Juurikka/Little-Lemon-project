import "../App.css";

export default function Testimonials() {
    return (
        <article className='testimonials'>
            <aside>
                <h2>Testimonials</h2>
            </aside>
            <aside className='reviews'>
                <div>
                    <h5>Anonymous</h5>
                    <p>This restaurant is amazing!</p>
                </div>
                <div>
                    <h5>John Doe</h5>
                    <p>Could be better, could be worse.</p>
                </div>
                <div>
                    <h5>Anonymous</h5>
                    <p>I have visited many restaurants. This one
                        is by far one of the best.
                    </p>
                </div>
                <div>
                    <h5>Anonymous</h5>
                    <p>I'll definitely come again.</p>
                </div>
            </aside>
        </article>
    );
}