
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/routes/Home'
import AddRoom from './components/routes/AddRoom'
import Room from './components/routes/Room'
import './App.css';
import React, { Component } from 'react'

///bugs- set time for input fill -done
///////- mught not recgnize third color id-solved
///////- must type , after each color , including first/last 
///////- colors show mulitipal times some time
///////- shows only first 10 colors,might add promisise
///////- could add with no name or type

export default class App extends Component {

  state={
    roomsList : [{}],
    index : 0,
    
  }
 
  addroom =(t,n,c,i)=>{
    this.setState({roomsList:[{type:t,name:n,color:c,item:[...i]}, ...this.state.roomsList]})
  }

  clickroom = (i) =>{
    this.setState({index:i})
  }
 
  additem = (e,i) =>{
 this.setState({roomsList:[...this.state.roomsList , this.state.roomsList[i].item=[{name:e,status:'red'},...this.state.roomsList[i].item]]})
  }
 changeStat = (ix,i) =>{

  if(this.state.roomsList[ix].item[i].status==='green'){
      this.setState({roomsList:[...this.state.roomsList , this.state.roomsList[ix].item[i].status='red']})
  }
  else{ this.setState({roomsList:[...this.state.roomsList , this.state.roomsList[ix].item[i].status='green']})
}
 }
  render() {
    return (
     
      <div id = 'container'>
        <Router>
        <h1>smart house</h1>
        <Switch>
                <Route exact path ='/' component={()=>{return <Home roomsList ={this.state.roomsList} clickroom={this.clickroom}  />}}></Route>
                <Route exact path ='/addRoom' component={()=>{return <AddRoom add={this.addroom}   />}}></Route>
                <Route exact path ='/room' component={()=>{return <Room room={this.state.roomsList} i={this.state.index} additem={this.additem} changeStat={this.changeStat} />}}></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

