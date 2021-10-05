
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from './components/Menubar/Menubar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import {array} from './utilites/data'
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { createContext, useEffect, useState } from 'react';
import useServises from './Hooks/useServises';
import { getDB } from './utilites/dataBase';

export const CartContext = createContext([]);

function App() {
  const [cart, setCart] = useState([]);
  const [services] = useServises();
  
  useEffect(() => {
    if (services.length > 0) {
      const cartKey = Object.keys(getDB());
      let newCart = [];
      for (const key of cartKey) {
        const exist = services.find(service => key === service.id);
        if (exist) {
          newCart.push(exist);
        }
      }
      setCart(newCart);
    }
  },[services])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="App">
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services array={array} ></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
