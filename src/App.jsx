import Home from './pages/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cities from './pages/Cities.jsx'
{/*
*/}

function App() {
  return (
    <>
      {/*
      <Home/>
      <Cities/>
    */}
      <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cities" element={<Cities/> } />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App;
