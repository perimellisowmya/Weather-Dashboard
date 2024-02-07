import { Line } from "react-chartjs-2";
import React from 'react'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const LineChart=({celscius,forecast,ind,day}) =>{
    const hour = forecast[ind].hour;
    const yAxisC=[];
    const yAxisF=[];

    hour.filter((elem,i)=>{
        if(i%3===0){
            return elem
        }
    }).map((item) => {
        yAxisF.push(item.temp_f);
        return null;
    })
    
    hour.filter((elem,i)=>{
        if(i%3===0){
            return elem
        }
    }).map((item) => {
        yAxisC.push(item.temp_c);
        return null;
    })

    console.log(yAxisF)
    const data = {
        labels:['0:0am','3:00am','6:00am','9:00am','12:00pm','3:00pm','6:00pm'],
        datasets:[{
            label: `${(ind===0)?'Today':day[new Date(forecast[ind].date).getDay()]}'s Weather`,
            data: celscius ? yAxisC : yAxisF,
            borderColor:['rgba(56.1%, 0%, 100%,0.3)'],
            pointRadius:6,
            pointBackgroundColor:['rgba(56.1%, 0%, 100%,0.3)'],
            borderWidth:5
        }],
    }

    const options = {
        plugins: {
            legend:{
                display:true,
                align:'end',   
            }
        }
      }

    return <Line data={data} options={options}/>
}

export default LineChart