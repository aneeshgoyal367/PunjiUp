import { React } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

// import allfund from './allfund'
// import addfund from './addfund'
import addjson from './addjson'
import approve from './approve'
import CBottom from '../closed-end-components/Bottom'
import OBottom from '../open-end-components/Bottom'


function Bottom() {
    return (
        <div>
            {/* <h2>Topics</h2> */}
            <Router>
                <ul className="border1">
                    {/* <li><Link to='/all'>All Funds List</Link></li> */}
                    <li>
                        <Link to='/investor/openEnd'> Open End Funds List </Link>
                    </li>
                    <br/>
                    <li>
                        <Link to='/investor/closeEnd' >Close End Funds List </Link>
                    </li>
                    
                    <br/>
                    {/* <li><Link to='/addfund'>Add Funds</Link></li> */}
                    <li><Link to='/addjson'>Add Funds</Link></li> 
                    
                    
                    <br/>
                    <li><Link to='/approve'>Approve/Not Approve Funds</Link></li>
                    
                    <br/>
                </ul>

                

                <div>

                    <Switch>
                        {/* <Route path='/allfund' component={allfund} /> */}
                        {/* <Route path='/all' component={all} /> */}
                        {/* <Route path='/addfund' component={addfund} /> */}
                        <Route path='/investor/openEnd' component={CBottom} />
                        <Route path='/investor/closeEnd' component={OBottom} />
                        <Route path='/addjson' component={addjson} />
                        <Route path='/approve' component={approve} />
                       
                {/* <h3>Please select a topic.</h3> */}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
export default Bottom