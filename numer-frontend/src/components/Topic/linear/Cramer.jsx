

import {Form,Button} from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';


const Cramer=()=>{
    const [size,Setsize] = useState(0);
    const [matrixA,SetmatirxA] = useState(Array.from({length:size},()=>Array(size).fill(0))) 
    const [vector,Setvector] = useState(Array.from({length:size}).fill(0));
    const [m1,Setm1] = useState([]);
    const [m2,Setm2] = useState([]);

    
    const getdata = async ()=>{
        await axios.get(`http://localhost:5555/linear?size=${size}`)
        .then(res=>{
            Setm1(res.data.matrixA)
            Setm2(res.data.matrixB)
        })
    }

    return(
        <div className="linear">
            <h2>CRAMER RULE</h2>

            <div className='linear-form'>
                <Form.Control onChange={e=>Setsize(parseInt(e.target.value))} type='number' style={{width:150}} placeholder='input size'/>
                <Button style={{marginLeft:30}} onClick={getdata}>GET DATA</Button>

                

              

            </div>

            <br/>
            

            <Form >
                  <Form.Group  >
                    {m1.map((row,index)=>(
                        <div style={{display:'flex',position:'relative',left:1000,marginTop:20}} >
                            {row.map((col,colindex)=>(
                                <>
                                    <Form.Control   style={{width:75,marginLeft:20,marginRight:3}} value={col} key={index}/>
                                    X{colindex < size-1 ? '+' : '='}
                                </>
                            ))}
                            <Form.Control value={m2[index]} style={{width:75,marginLeft:20,marginRight:3}} />
                        </div>
                    ))}

                
                    </Form.Group>
                
                </Form>
        </div>
    )
}


export default Cramer;