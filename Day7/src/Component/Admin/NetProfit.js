import React from "react";
import { useState } from "react";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const NetProfit = () =>{
    const  netProfit = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "Net Profit - Year 2022",
        },
        axisX: {
            title: "Month",
            reversed: false,
        },
        axisY: {
            title: "Profit Per Month",
            includeZero: true,
            
        },
        data: [{
            type: "line",
            dataPoints: [
                { y:  1010000, label: "January"},
                { y:  2045000, label: "Febraury" },
                { y:  1142000, label: "March" },
                { y:  1801000, label: "April" },
                { y:  2004000, label: "May" },
                { y:  2550000, label: "June" },
                { y:  701000, label: "July" },
                { y:  901000, label: "August"},
                { y:  1001000, label: "September" },
                { y:  1171000, label: "October" },
                { y:  2001000, label: "November" },
                { y:  2603000, label: "December" }
            ]
        }]
    }
    const [data,setData]=useState({
        netProfit: 18930000,
    })
    return(
        <>
     <div className="line"style={{ maxWidth: "1700px", marginLeft: "200px" }} >
     <CanvasJSChart options = {netProfit} />
     </div>
     <div style={{textAlign: "center", fontSize: "20px", fontFamily: "Catamaran"}}>Net Profit - Year 2022<br></br>{data.netProfit}</div>
        </>
    )
}
export default NetProfit;