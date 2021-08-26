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
  let userObj = JSON.parse(localStorage.userObj);
  console.log(userObj)

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

  return (
    <div id="info">

      {localStorage.getItem("token") ? <div>
        <Header signup={false} signin={false} home={false} contact={false} about={false} signout={true} search={true} />
        <Middle id={userObj.id} name={userObj.name} role={userObj.role}></Middle>
      </div> : history.push('/InvSignin')}

    </div>
  );
}


export default InvestorProfile;
