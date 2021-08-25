import React, { useState, useEffect } from 'react'
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://punjiup.herokuapp.com/api/fundmanager'
  })
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
        // let headerElement = ['id', 'Fund Name', 'Investor EmailId', 'operation']
        let headerElement = ['Transaction Id', 'Transaction Status']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    api.get('/fund/transactions', body, { "headers": { "content-type": "application/json", } })
    .then(res=>{
      console.log(res.data)
    })
   }

    const renderBody = () => {
        return investors && investors.map(({ id, name, email }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    {/* <td>{name}</td>
                    <td>{email}</td> */}
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


