import React, { PureComponent } from 'react';
import { Card, Text, Grid } from "@nextui-org/react";

import { PieChart } from '@toast-ui/react-chart';

const el = document.getElementById('chart-area');

const data = {
    categories: ['Browser'],
    series: [
      {
        name: 'Chrome',
        data: 46.02,
      },
      {
        name: 'IE',
        data: 20.47,
      },
      {
        name: 'Firefox',
        data: 17.71,
      },
      {
        name: 'Safari',
        data: 5.45,
      },
      {
        name: 'Opera',
        data: 3.1,
      },
      {
        name: 'Etc',
        data: 7.25,
      }
    ]
  }

  const options = {
    chart: { title: '', width: 400, height: 200, background:{
        color: 'black',
    }, },
  };




function Dashboard() {

    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
                <h2>Welcome</h2>
            </div>
            <div className='dashboard-body'>
                <Grid.Container gap={2}>
                    <Grid xs={6} >
                        <Card isHoverable variant="bordered" css={{ mw: "100%" }} className='dash-card'>
                            <Card.Header>
                                <Text><h4>Chart 1</h4></Text>
                            </Card.Header>
                            <Card.Body>
                                <PieChart data={data} options={options}/>
                            </Card.Body>
                        </Card>

                    </Grid>
                    <Grid xs={6} >
                        <Card isHoverable variant="bordered" css={{ mw: "100%" }} className='dash-card'>
                            <Card.Header>
                                <Text><h4>Chart 2</h4></Text>
                            </Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>

                    </Grid>


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