// import Signinpage from './pages/Signinpage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import InvSignIn from './pages/InvSignIn';
// import ManSignIn from './pages/ManSignIn';
// import ManSignUp from './pages/ManSignUp';
// import InvSignUp from './pages/InvSignUp';
import InvestorProfile from './pages/InvestorProfile';
function App() {
  return (
    <InvestorProfile/>
    // <Router>
    //   <Switch>
    //     {/* <Route path="/" exact component={Signinpage}/>
    //     <Route path="/Inv-sign-in" exact component={InvSignIn}/>
    //     <Route path="/Man-sign-in" exact component={ManSignIn}/>
    //     <Route path="/Inv-sign-up" exact component={InvSignUp}/>
    //     <Route path="/Man-sign-up" exact component={ManSignUp}/> */}
    //   </Switch>
    // </Router>
  )
}
export default App;
