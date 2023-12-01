import './App.css';
//import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
      <>
        <Nav/>
        <Header className="App" title="Little Lemon" secondTitle="Chicago"/>
        <Main>
          <Specials/>
          <Testimonials/>
          <About/>
        </Main>
        <Footer/>
      </>
  );
}
