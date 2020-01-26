import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../canvasjs-2.3.2/canvasjs.react';
import styled from 'styled-components';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


CanvasJS.addColorSet("greenShades",
[//colorSet Array
"#7ed6df",  
"#badc58"                 
]);


const ChartContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:150;
    height:150;
`;


const DonutChart = props => {
    var [title, setTitle] = useState("");
    var [subTitle, setSubTitle] = useState("");
    var [dataPoints, setDataPoints] = useState([]);

    useEffect(()=> {
        title = setTitle(props.title);
        subTitle = setSubTitle(props.setSubTitle);
        dataPoints = setDataPoints(props.dataPoints);
    });
   
   

    var options = {
        colorSet:'greenShades',
        animationEnabled: true,
        title: {
            text: title
        },
        subtitles: [{
            text: subTitle,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: false
        }],
        width:140,
        height:140,
        data: [{
            type: "doughnut",
           
            showInLegend: false,
            indexLabel: "{name}: {y}",
            yValueFormatString: "'$'#,###",
            dataPoints: dataPoints
        }]};

    return (
        <ChartContainer>
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        </ChartContainer>

    )

};

export default DonutChart;


