import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Loading from "./components/loading/Loading";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="App" id="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Loading />  
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;