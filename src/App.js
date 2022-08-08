import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BigCatIndex from './pages/BigCatIndex'
import BigCatShow from './pages/BigCatShow'
import BigCatNew from './pages/BigCatNew'
import BigCatEdit from './pages/BigCatEdit'
import About from './pages/About'
import NotFound from './pages/NotFound'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
   this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/big_cats") 
    .then(response => response.json()) 
    .then(payload => this.setState({cats: payload }))
    .catch(errors => console.log("Cat read errors: ", errors))
  }

  createNewCat = (theNewCatObject) => {
    fetch("http://localhost:3000/big_cats", {
      body: JSON.stringify(theNewCatObject),
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST" 
  })
  .then(response => response.json())
  .then(() => this.readCat())
  .catch(errors => console.log("Cat new errors: ", errors))
  }

  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/big_cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat update errors: ", errors))
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/big_cats/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Delete cat errors", errors)) 
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bigcatindex" render={() => <BigCatIndex cats={this.state.cats} />} /> 
          <Route path="/bigcatshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
              return <BigCatShow cat={cat} deleteCat={this.deleteCat} />
          }} />
          <Route path="/bigcatedit/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return <BigCatEdit cat={cat} updateCat={this.updateCat} />
          }} />       
          <Route path="/bigcatnew"
                 render={() => {
                  return <BigCatNew createNewCat={this.createNewCat}/>
                 }} />
          <Route path="/about" component={About} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App