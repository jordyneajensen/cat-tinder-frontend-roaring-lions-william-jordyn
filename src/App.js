import React, { Component } from 'react'
import './App.css'
import cats from './mockBigCats'
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
import NotFound from './pages/NotFound'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: cats
    }
  }
  createNewCat = (theNewCatObject) => {
    console.log(theNewCatObject)
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/bigcatindex" render={(props) => <BigCatIndex cats={this.state.cats} />} />
          <Route exact path="/" component={Home} />       
          <Route path="/bigcatshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
              return <BigCatShow cat={cat} />
          }} />
          <Route path="/bigcatnew" component={BigCatNew} />
          <Route path="/bigcatedit" component={BigCatEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App