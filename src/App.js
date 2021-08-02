import Header from './Components/Sign-up-components/Header'
import Left from './Components/Sign-up-components/Left'
import Right from './Components/Sign-up-components/Right'
import './CSS/signin-signup.css'
//import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div id="main">
      <div id="header"><Header /></div>
      <div id="left"><Left /></div>
      <div id="right"><Right /></div>
    </div>
  );
}


export default App;
