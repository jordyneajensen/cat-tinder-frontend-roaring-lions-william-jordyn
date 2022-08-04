import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


class BigCatShow extends Component {
  render() {
    let { cat } = this.props

    return (
      <>
        <Card>
          <CardImg top width="100%" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <CardSubtitle>{cat.age}</CardSubtitle>
            <CardText>{cat.enjoys}</CardText>
          </CardBody>
        </Card>
      </>
    )
  }
}

export default BigCatShow