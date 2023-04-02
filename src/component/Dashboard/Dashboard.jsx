import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        {
          id: 1,
          name: "John",
          physics: 76,
          chemistry: 78,
          math: 82
        },
        {
          id: 2,
          name: "Emily",
          physics: 88,
          chemistry: 87,
          math: 71
        },
        {
          id: 3,
          name: "James",
          physics: 82,
          chemistry: 81,
          math: 62
        },
        {
          id: 4,
          name: "Sarah",
          physics: 92,
          chemistry: 91,
          math: 94
        },
        {
          id: 5,
          name: "David",
          physics: 85,
          chemistry: 84,
          math: 78
        },
        {
          id: 6,
          name: "Ava",
          physics: 90,
          chemistry: 91,
          math: 85
        },
        {
          id: 7,
          name: "Daniel",
          physics: 81,
          chemistry: 83,
          math: 72
        },
        {
          id: 8,
          name: "Olivia",
          physics: 77,
          chemistry: 79,
          math: 68
        },
        {
          id: 9,
          name: "Michael",
          physics: 89,
          chemistry: 88,
          math: 90
        },
        {
          id: 10,
          name: "Emma",
          physics: 84,
          chemistry: 86,
          math: 79
        }
      ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;