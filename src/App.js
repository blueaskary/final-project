
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/products/:productId" element={<div>Product details</div>} />
        </Routes>

        <Footer />
      </BrowserRouter>



    </div>);



}

export default App;
