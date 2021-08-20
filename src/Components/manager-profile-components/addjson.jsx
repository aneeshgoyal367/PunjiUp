import {React} from 'react'
function addjson() {
    return (
        <div>
            <h3><center>Add Fund</center></h3>

<div className="container">
  <form action="/action_page.php">
    <label for="fname">Fund Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Fund name.." />

    <label for="lname">Total Value</label>
    <input type="text" id="lname" name="lastname" placeholder="Total Value.." />
    <label for="lname">Nav</label>
    <input type="text" id="lname" name="lastname" placeholder="Nav.." />
    <label for="lname">Expense Ratio</label>
    <input type="text" id="lname" name="lastname" placeholder="Expense Ratio.." />

    <label for="country">Fund Type</label>
    <select id="country" name="country">
      <option value="open">Open End</option>
      <option value="closed">Closed-End</option>
      
    </select>

    {/* <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}/> */}

    <input type="submit" value="Add" />
  </form>
</div>
        </div>
    )
}
export default addjson


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

















