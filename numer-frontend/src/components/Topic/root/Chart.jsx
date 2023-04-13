

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


const Chart=(props)=>{

    const data = {
        labels:props.data.map((e)=>e.iteration),
        datasets:[
            {
                label:'XM',
                data:props.data.map((e)=>e.xm),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label:'ERROR',
                data:props.data.map((e)=>e.error),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }


    return(
        <Line data={data}  options={{
            maintainAspectRatio: false,
            responsive: true,
            height: 400,
            width: 2000,
        }}  />
    )
}

export default Chart;