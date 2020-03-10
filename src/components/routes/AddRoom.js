import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Color from '../Color'
export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type:'',
             name:'',
             color:'',
             item: [],
             i:'',
             colors:props.colors
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
        if(this.state.i){clearTimeout(this.state.i)}
        this.setState({i:setTimeout(()=>this.props.color(this.state.color),1000)})
        
    }
    // addColor = e =>{
    //     console.log('ccc');
        
    //   this.props.color(document.getElementById('clr').value)
    //     this.setState({color:e.target.value})
    // }
    add = () =>{
        this.props.add(this.state.type,this.state.name,this.state.color,this.state.item)
    }
    render() {
        return (
            <div>
                <div>
                     {this.state.colors.map(cl=>{
                   return <h1>{cl.hrx}{cl.namessss}</h1>  
                })}
                </div>
                <select id="type" onChange={this.chooseType} >
                      <option value="bathroom">bathroom</option>
                      <option value="sleep room">sleep</option>
                      <option value="kitchen">kitchen</option>
                      <option value="living room">living</option>
                </select>
                <input onChange={this.addName} placeholder="name"/>
               <input  onChange={this.addColor} placeholder="color---type , after each color , including first/last" value={this.state.color}/>
               {/* <input id="clr" placeholder="color---type , after each color , including first/last"/>
               <button onClick={this.addColor}>look for color</button> */}
                <Link to ='/' onClick={this.add}>add</Link>
               
            </div>
        )
    }
}

