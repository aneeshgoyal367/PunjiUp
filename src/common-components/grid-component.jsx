import {React} from 'react'
import {Link} from 'react-router-dom'
function returnTableHeaders(tHeaderConfig) {
    // if(window.users.loggedIn) {
    //     tHeaderConfig.push("Add Fund");
    // }
     return tHeaderConfig.map((elem, key) => {
        return <th key={key}>{elem}</th>
    })
    
}

function returnTableRow(trow) {
    let rowObj = Object.keys(trow);
    let i = 0;
    return rowObj.map((objKey, key) => {
        i++;
        // console.log(trow);
        // console.log(rowObj);
        
        if(objKey=="FundName"){
            return <td key={i}><Link to={{ pathname: "/funddetail", state: { id: trow.id}}}>{trow[objKey]}</Link></td> 
        }
        else{
        return <td key={i}>{trow[objKey]}</td>
        }
    })
}
{/* <Link to={{
                pathname: `/movie/${movie.slug}`,
                state: {
                  id: movie.id,
                  data: movie,
                }
              }}>{movie.title}</Link> */}

              
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