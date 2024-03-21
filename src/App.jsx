import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alerts from "./utils/alerts.js";
import store from './redux/store.js';
import authQueries from "./services/authQueries.js";
import Home from './pages/Home.jsx'
import Cities from './pages/Cities.jsx'
import DetailsCity from './pages/DetailsCity.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from "./pages/SignIn.jsx";

function App() {
  useEffect(() => {
    authQueries.loginToken().then((res) => {
      if(res.status == 200){
        console.log(res);
        alerts.success("Welcome " + res.data.first_name + "!")
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Provider store={store} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<DetailsCity />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
          </Routes>
        </Provider>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App;
