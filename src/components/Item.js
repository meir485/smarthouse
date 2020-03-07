import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             i: props.i,
             name : props.itemname,
             status: props.status,
            // color:"red"
        }
        
    }
    
    changeStat = i =>{
      this.props.changeStat(i)
    }
    // defiyColor = () =>{
    //     //this.setState(this.state.color = this.state.status==="false" ? 'red' : 'green')
    //     if(this.state.status){
    //     this.setState({color:"green"}) 
    //     }
    // }
    
//    
    
    render() {
    //    {this.defiyColor()}
        return (
            <div onClick={() => this.changeStat(this.state.i)}  style={{backgroundColor:`${this.state.status}`,hight:'50px',width:'50px' }}>
                <h6>{this.state.name}</h6>
    
            </div>
        )
    }
}
