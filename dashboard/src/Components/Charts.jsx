import React from "react";
// import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    {
      name: "Jan",
      products: 18,
      sales: 30,
      Visitors: 40,
    },
    {
      name: "Feb",
      products: 20,
      sales: 30,
      Visitors: 36,
    },
    {
      name: "March",
      products: 25,
      sales: 38,
      Visitors: 10,
    },
    {
      name: "April",
      products: 40,
      sales: 24,
      Visitors: 22,
    },
    {
      name: "May",
      products: 26,
      sales: 24,
      Visitors:30,
    },
    {
      name: "June",
      products: 26,
      sales: 12,
      Visitors: 30,
    },
    {
      name: "July",
      products:10,
      sales: 24,
      Visitors: 40,
    },
    {
      name: "Aug",
      products: 11,
      sales: 29,
      Visitors:37,
    },
    {
      name: "sept",
      products: 22,
      sales: 30,
      Visitors:14,
    },
    {
      name: "Oct",
      products: 33,
      sales: 22,
      Visitors: 13,
    },
    {
      name: "Nov",
      products:13,
      sales: 24,
      Visitors:30,
    },
    {
      name: "Dec",
      products:30,
      sales: 24,
      Visitors:5,
    
    },
  ];
  return (
    <div className="" style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="products"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="sales"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="Visitors"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
