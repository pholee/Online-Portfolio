import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navmenu } from "./components/Navmenu";
import { NavmenuMobile } from "./components/NavmenuMobile";

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
      </div>
    </>
  );
}

export default App;
