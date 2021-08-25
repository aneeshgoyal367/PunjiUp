import React from 'react'
function ShowManFund (props){
    return(
        <div>
            <h4>Name: {props.show.name} </h4>
            <p>Company Name: {props.show.company_name}</p>
            <p>Start Date: {props.show.b_start_date}</p>
            <p>End Date: {props.show.b_end_date}</p>
            <p>Lockin Period: {props.show.lockinPeriod}</p>
            <p>Value: {props.show.totalVal}</p>
            {localStorage.getItem("token")? <button>Add to Cart</button> : ""}
            <hr/>
        </div>
    )
}
export default ShowManFund;