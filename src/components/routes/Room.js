import React, { Component } from 'react'
// 
import Item from '../Item'
export default class Room extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             room:props.room[props.i],
             index:props.i,
             //item:[{name:'a'},{name:'b'}]
             item:[]
        }
    }
    
    additem = (e) =>{
        console.log(e.target.value)
        this.setState({item:[{name:e.target.value} , ...this.state.item]})
        console.log(this.state.item)
     // this.props.additem(e.target.value,this.state.index)
      //this.setState({room:{item:[e, ...this.state.room.item]}})
    }

    render() {
        return (
            <div>
                <h3>room name:  {this.state.room.name}</h3>   
                <h3>room type:  {this.state.room.type}</h3>   
                {this.state.item.map((el)=>{
                // {this.state.room.item.map((el,i)=>{
                    console.log(el.name);
                    
                    return <Item itemname={el.name} />
                })}
                <button>add prodact</button>




                <div id='items'>
                <select id="type" onChange={this.additem} >
                      <option value='aircondition'>airconditoining</option>
                      <option value="boyler">boyler</option>
                      <option value="steryo">steryo</option>
                      <option value="lamp">lamp</option>
                </select>
                </div>
            </div>
        )
    }
}

