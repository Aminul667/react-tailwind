import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            setPhones(phoneData);
        })
    }, [])

    return (
        <div>
            <h1>Hello Phone bar</h1>
            <BarChart width={1000} height={500} data={phones}>
                <Bar dataKey="price" fill="#1de1f8"/>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneBar;