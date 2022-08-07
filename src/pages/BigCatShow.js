import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom'


class BigCatShow extends Component {
  render() {
    let { cat } = this.props

    return (
      <>
        <Card>
          <CardImg top width="100%" src={this.props.cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <CardSubtitle>{cat.age}</CardSubtitle>
            <CardText>{cat.enjoys}</CardText>
            <NavLink to={`/bigcatedit/${this.props.cat.id}`}>
              <Button>Edit Cat Profile</Button>
            </NavLink>
            <NavLink to="/bigcatindex">
              <Button onClick={() => this.props.deleteCat(cat.id)}>Delete Cat</Button>
            </NavLink>
          </CardBody>
        </Card>
        
      </>
    )
  }
}

export default BigCatShow