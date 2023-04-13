
import {Route,Routes} from 'react-router-dom' 
import Bisection from './components/Topic/root/Bisection'
import Cramer from './components/Topic/linear/Cramer'
const Router = ()=>{
    return(
        <Routes>
             <Route path='/bisection' element={<Bisection/>}/>
             <Route path='/cramer' element={<Cramer/>}/>
        </Routes>
    )
}
export default Router