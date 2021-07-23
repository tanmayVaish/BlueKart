import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Checkout from "./components/checkoutComponent/Checkout";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route path={'/checkout'}>
                  <Checkout/>
              </Route>
              <Route path={'/'}>
                  <Home/>
              </Route>
              <Footer/>
          </Switch>
      </BrowserRouter>

  );
}

export default App;
