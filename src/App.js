import { useEffect } from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider >
    <div className="App">
      <NavMenu/>
     <Header /> 
      <About />
       <Skills />
       <Services />
       <Portfolio />
       <Contact />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
