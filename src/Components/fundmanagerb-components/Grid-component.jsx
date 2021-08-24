import { React } from 'react'
import {Link} from 'react-router-dom'
function returnTableHeaders(tHeaderConfig) {

    return tHeaderConfig.map((elem, key) => {
        return <th key={key}>{elem}</th>
    })

}

function returnTableRow(trow) {
    let rowObj = Object.keys(trow);
    let i = 0;
    return rowObj.map((objKey, key) => {
        i++;
        // console.log(trow.mgrId)
        if(objKey=="mgrId" || objKey=="createdAt" || objKey=="updatedAt"){
            return <></>
        }
        return <td key={i}><Link to={{pathname:'/Fundmanagerb/allfunds',state:{id:trow.mgrId}}}>{trow[objKey]}</Link></td>

    })
}

function returnTableData(tData) {
    return tData.map((obj, key) => {
        let i = key;
        let trow = returnTableRow(obj)
        return <tr key={key}>
            {trow}
        </tr>
    })

}



function GridComponent(props) {

    let gridObj = props.gridObj;
    if (!gridObj) {
        return (<>"Grid Property is missing."</>);
    }


    return (
        <div>


            <table>
                <thead>
                    <tr>
                        {
                            returnTableHeaders(gridObj.columnHeaderNames)
                        }



                    </tr>
                </thead>
                <tbody>
                    {
                        (gridObj.data && gridObj.data.length) &&
                        returnTableData(gridObj.data)
                    }


                </tbody>
            </table>

        </div>

    )
}
export default GridComponent;