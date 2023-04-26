import React from 'react'
import { Card, Container, Text, Button, Modal, useModal } from '@nextui-org/react'

export default function Tests() {
  const tests = [
    {
      id: 1,
      name: 'test1',
      description: 'lorem ipsum'
    },
    {
      id: 2,
      name: 'test2',
      description: 'lorem ipsum'
    },
    {
      id: 3,
      name: 'test3',
      description: 'lorem ipsum'
    },
    // {
    //   id: 4,
    //   name: 'test4',
    //   description: 'lorem ipsum'
    // }
  ]

  return (
    <div>
      {tests.map((item, index) => (
        <div className='test-card-container'>

        <Card className='test-card'>
          <Card.Header><h3>{item.name}</h3></Card.Header>
          <Card.Divider className="card-divider" />
          <Card.Body>{item.description}</Card.Body>
          <Button size="md" color="secondary" >
            Open Test
          </Button>
        </Card>
        </div>

      ))}

    </div>
  )
}
