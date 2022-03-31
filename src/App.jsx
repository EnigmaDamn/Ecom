
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home"
import Product from "./Pages/Product";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/Product">
          <Product/>
        </Route>
      </Switch>
    </Router>
  )
}
export default App