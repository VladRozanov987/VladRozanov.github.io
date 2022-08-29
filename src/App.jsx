//Style
import GlobalStyle from "./components/GlobalStyle.component";
//Import components
import {
  Nav,
  HomeSection,
  Skills,
  Education,
  Portfolio,
  Contacts,
} from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <HomeSection />
      <Skills />
      <Education />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
