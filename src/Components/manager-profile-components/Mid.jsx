import React from "react";

function Mid(props) {
    return (
        <div>
        
            {/* <img src="assets/photos/strip.png" alt="image1" className="fullwidth"></img> */}
            <h3 className="man">{props.show.ManagerName}<br/>(AUM-{props.show.AUM}, Schemes-{props.show.Schemes}, Experience-{props.show.HighestReturns} )</h3>
        
<br/>
        </div>

    )
}
export default Mid