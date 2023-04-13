
import {Route,Routes} from 'react-router-dom' 
import Bisection from './components/Topic/root/Bisection'
import Cramer from './components/Topic/linear/Cramer'
import { Newton } from './components/Topic/interpolation/newton'
const Router = ()=>{
    return(
        <Routes>
             <Route path='/bisection' element={<Bisection/>}/>
             <Route path='/cramer' element={<Cramer/>}/>
             <Route path='/newton' element={<Newton/>}/>
        </Routes>
    )
}
export default Router