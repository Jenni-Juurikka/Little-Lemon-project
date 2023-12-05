import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
      <>
        <Nav/>
        <Header className="App" title="Little Lemon" secondTitle="Chicago"/>
        <Main/>
        <Footer/>
      </>
  );
}
