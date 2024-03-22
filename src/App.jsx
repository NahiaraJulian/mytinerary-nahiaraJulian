import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alerts from "./utils/alerts.js";
import authQueries from "./services/authQueries.js";
import Home from './pages/Home.jsx'
import Cities from './pages/Cities.jsx'
import DetailsCity from './pages/DetailsCity.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from "./pages/SignIn.jsx";
import { signIn } from "./redux/actions/userAction.js";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    authQueries.loginToken().then((res) => {
      if(res.status == 200){
        dispatch(signIn(res.data))
        alerts.success("Welcome " + res.data.first_name + "!")
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<DetailsCity />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
          </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App;