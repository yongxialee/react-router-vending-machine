// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Link,Route,Switch} from "react-router-dom";
import VendingMachine from './VendingMachine';

import Chip from "./Chip";
import Drink from "./Drink";
import Raman from "./Raman";

function App() {
  return (
 
    <BrowserRouter>
    <Switch>
      <Route exact path="/"  component={VendingMachine}></Route>
      <Route exact path="/chip" component={Chip}></Route>
      <Route exact path="/drink"><Drink /></Route>
      <Route exact path="/raman"><Raman /></Route>
      </Switch>
    </BrowserRouter>
  
  );
}






export default App;
