
import {Form,Button} from 'react-bootstrap'
import {useState} from 'react';
import axios from 'axios'
import { DataNewton } from './newtoncal';

export const Newton=()=>{
    const [size,Setsize] = useState(0)
    const [x,Setx] = useState([]);
    const [y,Sety] = useState([]);
   
    const [result,Setresult] = useState([]);
    const [points,Setpoint] = useState(0);

    
    const getdata= async ()=>{
        await axios.get(`http://localhost:5555/interpolation?key=${size}`)
        .then(res=>{
            Setx(res.data.x);
            Sety(res.data.y);

        })
        .catch(err=>alert(err))
    }


    const cal=()=>{
        const data = x.map((e,index)=>({x:e,y:y[index]}))
        const ans = DataNewton(data,points)
        Setresult(ans)
    }

    

    return(
        <div>
            <div className="form-inter">

                    <h2>NEWTON</h2>

                    <div className='inter-row'>

                        <Form.Control onChange={e=>Setsize(parseInt(e.target.value))}  placeholder='input size' type='number' style={{width:115}}/>
                        <Button onClick={getdata}>GET API</Button>
                        
                    </div>
                    <div className='form-inter-real'>
                      
                            <Form>
                                <div className='input'>
                                        {x.length!==0 && <div className='x'>
                                            X
                                            {x.map((e,index)=>(
                                                <>
                                                    
                                                    <Form.Control value={e} style={{width:100,marginBottom:20}}/>
                                                </>
                                            ))}
                                        </div>
}
                                        {x.length!==0 && <div className='y'>
                                            Y
                                            {y.map((e)=>(
                                               <Form.Control  value={e} style={{width:100,marginBottom:20}}/>
                                            ))}
                                        </div>}

                                </div>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    { x.length!==0 &&   <Form.Control placeholder='enter point' onChange={e=>Setpoint(parseFloat(e.target.value))}   style={{width:120,}}/>   }                 
                                </div>
                                
                                <br/>              
                                <div className='inter-cal'>
                                   
                                    { x.length!==0 &&  <Button onClick={cal}  >CALCULATE</Button>}
                                </div>

                                <div className='inter-ans'>
                                       {result.length!==0 && <>X =  {points} Y = {result.map((value)=> value.x === points && value.y)}</>}             
                                </div>
                               

                                 
                            </Form>
                    </div>

            </div>

        </div>
    )



}