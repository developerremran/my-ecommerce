import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './BarChartAdmin.css';
import CategoryData from '../../../../API/CategoryData';

const BarChartAdmin = () => {
    const [productCategory,productCategory1,productCategory2]=CategoryData()

    const productCount = productCategory.length +productCategory1.length+ productCategory2.length;

   
    const data = [
        {
            name: 'January',
            totalProduct: productCount,
            totalSale: 13,
            per:10
            
        },
        {
            name: 'February',
            totalProduct: productCount,
            totalSale: 13,
            per:15
            
        },
        {
            name: 'March',
            totalProduct: productCount,
            totalSale: 13,
            per:20
            
        },
        {
            name: 'May',
            totalProduct: productCount,
            totalSale: 13,
            per:25
            
        },
        {
            name: 'June',
            totalProduct: productCount,
            totalSale: 13,
            per:30
            
        },
        {
            name: 'July',
            totalProduct: productCount,
            totalSale: 13,
            per:35

            
        },
        {
            name: 'August',
            totalProduct: productCount,
            totalSale: 13,
            per:40

            
        },
        {
            name: 'September',
            totalProduct: productCount,
            totalSale: 13,
            per:45

            
        },
    ];
    return (
        <div>

            <BarChart
                width={800}
                height={500}
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
                <YAxis dataKey="per"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="totalSale" fill="#8884d8" />
                <Bar dataKey="totalProduct" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default BarChartAdmin;