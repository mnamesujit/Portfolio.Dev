import "./App.css";
import { Navbar } from "./components";
import { Header, About, Skills, Projects, Footer } from "./container";

function App() {
  return <div className="App">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Footer />


  </div>;
}

export default App;
