// src/App.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import './App.css';
import axios from 'axios';
// import data from '../Data.json'

function App() {
  const option = {
    legend: {
      top: 'bottom',
      data: ['Intention']
    },
    tooltip: {
      triggerOn: 'click',
      position: function (pt) {
        return [pt[0], 60];
      }
    },
    xAxis: {
      type: 'category',
      // axisLine: {     // x line
      //   show: false
      // },
      axisLabel: {
        show: false,
        interval: 'none'
      },
      axisPointer: {
        value: '0',
        // snap: true,
        lineStyle: {
          color: 'black',
          width: 2
        },
        handle: {
          show: true,
          color: '#000000',
          size: 35
        },
        label: {
          show: true,
          backgroundColor: '#000000'
        },
      },
      data: ['1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14',
        '1-2', '3-4', '5-6', '7-8', '9-10', '11-12', '13-14']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: true
      },
      splitLine: {
        show: false
      },
    },
    // grid: {
    //     top: 10,
    //     left: 40,
    //     right: 15,
    //     height: 300
    // },
    series: [
      {
        name: 'Count',
        data: [100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          0, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          1, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130,
          3, 200, 150, 80, 70, 110, 130,
          100, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  return  (
      <div className="app-container">
        <ReactEcharts option={option} />
      </div>
  );

}
export default App;