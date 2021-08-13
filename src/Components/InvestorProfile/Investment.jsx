import React from 'react'
import Show from './Show'
function Investment (){
    let data=[
        {
            name:'Kotak',
            return:'33%',
            minInvestment: 1000
        },
        {
            name:'HDFC',
            return:'30%',
            minInvestment: 1200
        },
        {
            name:'ICICI',
            return:'40%',
            minInvestment: 500
        },
        {
            name:'IDBI',
            return:'25%',
            minInvestment: 800
        }
    ];
    return(
        data.map((e) => {
            return <Show show={e}/>
        })
    );
}
export default Investment;