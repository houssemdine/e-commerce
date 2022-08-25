
import Home from "./Pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import ProductListe from "./Pages/ProductListe";
import Product from "./components/Product";
import Rigister from "./Pages/Rigister";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { Provider } from 'react-redux';

import Navbar from "./components/Navbar";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
    
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}>
    <Home />
    
    </Route>
    <Route path="/produts/:category">
    <ProductListe/>
    
    </Route>

    <Route path="/produts/:id">
    <Product/>
    
    </Route>
    <Route path="/register" component={Rigister}>
    <Rigister/>
    
    </Route>
    

    <Route path="/login" component={Login}>
    <Login/>
    
    </Route>

    <Route path="/cart">
    <Cart/>
    
    </Route>

    
    </Switch>

    </Router>
    </Provider>
  
  );
      
      
    
  
};

export default App;
