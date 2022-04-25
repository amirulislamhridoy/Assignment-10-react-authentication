import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Footer from './Pages/Common/Footer/Footer';
import Navbar from './Pages/Common/Navbar/Navbar';
import Feature from './Pages/Feature/Feature';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/feature" element={<Feature />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
