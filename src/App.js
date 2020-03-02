
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import './App.css';
import Home from './components/routes/Home'
import AddRoom from './components/routes/AddRoom'
import Room from './components/routes/Room'

import React, { Component } from 'react'

export default class App extends Component {

  state={
    roomsList : [{}],
    index : 0
  }

  addroom =(t,n,c,i)=>{

    this.setState({roomsList:[{type:t,name:n,color:c,item:[...i]}, ...this.state.roomsList]})
  }

  clickroom = (i) =>{
    this.setState({index:i})
  }
 
//   additem = (e,i) =>{
//   //  this.setState({roomsList[i]:[{name:e}] })
//  // this.state.roomsList[i].setState({name:e})
//  this.setState(roomsList:[{this.state.roomsList[i].name:e}])
//  let arr = [...this.state.roomsList]
//  arr[i]:{name:e};
 
//   }
  render() {
    return (
      <div>
        <Router>
        <h1>smart house</h1>
        <Switch>
                <Route exact path ='/' component={()=>{return <Home roomsList ={this.state.roomsList} clickroom={this.clickroom} />}}></Route>
                <Route exact path ='/addRoom' component={()=>{return <AddRoom add={this.addroom} />}}></Route>
                <Route exact path ='/room' component={()=>{return <Room room={this.state.roomsList} i={this.state.index} additem={this.additem} />}}></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

