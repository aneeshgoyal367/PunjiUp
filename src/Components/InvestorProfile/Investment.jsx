import React from 'react'
import Show from './Show'
function Investment (props){
    return(
        props.show.map((e) => {
            return <Show show={e}/>
        })
    );
}
export default Investment;