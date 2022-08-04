import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { Redirect } from 'react-router-dom'


class BigCatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }
  
  handleChange = (e) => {
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    this.setState({newCat: newCat})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.newCat, this.props.cat.id)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}
          >
            Edit Cat Profile
          </Button>
          {this.state.submitted && <Redirect to={`/bigcatshow/${this.props.cat.id}`} />}
        </Form>
      </>
    )
  }
}

export default BigCatEdit