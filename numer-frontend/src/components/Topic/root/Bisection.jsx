import {useState} from 'react';
import {Button,Form,} from 'react-bootstrap';
import { evaluate } from 'mathjs'

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

   return(
      <div className='root'>
          <h2>BISECTION</h2>      
          <div className='root-form'>
            <Form onSubmit={cal} >
               <Form.Group className="mb-4" >
                     <Form.Label>EQUATION</Form.Label>
                        <Form.Control  onChange={e=>Setequation(e.target.value)} style={{width:300}}  type='text' placeholder="Enter equation" />
               </Form.Group>

               <Form.Group className="mb-4" >
                     <Form.Label>XL</Form.Label>
                        <Form.Control onChange={e=>Setxl(parseFloat(e.target.value))} style={{width:300}}  type='text' placeholder="Enter xl" />
               </Form.Group>

               <Form.Group className="mb-4" >
                     <Form.Label>XR</Form.Label>
                        <Form.Control onChange={e=>Setxr(parseFloat(e.target.value))} style={{width:300}}  type='text' placeholder="Enter xr" />
               </Form.Group>
               <Button  type='submit'   id='root-button'>CALCULATE</Button>
               <Button id='root-api' >GET DATA</Button>


               <div className='root-answer'>
                    {result.length !== 0 && <h5>Answer is {result[result.length-1].xm} </h5>}

               </div>

            </Form>
            
           
          
          </div>
      </div>
   )
}

export default Bisection;

