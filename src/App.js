import Homepage from './pages/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
// import Signinpage from './pages/Signinpage'
// import Signuppage from './pages/Signuppage'

//import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
<Route path="/" exact component={Homepage}/>
<Route path="/Aboutus" exact component={Aboutus}/>
<Route path="/Contactus" exact component={Contactus}/>
{/* <Route path="/Signinpage" exact component={Signinpage}/>
<Route path="/Signuppage" exact component={Signuppage}/>  */}
      </Switch>
    </Router>

  );
}


export default App;
