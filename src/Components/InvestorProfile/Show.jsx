import React from 'react'
function Show (props){
    return(
        <div>
            <h4>Name: {props.show.name} </h4>
            <p>Return: {props.show.return}</p>
            <p>Mini. Investment: {props.show.minInvestment} Rs.</p>
            <hr/>
        </div>
    )
}
export default Show;