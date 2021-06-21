import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";

const App = ()=> {

    let initialPricing = [
      {level: "Hobby", cost: 0},
      {level: "Startup", cost: 10},
      {level: "Enterprise", cost:1000}
    ]

const [pricing, setPricing] = useState(initialPricing);

return (
<Router>
{/* This will make NavBar render on the page no matter what route you are on. */}
  <NavBar />
{/* Switch makes everything inside conditiononal - it tries one at a time based on the route entered and displays only the one which matches (or error if nothing matches) herefore it is good practice to do this to include 404 error page */}
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
{/* If you need to pass in props you need to pass the details in to the route in the following way */}
  <Route path="/pricing" 
          render={()=> <Pricing prices={pricing}/>} />
  <Route component={ErrorPage}/>
  </Switch>
</Router>
)
}

export default App;
