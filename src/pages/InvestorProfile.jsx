import React from "react";
import { useLocation } from "react-router-dom";
import Header from '../Components/Header'
import Middle from '../Components/InvestorProfile/Middle'
// import axios from 'axios'
import '../CSS/InvestorProfile.css'
import { useHistory } from 'react-router-dom'
// const api = axios.create({
//   baseURL: 'http://localhost:3000/JSON/cust-fund.json'
// })
function InvestorProfile() {
  let history = useHistory();
  // const [investorData, setinvestorData] = useState([])
  const location = useLocation();

  // useEffect(() => {
  //   if (localStorage.getItem("email") && localStorage.getItem("email") != undefined && localStorage.getItem("email") != null) {
  //     api.get('').then(res => {
  //       setinvestorData(res.data)
  //     })
  //   }
  //   else {
  //     history.push('/InvSignin')
  //   }
  // }, [])
  // let show = [];

  // show = investorData.filter(e => e.cust_id == location.state.id)
  let islogin=false;
    if (localStorage.token) {
        
        islogin=true;
    }

  return (
    <div id="info">

      {localStorage.getItem("token") ? <div>
      <div id="Header"><Header signup={false} signin={!islogin} home={true} contact={true} about={true} signout={islogin} search={true}/></div>
        <Middle id={location.state.id} name={location.state.name} role={location.state.role}></Middle>
      </div> : history.push('/InvSignin')}

    </div>
  );
}


export default InvestorProfile;
