// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

//Style
import GlobalStyle from "./components/GlobalStyle.component";

//Components
import Header from "./components/Nav/Header.component";

//Pages
import Main from "./pages/Main.page";
import Skills from "./pages/Skills.page";
import Portfolio from "./pages/Portfolio.page";

//Hooks
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
