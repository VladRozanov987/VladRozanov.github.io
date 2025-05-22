//Style
import GlobalStyle from "./components/GlobalStyle.component";

//Components
import Header from "./components/Nav/Header.component";
import Main from "./pages/Main.page";
import Footer from "./components/Footer.component";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
