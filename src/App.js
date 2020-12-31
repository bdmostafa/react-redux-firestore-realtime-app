import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
