import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Catelog from './pages/Catelog';
import Cart from './pages/Cart';
import Footer from './component/Footer';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<AdminPanel/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/search' element={<SearchResult/>}/>
          <Route path='/catelog' element={<Catelog/>}/>
          <Route path='/catelog/:id' element={<ProductDetailPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
