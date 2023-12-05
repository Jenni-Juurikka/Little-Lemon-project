import '../App.css';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

export default function Main() {
    return (
        <main className='main'>
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
    );
}