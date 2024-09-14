import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarCharts = () => {
  const data = [
    {
      name: 900,
      us:1000,
      Eurupe:1500,
      Asian:1700,
      Africa:500,
    
    },
    {
        name: 1200,
        us:1000,
        Eurupe:1500,
        Asian:1700,
        Africa:500,
      
      },
      {
        name:1400,
        us:1000,
        Eurupe:1500,
        Asian:1700,
        Africa:500,
      
      },
      {
        name: 1600,
        us:1000,
        Eurupe:1500,
        Asian:1700,
        Africa:500,
      
      },
    
  ];

  return (
    <div style={{ width: '100%', height: '300px' }} className="bg-white">
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="us" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Eurupe" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey="Asian" fill="#ff9076" activeBar={<Rectangle fill="#ff9076" stroke="#ff9076" />} />
          <Bar dataKey="Africa" fill="#d595e5" activeBar={<Rectangle fill="#d595e5" stroke="#d595e5" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
