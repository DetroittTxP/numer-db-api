import {useState} from 'react';
import {Button,Form,Table} from 'react-bootstrap';
import { evaluate } from 'mathjs'
import axios from 'axios'
import Chart from './Chart'

const Bisection =()=>{
   const [func,Setequation] = useState('')
   let [xl,Setxl] = useState(null)
   let [xr,Setxr] = useState(null)
   const [result,Setresult] = useState([]);
   const [apidata,Setapidata] = useState({});

   const cal =(e)=>{
      e.preventDefault();
      let xm = (xl+xr)/2
      let fxl = evaluate(func,{x:xl});
      let fxm = evaluate(func,{x:xm});
      let iteration = 1;
      let dataTable = [];
  
      while(Math.abs(fxm) > 0.0001){
  
          
           xm = (xl + xr)/2;
           fxm = evaluate(func,{x:xm});
          
           if(fxl * fxm < 0 ){
                xr = xm;
  
           }else{
                xl = xm;
                fxl = fxm
           }
           let error = Math.abs((xr - xl) / xm); 
           dataTable.push({ 
                
                iteration:iteration,
                xm:xm,
                xl:xl,
                xr:xr,
                error:error
           })
            
           iteration++;  
      }
      Setresult(dataTable);
      console.log('success');
   }


   const getdata= async ()=>{
      await axios.get('http://localhost:5555/root')
      .then(res=>{
         Setapidata(res.data)
         Setequation(res.data.equation)
         Setxl(res.data.xl)
         Setxr(res.data.xr)
      })
      .catch(err=>alert(err))
   }

   return(
      <div className='root'>
          <h2>BISECTION</h2>      
          <div className='root-form'>
            <Form onSubmit={cal} >
               <Form.Group className="mb-4" >
                     <Form.Label>EQUATION</Form.Label>
                        <Form.Control value={apidata.equation}   onChange={e=>Setequation(e.target.value)} style={{width:300}}  type='text' placeholder="Enter equation" />
               </Form.Group>

               <Form.Group className="mb-4" >
                     <Form.Label>XL</Form.Label>
                        <Form.Control value={apidata.xl}  onChange={e=>Setxl(parseFloat(e.target.value))} style={{width:300}}  type='text' placeholder="Enter xl" />
               </Form.Group>

               <Form.Group className="mb-4" >
                     <Form.Label>XR</Form.Label>
                        <Form.Control value={apidata.xr}  onChange={e=>Setxr(parseFloat(e.target.value))} style={{width:300}}  type='text' placeholder="Enter xr" />
               </Form.Group>
               <Button  type='submit'   id='root-button'>CALCULATE</Button>
               <Button onClick={getdata} id='root-api' >GET DATA</Button>


               <div className='root-answer'>
                    {result.length !== 0 && <h5>Answer is {result[result.length-1].xm} </h5>}

               </div>

             

           

               <div className='root-table'>
                     { result.length !== 0 &&
                     <Table striped bordered hover>
                           <thead>
                                <th>ITERATION</th>
                                <th>XM</th>
                                <th>XL</th>
                                <th>XR</th>
                                <th>ERROR</th>
                           </thead>

                           <tbody>
                               {result.map((e)=>(
                                   <tr>
                                       <td>{e.iteration}</td>
                                       <td>{e.xm}</td>
                                       <td>{e.xl}</td>
                                       <td>{e.xr}</td>
                                       <td>{e.error}</td>
                                   </tr>
                               ))}
                           </tbody>
                     </Table>}
               </div>

               <div className='root-graph'>
                        <Chart data = {result}/>
               </div>

            </Form>

            
            
           
          
          </div>
      </div>
   )
}

export default Bisection;

