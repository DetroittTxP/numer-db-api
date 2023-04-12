
import {Route,Routes} from 'react-router-dom' 
import Bisection from './components/Topic/root/Bisection'

const Router = ()=>{
    return(
        <Routes>
             <Route path='/bisection' element={<Bisection/>}/>
        </Routes>
    )
}
export default Router