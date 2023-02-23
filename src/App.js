import { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import store from "./redux/store";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="App">
          <NavMenu />
          <Header />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
