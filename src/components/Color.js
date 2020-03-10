import React, { Component } from 'react'

export default class color extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hrx:props.hrx,
             names:props.names
        }
    }
    
    render() {
        return (
            <div style={{backgroundColor:`${this.state.hrx}`,hight:'50px',width:'50px'}}>
               <h3>{this.state.names}</h3>
            </div>
        )
    }
}
