import Homepage from './pages/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Closedend from './pages/Closedend'
import Openend from './pages/Openend'
import Signinpage from './pages/Signinpage'
import Signuppage from './pages/Signuppage'
import Fundmanagerb from './pages/Fundmanagerb'
import sbifund from './pages/sbifund'
import profile from './pages/profile'

//import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
<Route path="/" exact component={Homepage}/>
<Route path="/Aboutus" exact component={Aboutus}/>
<Route path="/Contactus" exact component={Contactus}/>
<Route path="/Signinpage" exact component={Signinpage}/>
<Route path="/Signuppage" exact component={Signuppage}/> 
<Route path="/Closedend" exact component={Closedend}/>
<Route path="/Openend" exact component={Openend}/>
<Route path="/Fundmanagerb" exact component={Fundmanagerb}/>
<Route path="/sbifund" exact component={sbifund}/>
<Route path="/profile" exact component={profile}/>


      </Switch>
    </Router>

  );
}


export default App;
