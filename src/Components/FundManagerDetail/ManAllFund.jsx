import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import ShowManFund from './ShowManFund'
const api = axios.create({
    baseURL : 'http://localhost:3000/JSON/cust-fund.json'
})
function ManAllFund (props){
    const [fundData,setfundData] = useState([]);
    useEffect(() => {
        api.get('').then(res => {
            setfundData(res.data)
        })
    },[])
    let allFund = fundData.filter(e => e.mngr_id == props.id); 
    // debugger;
    return (
        allFund.map((e) => {
            return <ShowManFund key={e.fund_id} show={e}/>
        })
    )
}
export default ManAllFund
