import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class BigCatNew extends Component {
    constructor(props) {
      super(props)
      this.state = {
        newCat: {
          name:"",
          age: "",
          enjoys: "",
          image:""
        },
        submitted: false
      }
    }

    handleChange = (e) => {
      const { newCat } = this.state
      newCat[e.target.name] = e.target.value
      this.setState({ newCat: newCat })
    }

    handleSubmit = () => {
      this.props.createNewCat(this.state.newCat)
      this.setState({ submitted: true})
    }
  render() {
    return (
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
            type="text" 
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
          <Label for="image">Image</Label>
          <Input 
            type="text" 
            name="image" 
            onChange={this.handleChange}

          />
        </FormGroup>
        <Button
          name="submit"
          onClick={this.handleSubmit}
          >Submit Cat
        </Button>
        { this.state.submitted && <Redirect to="/bigcatindex"/> }
      </Form>
    );
  }
}

export default BigCatNew;