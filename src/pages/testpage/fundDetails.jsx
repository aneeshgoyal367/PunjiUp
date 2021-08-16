import React, { useState, useEffect } from 'react'

import OpenEndComponent from '../../Components/open-end-components/Bottom'
import CloseEndComponent from '../../Components/closed-end-components/Bottom'

export default function fundDetails () {



    return (
        <>
            <div>Open End Funds:</div> <br/>
            <OpenEndComponent/>
            <div>Close End Funds:</div><br/>
            <CloseEndComponent/>
        </>
    )
}