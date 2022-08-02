import React, { Component } from 'react'
import mockBigCats from './mockBigCats'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BigCatEdit from './pages/BigCatEdit'
import BigCatIndex from './pages/BigCatIndex'
import BigCatNew from './pages/BigCatNew'
import BigCatShow from './pages/BigCatShow'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: mockBigCats
    }
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bigcatindex" component={BigCatIndex} />
          <Route path="/bigcatshow" component={BigCatShow} />
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