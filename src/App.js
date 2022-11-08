import {  BrowserRouter as Router ,  Switch,  Route,  Link, Routes} from "react-router-dom";
import { About , Contact  , Navbar , Project , Service } from "./components"
import Home from "./pages/Home";
function App() {
  return (

    <div className="container mx-auto bg-gray-50"> 
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
