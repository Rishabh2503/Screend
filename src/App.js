
import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NowShowing from "./Pages/Now showing" 
import Event from "./Pages/Events"
import Order from "./Pages/Orderdetails";
import Contact from "./Pages/Contact";
import ShowDetails from "./Pages/ShowDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show" component={NowShowing} />
            <Route path="/event" component={Event} />
            <Route path="/order" component={Order} />
            <Route path="/contact" component={Contact} />
            <Route path="/show-details" component={ShowDetails} />
           </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
