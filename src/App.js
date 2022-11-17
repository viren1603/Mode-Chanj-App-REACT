import React, { createContext, useState } from 'react'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Scorpio from './components/CarsColection/Scorpio/Scorpio';
import Audi from './components/CarsColection/Audi/Audi';

// imgs 
import audi from './components/img/audi.jfif'
import thar from './components/img/thar.webp'
import scorpio from './components/img/scorpio.jpg'

let data = [
  { id: "0", title: "Thar", l1: "Follow me into the wild.", l2: "Thar 4&4 , Explore The Impossible", price: "Rs. 16.29 Lakh.", img: thar },
  { id: "1", title: "Scorpio", l1: "Follow me into the wild.", l2: "Adventure begins where the road ends.Conqueror of the wild.", price: "Rs. 19.29 Lakh.", img: scorpio },
  { id: "2", title: "Audi", l1: "Follow me into the wild.", l2: "Best & Top Model in Audi....LIKE👍", price: "Rs. 45.9 Lakh.", img: audi }
]


export const AppContext = createContext("")

function App() {
  const [haxColor, sethaxColor] = useState();

  const [haxColor1b, sethaxColor1b] = useState();
  // const { haxColor } = useContext(AppContext)

  return (
    <>
      <AppContext.Provider value={{ haxColor, haxColor1b }}>
        <Router>
          <Navbar haxColor={haxColor} sethaxColor={sethaxColor} haxColor1b={haxColor1b} sethaxColor1b={sethaxColor1b} />
          <Switch>

            <Route exact path="/">
              <Home thar={data[0]} haxColor={haxColor} haxColor1b={haxColor1b} />
            </Route>

            <Route exact path="/scorpio">
              <Scorpio scorpio={data[1]} haxColor={haxColor} haxColor1b={haxColor1b} />
            </Route>

            <Route exact path="/audi">
              <Audi audi={data[2]} haxColor={haxColor} haxColor1b={haxColor1b} />
            </Route>


          </Switch>

        </Router>

      </AppContext.Provider>

    </>
  )
}

export default App;
