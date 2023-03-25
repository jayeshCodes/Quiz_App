import React from 'react';
import { Card, Text } from "@nextui-org/react";

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
                <h2>Welcome</h2>
            </div>
            <div className='dashboard-body'>
                <Card isHoverable variant="bordered" css={{ mw: "200px" }}>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard;