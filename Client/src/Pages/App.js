import Home from "../Components/Home/Home";
import Header from "../Components/Home/Header";
import Contact from "../Components/Home/Contact";
import About from "../Components/Home/About_1";
import Login from "../Components/Login/Login";
import VoterID from "../Components/Login/VoterID";
import VoterOTP_Confirmation from "../Components/Login/VoterOTP_Confirmation";
import Register from "../Components/Register/Register";
import OTPConfirm from "../Components/Login/OTP_Confirmation";
import UserDashboard from "../Components/Voter/User_Dashboard";
import SideNavbar from "../Components/Topbar/Sidenav";
import Authentication from "../Components/Authentication/Authentication";
import CandidateList from "../Components/Candidates/Candidates_list";
import ElectionList from "../Components/Election/Election_list";
import Polling from "../Components/Election/Polling";
import Results from "../Components/Election/Result";
import AuthenticationOTP from "../Components/Authentication/Authentication_OTP";
import AdminHome from "./AdminHome/AdminHome";
import AdminLogin from "./AdminLogin/Admin_Login";
import { Route, Routes } from "react-router-dom";
import List from "./List/List";
import NewCandidate from "./NewCandidate/NewCandi";
import ResultsAdmin from "./Results/ResultsAdmin";
import { ReqDataContextProvider } from "../context/dataContext";

function App(props) {
  return (
    <ReqDataContextProvider data={props.val}>
      <Routes>
        <Route
          path="Login"
          element={
            <>
              <Login></Login>
            </>
          }
        />
        <Route
          path="VoterID_OTP"
          element={
            <>
              <VoterOTP_Confirmation></VoterOTP_Confirmation>
            </>
          }
        />
        <Route
          path="VoterID"
          element={
            <>
              <VoterID></VoterID>
            </>
          }
        />
        <Route
          path="Register"
          element={
            <>
              <Register></Register>
            </>
          }
        />
        <Route
          path="AdminLogin"
          element={
            <>
              <AdminLogin></AdminLogin>
            </>
          }
        ></Route>
        <Route
          path="OTP_Confirm"
          element={
            <>
              <OTPConfirm></OTPConfirm>
            </>
          }
        ></Route>
        <Route
          path="UserDashboard"
          element={
            <>
              <SideNavbar></SideNavbar>
              <UserDashboard></UserDashboard>
            </>
          }
        ></Route>
        <Route
          path="Authentication"
          element={
            <>
              <SideNavbar></SideNavbar>
              <Authentication></Authentication>
            </>
          }
        ></Route>
        <Route
          path="CandidateList"
          element={
            <>
              <SideNavbar></SideNavbar>
              <CandidateList></CandidateList>
            </>
          }
        ></Route>
        <Route
          path="Polling"
          element={
            <>
              <SideNavbar></SideNavbar>
              <Polling></Polling>
            </>
          }
        ></Route>
        <Route
          path="ElectionList"
          element={
            <>
              <SideNavbar></SideNavbar>
              <ElectionList></ElectionList>
            </>
          }
        ></Route>
        <Route
          path="Results"
          element={
            <>
              <SideNavbar></SideNavbar>
              <Results></Results>
            </>
          }
        ></Route>
        <Route
          path="Authentication_OTP"
          element={
            <>
              <SideNavbar></SideNavbar>
              <AuthenticationOTP></AuthenticationOTP>
            </>
          }
        ></Route>
        <Route
          path="AdminHome"
          element={
            <>
              <AdminHome></AdminHome>
            </>
          }
        ></Route>

        <Route
          path="List"
          element={
            <>
              <List></List>
            </>
          }
        ></Route>
        <Route
          path="ResultsAdmin"
          element={
            <>
              <ResultsAdmin></ResultsAdmin>
            </>
          }
        ></Route>
        <Route
          path="NewCandidate"
          element={
            <>
              <NewCandidate></NewCandidate>
            </>
          }
        ></Route>

        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Home></Home>
              <About></About>
              <Contact></Contact>
            </>
          }
        />
      </Routes>
    </ReqDataContextProvider>
  );
}

export default App;
