
import "./App.css";
import About from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Section from "./components/section";
import Skill from "./components/skill";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Hero />
      </div>
      <About />
      <Section />
      <Skill/>
      <Footer />
    </div>
  );
}

export default App;
