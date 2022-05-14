import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header";

import "./styles/mobile.css"
import "./styles/index.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
