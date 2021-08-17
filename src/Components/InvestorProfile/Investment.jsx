import React from 'react'
import Show from './Show'
function Investment (props){
    let i=0;
    return(
        props.show.map((e) => {
            return <Show key={e.cust_id + i++} show={e}/>
        })
    );
}
export default Investment;