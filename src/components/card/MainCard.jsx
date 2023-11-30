import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MainCard({crdImg,crdTitle, crdSubtitle}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={crdImg} style={{width:'100%', height:'60vh'}} />
      <Card.Body>
        <Card.Title>{crdTitle}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{crdSubtitle}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default MainCard
