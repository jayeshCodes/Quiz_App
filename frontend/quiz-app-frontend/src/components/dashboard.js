import React, { PureComponent } from 'react';
import { Card, Text, Grid } from "@nextui-org/react";

import { PieChart } from '@toast-ui/react-chart';

import { BarChart, Bar, LineChart, Line, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, Legend } from 'recharts';

const el = document.getElementById('chart-area');

// const data = {
//   categories: ['Browser'],
//   series: [
//     {
//       name: 'Chrome',
//       data: 46.02,
//     },
//     {
//       name: 'IE',
//       data: 20.47,
//     },
//     {
//       name: 'Firefox',
//       data: 17.71,
//     },
//     {
//       name: 'Safari',
//       data: 5.45,
//     },
//     {
//       name: 'Opera',
//       data: 3.1,
//     },
//     {
//       name: 'Etc',
//       data: 7.25,
//     }
//   ]
// }

// const options = {
//   chart: {
//     title: '', width: 400, height: 200, background: {
//       color: 'black',
//     },
//   },
// };


const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

function Dashboard() {

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h2>Welcome</h2>
      </div>
      <div className='dashboard-body'>
        <Grid.Container gap={2}>
          {/* <Grid xs={6} > */}
          <div>
            <AreaChart width={730} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>          </div>

          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>



          {/* <Card variant="bordered" css={{ mw: "100%" }} className='dash-card'>
                            <Card.Header>
                                <Text><h4>Chart 1</h4></Text>
                            </Card.Header>
                            <Card.Body>
                                <PieChart data={data} options={options}/>
                            </Card.Body>
                        </Card>
 */}

          {/* </Grid> */}
          {/* <Grid xs={6} > */}
          {/* <Card variant="bordered" css={{ mw: "100%" }} className='dash-card'>
                            <Card.Header>
                                <Text><h4>Chart 2</h4></Text>
                            </Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card> */}

          {/* </Grid> */}


        </Grid.Container>
        {/* <Card isHoverable variant="bordered" css={{ mw: "50%" }}>
                    <Card.Header>
                        <Text><h4>Chart 1</h4></Text>
                    </Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card> */}
      </div>
    </div>
  )
}

export default Dashboard;