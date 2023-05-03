import React, { PureComponent } from 'react';
import { Card, Text, Grid } from "@nextui-org/react";

import { PieChart } from '@toast-ui/react-chart';

import { BarChart, Bar, LineChart, Line, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, linearGradient, Legend, RadarChart, PolarAngleAxis, PolarGridProps, Radar, PolarRadiusAxis, PolarGrid, Treemap, TreemapProps } from 'recharts';

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

const subject_data = [
  {
    "subject": "Math",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Hindi",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "English",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Geography",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "Physics",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "History",
    "A": 65,
    "B": 85,
    "fullMark": 150
  }
]

const tree_data = [
  {
    "name": "History",
    "children": [
      {
        "name": "History",
        "size": 24593
      },
      {
        "name": "Axes",
        "size": 1302
      },
      {
        "name": "AxisGridLine",
        "size": 652
      },
      {
        "name": "AxisLabel",
        "size": 636
      },
      {
        "name": "CartesianAxes",
        "size": 6703
      }
    ]
  },
  {
    "name": "Civics",
    "children": [
      {
        "name": "TooltipControl",
        "size": 8435
      },
      {
        "name": "SelectionControl",
        "size": 7862
      },
      {
        "name": "PanZoomControl",
        "size": 5222
      },
      {
        "name": "HoverControl",
        "size": 4896
      },
      {
        "name": "ControlList",
        "size": 4665
      },
      {
        "name": "ClickControl",
        "size": 3824
      },
      {
        "name": "ExpandControl",
        "size": 2832
      },
      {
        "name": "DragControl",
        "size": 2649
      },
      {
        "name": "AnchorControl",
        "size": 2138
      },
      {
        "name": "Control",
        "size": 1353
      },
      {
        "name": "IControl",
        "size": 763
      }
    ]
  },
  {
    "name": "Social Studies",
    "children": [
      {
        "name": "Civics",
        "size": 20544
      },
      {
        "name": "NodeSprite",
        "size": 19382
      },
      {
        "name": "Indian History",
        "size": 19788
      },
      {
        "name": "DataSprite",
        "size": 10349
      },
      {
        "name": "EdgeSprite",
        "size": 3301
      },
      {
        "name": "render",
        "children": [
          {
            "name": "EdgeRenderer",
            "size": 5569
          },
          {
            "name": "ShapeRenderer",
            "size": 2247
          },
          {
            "name": "ArrowType",
            "size": 698
          },
          {
            "name": "IRenderer",
            "size": 353
          }
        ]
      },
      {
        "name": "ScaleBinding",
        "size": 11275
      },
      {
        "name": "TreeBuilder",
        "size": 9930
      },
      {
        "name": "Tree",
        "size": 7147
      }
    ]
  },
  {
    "name": "events",
    "children": [
      {
        "name": "DataEvent",
        "size": 7313
      },
      {
        "name": "SelectionEvent",
        "size": 6880
      },
      {
        "name": "TooltipEvent",
        "size": 3701
      },
      {
        "name": "VisualizationEvent",
        "size": 2117
      }
    ]
  },
  {
    "name": "legend",
    "children": [
      {
        "name": "Social",
        "size": 20859
      },
      {
        "name": "LegendRange",
        "size": 10530
      },
      {
        "name": "LegendItem",
        "size": 4614
      }
    ]
  },
  {
    "name": "operator",
    "children": [
      {
        "name": "distortion",
        "children": [
          {
            "name": "Distortion",
            "size": 6314
          },
          {
            "name": "BifocalDistortion",
            "size": 4461
          },
          {
            "name": "FisheyeDistortion",
            "size": 3444
          }
        ]
      },
      {
        "name": "encoder",
        "children": [
          {
            "name": "PropertyEncoder",
            "size": 4138
          },
          {
            "name": "Encoder",
            "size": 4060
          },
          {
            "name": "ColorEncoder",
            "size": 3179
          },
          {
            "name": "SizeEncoder",
            "size": 1830
          },
          {
            "name": "ShapeEncoder",
            "size": 1690
          }
        ]
      },
      {
        "name": "filter",
        "children": [
          {
            "name": "FisheyeTreeFilter",
            "size": 5219
          },
          {
            "name": "VisibilityFilter",
            "size": 3509
          },
          {
            "name": "GraphDistanceFilter",
            "size": 3165
          }
        ]
      },
      {
        "name": "IOperator",
        "size": 1286
      },
      {
        "name": "label",
        "children": [
          {
            "name": "Labeler",
            "size": 9956
          },
          {
            "name": "RadialLabeler",
            "size": 3899
          },
          {
            "name": "StackedAreaLabeler",
            "size": 3202
          }
        ]
      },
      {
        "name": "layout",
        "children": [
          {
            "name": "RadialTreeLayout",
            "size": 12348
          },
          {
            "name": "NodeLinkTreeLayout",
            "size": 12870
          },
          {
            "name": "CirclePackingLayout",
            "size": 12003
          },
          {
            "name": "CircleLayout",
            "size": 9317
          },
          {
            "name": "TreeMapLayout",
            "size": 9191
          },
          {
            "name": "StackedAreaLayout",
            "size": 9121
          },
          {
            "name": "General",
            "size": 7881
          },
          {
            "name": "AxisLayout",
            "size": 6725
          },
          {
            "name": "IcicleTreeLayout",
            "size": 4864
          },
          {
            "name": "DendrogramLayout",
            "size": 4853
          },
          {
            "name": "ForceDirectedLayout",
            "size": 8411
          },
          {
            "name": "BundledEdgeRouter",
            "size": 3727
          },
          {
            "name": "IndentedTreeLayout",
            "size": 3174
          },
          {
            "name": "PieLayout",
            "size": 2728
          },
          {
            "name": "RandomLayout",
            "size": 870
          }
        ]
      },
      {
        "name": "OperatorList",
        "size": 5248
      },
      {
        "name": "OperatorSequence",
        "size": 4190
      },
      {
        "name": "OperatorSwitch",
        "size": 2581
      },
      {
        "name": "Operator",
        "size": 2490
      },
      {
        "name": "SortOperator",
        "size": 2023
      }
    ]
  }
]



const data = [
  {
    "name": "Subject1",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Subject2",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Subject3",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Subject4",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Subject5",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Subject6",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Subject7",
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
        {/* <Grid.Container gap={2}> */}
        {/* <Grid xs={6} > */}
        <div className='uppercharts'>

          <div className='area-chart'>
            <AreaChart width={600} height={250} data={data}
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
            </AreaChart>
          </div>
          <div className='radar-chart'>
            <RadarChart outerRadius={90} width={500} height={300} data={subject_data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Jayesh" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Neil" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </div>
        </div>

        <div className='lowercharts'>

          <div className='bar-chart'>
            <BarChart width={600} height={290} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>

          </div>
          <div className='treemap'>
            <Treemap
              width={500}
              height={250}
              data={tree_data}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="#fff"
              fill="#8884d8"
            />
          </div>
        </div>





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


        {/* </Grid.Container> */}
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