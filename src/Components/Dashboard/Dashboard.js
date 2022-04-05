import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css";

const Dashboard = () => {

    const [chartData , setChartData] = useState([]);

    useEffect( () => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setChartData(data))
    } , []);

    return (
      <div className="dashboard">
        <div>
          <h2>Month wise Sell</h2>
          <LineChart width={600} height={300} data={chartData}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div>
          <h2>Month wise Investment and Revinue</h2>

          <AreaChart
            width={600}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#65C18C"
              fill="#65C18C"
            />

            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </div>
      </div>
    );
};

export default Dashboard;