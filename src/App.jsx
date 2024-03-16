import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cities from './pages/Cities.jsx'
import DetailsCity from './pages/DetailsCity.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:id" element={<DetailsCity />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </>
  )
}

export default App;
