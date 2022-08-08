import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class BigCatIndex extends Component {
  render() {
    return (
      <>
        <div className='page-body'>
          <div className='index-cards'>
              {this.props.cats && this.props.cats.map(cat => {
                return(
                  <Card style={{ width: '47rem' }}
                    key={cat.id} className="card">
                    <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{cat.name}</CardTitle>
                      <NavLink to={`/bigcatshow/${cat.id}`}>
                        <Button>More info here</Button>
                      </NavLink>
                    </CardBody>
                  </Card>          
                )
              })}
          </div>
        </div>
      </>
    )
  }
}

export default BigCatIndex