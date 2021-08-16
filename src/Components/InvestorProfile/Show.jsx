import React from 'react'
function Show (props){
    return(
        <div>
            <h4>Name: {props.show.name} </h4>
            <p>Company Name: {props.show.company_name}</p>
            <p>Start Date: {props.show.b_start_date}</p>
            <p>End Date: {props.show.b_end_date}</p>
            <p>Lockin Period: {props.show.lockinPeriod}</p>
            <p>Value: {props.show.totalVal}</p>
            <p>Status: {props.show.status}</p>
            <hr/>
        </div>
    )
}
export default Show;