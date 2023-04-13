

import {Form,Button} from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import {det,clone} from 'mathjs'

const Cramer=()=>{
    const [size,Setsize] = useState(0);
    const [m1,Setm1] = useState([]);
    const [m2,Setm2] = useState([]);
    const [result,Setresult] = useState([]);
    
    const getdata = async ()=>{
        await axios.get(`http://localhost:5555/linear?size=${size}`)
        .then(res=>{
            Setm1(res.data.matrixA)
            Setm2(res.data.matrixB)
        })
    }

    const cal=(e)=>{
        e.preventDefault()
        console.log(m1);
        let detA = det(m1);
        let ans = []
        for(let i = 0 ; i <m1.length;i++)  
        {
            let newA = clone(m1); // Create a deep copy of m1
            for(let j = 0 ; j<m1.length;j++) 
            {
                newA[j][i] = m2[j];
               
            }
        
            let detnewA = det(newA);
            let xi = detnewA / detA
            ans.push(xi)
           
        }
      
        Setresult(ans)
    }
    

    return(
        <div className="linear">
            <h2>CRAMER RULE</h2>

            <div className='linear-form'>
                <Form.Control onChange={e=>Setsize(parseInt(e.target.value))} type='number' style={{width:150}} placeholder='input size'/>
                <Button style={{marginLeft:30}} onClick={getdata}>GET DATA</Button>
            </div>
            <br/>          
            <Form onSubmit={cal}>
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
                      <Button type='submit' id='linear-cal'>CALCULATE</Button>          
                </Form>

                {result.map((e,index)=>(
                    <h3>X{index+1} = {e}</h3>
                ))}
        </div>
    )
}



export default Cramer;