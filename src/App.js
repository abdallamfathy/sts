import { Container } from "@mui/material";
import {  BrowserRouter as Router ,  Switch,  Route,  Link, Routes} from "react-router-dom";
import { About , Contact  , Navbar , Project , Service } from "./components"
import Home from "./pages/Home";
function App() {
  return (

    <div className="container mx-auto px-16 bg-gray-00">
      
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
