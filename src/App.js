import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from "./components/projects/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetail} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
