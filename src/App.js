import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<p>About Page</p>} />
        <Route path='/security' element={<p>Security Page</p>} />
        <Route path='/3pl-services' element={<p>3pl Services Page</p>} />
        <Route path='/pest-control' element={<p>Pest Control Page</p>} />
        <Route path='/transport' element={<p>Transport Page</p>} />
        <Route path='4pl-services' element={<p>$pl Services Page</p>} />
        <Route path='/contact' element={<p>Contact Us Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
