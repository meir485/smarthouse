import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type:'',
             name:'',
             color:'',
             item: []
        }
    }
    chooseType = e =>{
        this.setState({type:e.target.value})
    }

    addName = e =>{
        if(e.target.value.length>5){
            alert('only 5')
            this.setState({name:'',type:'',color:''})
            return;
        }
        this.setState({name:e.target.value})
    }
    addColor = e =>{
        this.setState({color:e.target.value})
    }
    
    add = () =>{
        this.props.add(this.state.type,this.state.name,this.state.color,this.state.item)
    }
    render() {
        return (
            <div>
                <select id="type" onChange={this.chooseType} >
                      <option value="bathroom">bathroom</option>
                      <option value="sleep room">sleep</option>
                      <option value="kitchen">kitchen</option>
                      <option value="living room">living</option>
                </select>
                <input onChange={this.addName} placeholder="name"/>
                <input onChange={this.addColor} placeholder="color"/>
                <Link to ='/' onClick={this.add}>add</Link>
               
            </div>
        )
    }
}

