import './App.css';
import Cart from './Components/Cart/cart';
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const products = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
  }
];

export const AppContext = createContext(null);

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((cartItems) => [...cartItems, newItem]);
  };

  // const updateSubtotal = (product, count) => {
  //   setCartItems((cartItems) => 
  //     cartItems.map((e) => 
  //       if(product.id === e.id){
  //         return e.subtotal = count * e.price;
  //       }
  //     )
  //   )
  // }

  const removeFromCart = (itemToBeRemoved) => {
    setCartItems((cartItems) =>
      cartItems.filter((item) => item.id !== itemToBeRemoved.id)
    );
  };

  const cartCount = cartItems.length;

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ products, cartItems, addToCart, removeFromCart, cartCount }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={
              <Home />
            } />
            <Route path='/cartItems' element={
              <Cart />
            } />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
    </BrowserRouter>

  );
}

export default App;
   