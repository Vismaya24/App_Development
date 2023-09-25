import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from "react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const WeekSale = () =>{
    const weeklySale = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "Art Work Sold - Week 31",
        },
        axisX: {
            title: "Week",
            reversed: false,
        },
        axisY: {
            title: "Number of Art Work Sold",
            includeZero: true,
            
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  51, label: "Sunday"},
                { y:  55, label: "Monday" },
                { y:  31, label: "Tuesday" },
                { y:  41, label: "Wednesday" },
                { y:  20, label: "Thursday" },
                { y:  21, label: "Friday" },
                { y:  41, label: "Saturday" }
            ]
        }]
    }
    const [data,setData]=useState({
        totalProducts: 260,
    })
    return(
        <>
     <div className="bar"style={{ maxWidth: "1700px", marginLeft: "200px"  }} >
     <CanvasJSChart options = {weeklySale} />
    <div style={{textAlign: "center", fontSize: "20px", fontFamily: "Catamaran"}}>Total Products Sold - Week 31<br></br>{data.totalProducts}</div>
     </div>
     </>
    )
}
export default WeekSale;