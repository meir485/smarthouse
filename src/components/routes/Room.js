import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from '../Item'
export default class Room extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             room:props.room[props.i],
             index:props.i,
            
        }
    }
   
    select = () =>{
        document.getElementById('rm').style.display = "none"; 
        document.getElementById('its').style.display = "block"; 
    }
    
    additem = (e) =>{
      if(e.target.value=='steryo'){
          if(this.state.room.item.find(el=>el.name===e.target.value)){
              alert('no no no to loud');
              return;
          }
      }
      if(e.target.value=='boyler'){
          if(this.state.room.type!='bathroom'){
              alert('only in bath')
              return;
          }
      }
      if(this.state.room.item.length===5){
        alert('to much shit')  
        return;}
      this.props.additem(e.target.value,this.state.index)
      document.getElementById('its').style.display = "none"; 
      document.getElementById('rm').style.display = "block"; 
    }
    changeStat = i =>{
      this.props.changeStat(this.state.index,i)
    }
    render() {
        return (
        <div>
            <div id='rm'>
                <Row>
                    <Col><h3>room name:  {this.state.room.name}</h3>   </Col>
                    <Col><h3>room type:  {this.state.room.type}</h3></Col>
                </Row>
                <Row>
                 {this.state.room.item.map((el,i)=>{
                    return <Col><Item  itemname={el.name} status={el.status} changeStat={this.changeStat} i={i} /></Col>
                })}
                </Row>
                <button onClick={this.select}>add prodact</button>
           </div>
             <select id='its' style={{display:'none'}} onChange={this.additem} >
                      <option value=''></option>
                      <option value='aircondition'>airconditoining</option>
                      <option value="boyler">boyler</option>
                      <option value="steryo">steryo</option>
                      <option value="lamp">lamp</option>
                </select>
                
            </div>
                
           
        )
    }
}

