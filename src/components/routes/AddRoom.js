import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import Color from '../Color'
export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             type:'',
             name:'',
             color:'',
             item: [],
             i:'',
             colorss:[]
        }
    }

    //////////////////////////////
     
  color =() =>{
    let x = this.state.color
    //works only on first//x=x.replace(" ",",")
    let arr=this.colorStrToArr(x)
   this.setState({ colorss:[]})
   document.getElementById('clr').innerHTML='';
    axios.get( `http://www.colr.org/json/tags/${x}`)
    .then(response => {
    this.colorInculded(response,arr)
  }).catch(function (error){
    console.log(error);
  })
    console.log(this.state.colorss);
  }

   /// func shows colors of all colors[0]
  colorInculded=(response,arr,colors)=>{
    response.data.colors.forEach(color => {
      if(this.state.colorss.length<10){
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
           this.setState({colorss:[{hex:color.hex, namess:names.toString()}, ...this.state.colorss]})
        }
      }
        
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
    ////////////////////////////
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
        this.setState({i:setTimeout(()=>this.color(),1000)})
        
    }
   chooseClr = e => {

       document.getElementById('clrIn').value=e.target.innerHTML
       this.setState({color:e.target.style.backgroundColor})

   }
    add = () =>{
        this.props.add(this.state.type,this.state.name,this.state.color,this.state.item)
    }
    render() {
        return (
            <div>
              <Row>
                <Col><Row>
                  <select id="type" onChange={this.chooseType} placeholder="room type" >
                      <option value="">roomtype</option>
                      <option value="bathroom">bathroom</option>
                      <option value="sleep room">sleep</option>
                      <option value="kitchen">kitchen</option>
                      <option value="living room">living</option>
                </select>
                </Row>
                <Row><input onChange={this.addName} placeholder="name"/></Row>
                <Row> <input id='clrIn' onChange={this.addColor} placeholder="color---type , after each color , including first/last" /></Row>
               
               <div id='clr'>
                      {this.state.colorss.map((cl,i)=>{
                        if(i===10){return;}
                         console.log(cl.hex)
                        return <Row><button onClick={this.chooseClr}><h1 style={{backgroundColor:`#${cl.hex}`,hight:'50px',width:'500px'}}>{cl.namess}</h1>  </button> </Row>    
                })}
                </div></Col>
                <Col><Link to ='/' onClick={this.add}>add</Link></Col>
              </Row>
                
                 
            </div>
        )
    }
}

