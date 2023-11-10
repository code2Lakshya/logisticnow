import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {lazy,Suspense} from 'react';
import Loader from "./components/Loader/Loader";

const AboutPage=lazy(()=> import('./pages/AboutPage/AboutPage'));
const SecurityPage=lazy(()=>import('./pages/SecurityPage/SecurityPage'));
const ThreePl=lazy(()=>import('./pages/ThreePl/ThreePl'));
const PestControlPage=lazy(()=>import('./pages/PestControlPage/PestControlPage'));
const TransportPage=lazy(()=>import('./pages/TransportPage/TransportPage'));
const FourPlPage=lazy(()=>import('./pages/FourPlPage/FourPlPage'));
const ContactPage=lazy(()=>import('./pages/ContactPage/ContactPage'));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path='/security' element={<Suspense fallback={<Loader />}><SecurityPage /></Suspense>} />
        <Route path='/3pl-services' element={<Suspense fallback={<Loader />}><ThreePl /></Suspense>} />
        <Route path='/pest-control' element={<Suspense fallback={<Loader />}><PestControlPage /></Suspense>} />
        <Route path='/transport' element={<Suspense fallback={<Loader />}><TransportPage /></Suspense>} />
        <Route path='4pl-services' element={<Suspense fallback={<Loader />}><FourPlPage /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={<Loader />}><ContactPage /></Suspense>} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
