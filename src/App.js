
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import './App.css';
import Home from './components/routes/Home'
import AddRoom from './components/routes/AddRoom'
import Room from './components/routes/Room'
import axios from "axios"
import React, { Component } from 'react'

///bugs- set time for input fill
///////- mught not recgnize third color id
///////- must type , after each color , including first/last
///////- colors show mulitipal times some time

export default class App extends Component {

  state={
    roomsList : [{}],
    index : 0,
    colorss:[]
  }
  
  color =(x) =>{
    //works only on first//x=x.replace(" ",",")
    let arr=this.colorStrToArr(x)
    let colors=[]
    axios.get( `http://www.colr.org/json/tags/${x}`)
    .then(response => {
    this.colorInculded(response,arr,colors)
  }).catch(function (error){
    console.log(error);
})

this.setState({colorss:colors})
console.log(this.state.colorss);
console.log(colors.data);
  }

   /// func shows colors of all colors
  colorInculded=(response,arr,colors)=>{
    response.data.colors.forEach(color => {
        let names=[]
        for(let tag of color.tags){
         names.push(tag.name)
         }
         let f=true
        for(let c of arr){
          if(!names.includes(c)){
            f=false;
            break
          }
        }
        if(f){
          color.namessss={...names};
          colors.push(color);}
        
      });
  }
  ///puts string in array/returns array
  colorStrToArr = (x) =>{
    let m=-1;
    let arr=[]

    for (var i = 0; i < x.length; i++) {
      if(x.charAt(i)===","){
        arr.push(x.slice(m+1,i))
        m=i
      }
    }
    return arr
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
     
      <div>
         <button onClick={()=> this.color('red','grape')}>color</button>
        <Router>
          
        <h1>smart house</h1>
        <Switch>
                <Route exact path ='/' component={()=>{return <Home roomsList ={this.state.roomsList} clickroom={this.clickroom}  />}}></Route>
                <Route exact path ='/addRoom' component={()=>{return <AddRoom add={this.addroom} color={this.color} colors={this.state.colorss}  />}}></Route>
                <Route exact path ='/room' component={()=>{return <Room room={this.state.roomsList} i={this.state.index} additem={this.additem} changeStat={this.changeStat} />}}></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

