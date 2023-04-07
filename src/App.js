import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/contact" component={ContactPage}/>
                   
                  </Switch>
                  <Footer/>
             </div>
       </BrowserRouter>

       
      
    );
  }
}

export default App;
