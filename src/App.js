import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { books } from './data'
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  function addToCart(book) {
    console.log('added', book)
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
