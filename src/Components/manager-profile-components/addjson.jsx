import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const api = axios.create({
  baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
})
function PostForm(){
  const url="https://punjiup.herokuapp.com/api/fundmanager/addfund"
  const [data,setData]= useState({
    fundName:"",
    symbol:"",
    totalValue:"",
    nav:"",
    expenseRatio:"",
    preference:"",
    fundType:"",
    // closeEndFund:"",
    // mgrId:""
  })

function submit(e){
 e.preventDefault();
 const body = JSON.stringify({
  fundName:data.fundName,
  symbol:data.symbol,
  totalValue:data.totalValue,
  nav:data.nav,
  expenseRatio:data.expenseRatio,
  preference:data.preference,
  fundType:data.fundType,
  // closeEndFund:data.closeEndFund,
  // mgrId:parseInt(data.mgrId)
  
})
 api.post('/addfund', body, { "headers": { "content-type": "application/json", } })
 .then(res=>{
   console.log(res.data)
 })
}


  function handle(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)

  }
  return(
    <div>
      <h1>Add Fund Form</h1>
    <form onSubmit={(e)=> submit(e)}>
      <label>Fund Name</label><input onChange={(e)=>handle(e)} id="fundName" value={data.fundName} placeholder="fundname" type="text"></input>
      <label>Symbol</label><input onChange={(e)=>handle(e)} id="symbol" value={data.symbol} placeholder="symbol" type="text"></input>
      <label>Total Value</label><input onChange={(e)=>handle(e)} id="totalValue" value={data.totalValue} placeholder="totalvalue" type="text"></input>
      <label>Nav</label><input onChange={(e)=>handle(e)} id="nav" value={data.nav} placeholder="nav" type="text"></input>
      <label>Expense Ratio</label><input onChange={(e)=>handle(e)} id="expenseRatio" value={data.expenseRatio} placeholder="expenseRatio" type="text"></input>
      <label>Rank</label><input onChange={(e)=>handle(e)} id="preference" value={data.preference} placeholder="rank" type="text"></input>
      <label>Fund Type</label><input onChange={(e)=>handle(e)} id="fundType" value={data.fundType} placeholder="Open/Close" type="text"></input>
     
      {/* <label>Manager Id</label><input  onChange={(e)=>handle(e)} id="mgrId" value={data.mgrId} placeholder="Manager Id" type="number"></input> */}
      <button>Submit</button>
    </form>
    </div>
  );
}
export default PostForm




// import {React} from 'react'
// function addjson(props) {
//     return (
//         <div>
//             <h3><center>Add Fund</center></h3>

// <div className="container">
//   <form action="/action_page.php">
//     <label for="fname">Fund Name</label>
//     <input type="text" id="fname" name="firstname" placeholder="Fund name.." />

//     <label for="lname">Total Value</label>
//     <input type="text" id="lname" name="lastname" placeholder="Total Value.." />
//     <label for="lname">Nav</label>
//     <input type="text" id="lname" name="lastname" placeholder="Nav.." />
//     <label for="lname">Expense Ratio</label>
//     <input type="text" id="lname" name="lastname" placeholder="Expense Ratio.." />

//     <label for="country">Fund Type</label>
//     <select id="country" name="country">
//       <option value="open">Open End</option>
//       <option value="closed">Closed-End</option>
      
//     </select>

//     {/* <label for="subject">Subject</label>
//     <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}/> */}

//     <input type="submit" value="Add" />
//   </form>
// </div>
//         </div>
//     )
// }
// export default addjson


// import { Adds } from "./Adds";

// import { AddFundA } from "./AddFundA";

// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function Add() {
//   let initAdd;
//   if (localStorage.getItem("adds") === null) {
//     initAdd = [];
//   }
//   else {
//     initAdd = JSON.parse(localStorage.getItem("adds"));
//   }


//   const onDelete = (add) => {
//     console.log("I am ondelete of fund", add);
//     // Deleting this way in react does not work
//     // let index = todos.indexOf(todo);
//     // todos.splice(index, 1);

//     setAdds(adds.filter((e) => {
//       return e !== add;
//     }));
//     console.log("deleted", adds)
//     localStorage.setItem("adds", JSON.stringify(adds));
//   }

//   const addFundA = (title, desc) => {
//     console.log("I am adding this add", title, desc)
//     let sno;
//     if (adds.length === 0) {
//       sno = 0;
//     }
//     else {
//       sno = adds[adds.length - 1].sno + 1;
//     }
//     const myFund = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setAdds([...adds, myFund]);
//     console.log(myFund);
//   }

//   const [adds, setAdds] = useState(initAdd);
//   useEffect(() => {
//     localStorage.setItem("adds", JSON.stringify(adds));
//   }, [adds])

//   return ( 
//     <> 
//     <Router>
//       <Switch>
//           <Route exact path="/" render={()=>{
//             return(
//             <>
//             <AddFundA addFundA={addFundA} />
//             <Adds adds={adds} onDelete={onDelete} /> 
//             </>)
//           }}> 
//           </Route>
//         </Switch> 
//     </Router>
//     </>
//   );
// }

// export default Add;

















