import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserData } from '../data';
  
const Container = styled.div`
    flex: 1;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const ChartTitle = styled.h3`
    margin-bottom: 20px;
`
 
const Chart = () => {
  return (
    <Container>
        <ChartTitle>Sales Analytics</ChartTitle>
        <ResponsiveContainer width="100%" aspect={4 / 1} >
            <LineChart data={UserData} >
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey="Active Users" stroke="#5550bd" />
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}
 
export default Chart