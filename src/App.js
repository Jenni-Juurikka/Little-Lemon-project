import Header from "components/Header";
import Nav from "components/Nav";
import Main from "components/Main";
import Footer from "components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header className="App">
        <Nav/>
        <h1>Homepage</h1>
      </Header>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </>
  );
}

export default App;
