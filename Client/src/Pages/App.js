import Home from '../Components/Home';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import About from '../Components/About_1';
import Login from '../Components/Login';
import AdminLogin from '../Components/Admin_Login';
import '../assets/CSS/index.css';
import '../assets/CSS/login.css';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
   <Routes>
      <Route path='Login' element={<><Login></Login></>} />
      <Route path = 'AdminLogin' element={<><AdminLogin></AdminLogin></>}></Route>
      <Route path='/' element={<><Header></Header><Home></Home><About></About><Contact></Contact></>} />
      
    </Routes>
     
  );
}

export default App;

