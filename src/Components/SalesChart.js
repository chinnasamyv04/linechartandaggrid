import React from 'react';
import {Container, Card} from 'react-bootstrap';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

import AgGridTable from './simpleGrid';

function SalesChart(props) {
  const data = props.data;
  const formatDate = (date) => {
      return moment(date, "YYYY-MM-DD").format("MMMM")
  }
  return (
    <Container>
    <Card >
    <ResponsiveContainer>
      <LineChart data={data.sales}>
        <XAxis dataKey="weekEnding"  tickFormatter={weekEnding => formatDate(new Date(weekEnding))}/>
        { /* <YAxis /> */}
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#82ca9d" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    <AgGridTable gridData={data.sales} />
    </Card>
    
    </Container>
  );
}

export default SalesChart;