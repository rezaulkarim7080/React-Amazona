import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SingleProduct from './pages/SingleProduct';
import Footer from './components/Footer';
import Raff from './pages/Raff';
import Navbars from './pages/Navbars';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product/:id"} element={<SingleProduct />} />
          <Route path={"/raff"} element={<Raff />} />
          <Route path={"/Navbars"} element={<Navbars />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
