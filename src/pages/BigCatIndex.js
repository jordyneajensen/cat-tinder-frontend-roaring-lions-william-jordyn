import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class BigCatIndex extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.cats && this.props.cats.map(cat => {
              return(
                <Card style={{ width: '47rem' }}
                  key={cat.id} className="card">
                  <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{cat.name}</CardTitle>
                    <CardSubtitle>{cat.age}</CardSubtitle>
                    <NavLink to={`/bigcatshow/${cat.id}`}>
                      <Button>More info here</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              )
          })}
        </div>
      </>
    )
  }
}

export default BigCatIndex