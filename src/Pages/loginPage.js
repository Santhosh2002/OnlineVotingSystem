
import Header from '../Components/Header';
import Home from '../Components/Home';
import Login from '../Components/Login';
import '../assets/CSS/login.css';
import Popup from '../Components/Popup';
import '../assets/script/login.js';

function loginPage() {
  return (
    <><Header><Popup></Popup></Header><Home><Login></Login></Home></>
  );
}

export default loginPage;
