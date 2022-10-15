import Home from '../Components/Home';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import About from '../Components/About_1';
import Login from '../Components/Login';
import '../assets/CSS/index.css';
import { BrowserRouter as Router, Switch, 
    Route, Redirect, Routes,} from "react-router-dom";

function App() {
  return (
    <><Routes>
      <Route path='Login' element={<Login />} />
      <Route path='About' element={<About />} />
      <Route path='Home' element={<Home />} />
      <Route path='Contact' element={<Contact />} />
     
    </Routes>
     <Header></Header><Home></Home><About></About><Contact></Contact>
    </>
  );
}

export default App;

