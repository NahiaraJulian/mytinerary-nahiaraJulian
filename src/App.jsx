import Home from './pages/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cities from './pages/Cities.jsx'
import DetailsCity from './pages/DetailsCity.jsx';

function App() {
  return (
    <>
      <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cities" element={<Cities/> } />
          <Route path="/cities/:id" element={<DetailsCity/> } />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App;
