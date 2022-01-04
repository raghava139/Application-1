import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Proje/E-commerce.js/NavBar";
import Home from "./Proje/E-commerce.js/Home";
import About from "./Proje/E-commerce.js/About";
import Product from "./Proje/E-commerce.js/Product";
import Products from "./Proje/E-commerce.js/Products";
import ContactUs from "./Proje/E-commerce.js/Contactus";
import Cart from "./Proje/E-commerce.js/Cart";
import Login from "./Proje/E-commerce.js/Login Form";
import Place from "./Proje/E-commerce.js/PlaceYourOrder";


function RunAPP() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/about" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/place" component={Place} />
        </Switch>
      </Router>
    </div>
  );
}
export default RunAPP;
