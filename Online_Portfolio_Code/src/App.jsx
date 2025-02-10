import styles from "./App.module.css";
import { NavMenu } from "./components/NavMenu/NavMenu";

function App() {
  return (
    <div className={styles.App}>
      <NavMenu />
    </div>
  );
}

export default App
