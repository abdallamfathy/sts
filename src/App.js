import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import { About , Contact , Home , Navbar , Project , Service } from "./components"
function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Navbar} />
        </Router>
    </>
  );
}

export default App;
