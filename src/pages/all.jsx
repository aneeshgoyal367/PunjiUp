import React from 'react'


import Bottom from '../Components/open-end-components/Bottom'
import CloseEndComponent from '../Components/closed-end-components/Bottom'


import '../CSS/openend.css'
function all() {
    return (
        <div>
            
            <div><strong>Open End funds</strong></div><br/>
            <div id="Bottom"><Bottom /></div>
            <div><strong>Closed End funds</strong></div><br/>
            <div id="Bottom"><CloseEndComponent/></div>

        </div>
    )
}
export default all