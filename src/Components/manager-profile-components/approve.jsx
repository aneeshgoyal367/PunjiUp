import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/JSON/approve.json'

const Table = () => {
    const [investors, setInvestors] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setInvestors(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = investors.filter(investor => id !== investor.id)
            setInvestors(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Fund Name', 'Investor EmailId', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return investors && investors.map(({ id, name, email }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
 <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Reject</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>Approve/Reject Funds Below</h1>
            <table id='investor'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default Table

// import React from "react";

// function T3() {
//     return (
//         <div className="T1">
//           <h3>List of Approve & Not-Approve Funds</h3>
//           <table>
//                 <tr>
//                   <th>Fund Name(OPEN-ENDED)</th>
//                   <th>Investor Email Id's</th>
//                   <th>Approve/Not-Approved Funds</th>
                  

//                 </tr>
//                 <tr>
//                   <td>SBI Small Cap Fund</td>
//                   <td>ram@gmail.com</td>
//                   <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                  
                  
                  
                  
//                 </tr>
//                 <tr>
//                     <td>Mirae Asset Emerging Bluechip Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
                    
//                 </tr>
//                 <tr>
//                     <td>Canara Robeco Consumer Trends Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//                 <tr>
//                     <td>Aditya Birla Sun Life Banking & Financial Services Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                   
                    
//                 </tr>
//                 <tr>
//                     <td>Motilal Oswal NASDAQ 100 Exchange Traded Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
                    
//                 </tr>
//                 <tr>
//                     <td>ICICI Prudential Banking and Financial Services Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                   
                    
//                 </tr>
//               </table>
//               <table>
//                 <tr>
//                     <th>Fund Name(CLOSED-ENDED)</th>
//                     <th>Investor Email Id's</th>
//                     <th>Approve/Not-Approve Funds</th>
                    

//                 </tr>
//                 <tr>
//                     <td>SBI Small Cap Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//                 <tr>
//                     <td>Mirae Asset Emerging Bluechip Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//                 <tr>
//                     <td>Canara Robeco Emerging Equities Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//                 <tr>
//                     <td>Nippon India Small Cap Fund (earlier Reliance Small Cap Fund)</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                   
//                 </tr>
//                 <tr>
//                     <td>Kotak Emerging Equity Scheme</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//                 <tr>
//                     <td>ICICI Prudential All Seasons Bond Fund</td>
//                     <td>ram@gmail.com</td>
//                     <td><button type="button" onclick="alert('Added!')">Approve</button>
//                   <button type="button" onclick="alert('Added!')">Not-Approve</button></td>
                    
//                 </tr>
//             </table>
//         </div>
//       );
// }

// export default T3;
// import {React} from 'react'

// function approve(props) {
 
//     return (
        
//            <div className="T1">
//        <h3>List of Approve & Not-Approve Funds</h3> 

// <table>
  
                 
//                 <tr>
//                  <th>Fund Name</th>
//                  <th>Investor Email Id's</th>
//                 <th>Approve/Not-Approved Funds</th>
              
//                  </tr>
//                  <tr>
//                   <td>{props.show.FundName}</td>
//                   <td>{props.show.InvestorMail}</td>
//                   <td><button type="button" onclick="alert('Added!')">{props.show.ApproveFund}</button>
//                   <button type="button" onclick="alert('Added!')">{props.show.NotApprove}</button></td>
                  
                 
//                 </tr>
               
//                 </table>

//         </div>
        
//         )
//     }
//     export default approve