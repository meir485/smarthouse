import React, { Component } from 'react'
//,hight:'50px',width:'100px'
export default class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             i: props.i,
             name : props.itemname,
             status: props.status,
            
        }
        
    }
    
    changeStat = i =>{
      this.props.changeStat(i)
    }
    
    render() {
        return (
            <div onClick={() => this.changeStat(this.state.i)}  style={{backgroundColor:`${this.state.status}` }}>
                <h6>{this.state.name}</h6>
            </div>
        )
    }
}
