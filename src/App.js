import './App.css';
import './assets/css/style.css';
import Greet from './components/Greet';
import Header from './components/header';
import Hero from './components/hero';
import Main from './components/main';
import Footer from './components/footer';
import Visiting from './components/visiting_card';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
      <Footer></Footer>
      {/* <Greet></Greet> */}
      {/* <Visiting></Visiting> */}
    </div>
  );
}

export default App;
