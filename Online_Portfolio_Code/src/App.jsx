import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navmenu } from "./components/Navmenu";
import { NavmenuMobile } from "./components/NavmenuMobile";
import { Home } from "./components/content/Home";
import { About } from "./components/content/About";
import { Projects } from "./components/content/Projects";
import { Contact } from "./components/content/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-black`}
      >
        <Navmenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavmenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
