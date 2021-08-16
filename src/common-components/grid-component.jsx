import {React} from 'react'

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
        return <td key={i}>{trow[objKey]}</td>
        
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