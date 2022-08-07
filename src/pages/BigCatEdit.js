import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { Redirect } from 'react-router-dom'


class BigCatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedCat: {
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys,
        funfact: this.props.cat.funfact,
        image: this.props.cat.image
      },
      submitted: false
    }
  }
  
  handleChange = (e) => {
    let { updatedCat } = this.state
    updatedCat[e.target.name] = e.target.value
    this.setState({updatedCat: updatedCat})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.updatedCat, this.props.cat.id)
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
              value={ this.state.updatedCat.name }
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={ this.state.updatedCat.age }
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={ this.state.updatedCat.enjoys }
            />
          </FormGroup>
          <FormGroup>
            <Label for="funfact">Fun Fact</Label>
            <Input
              type="text"
              name="funfact"
              onChange={this.handleChange}
              value={ this.state.updatedCat.funfact }
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={ this.state.updatedCat.image }
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