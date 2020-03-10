import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             roomsList:props.roomsList
        }
    }
    
    room = (i) =>{
        this.props.clickroom(i)
    }
    
   
    render() {
        return (
            <div id='rooms'>
                {this.state.roomsList.map((el,i)=>{
                    return <Link to ='/room/' id={i}  onClick={() => this.room(i)}>
                        <div style={{backgroundColor:`${el.color}`,hight:'50px',width:'50px'}}>
                            <h5>{el.type}</h5>
                            <h5>{el.name}</h5>
                  
                        </div>
                        
                    </Link>
                      
                })}
                <Link to = '/addRoom/' >+</Link>
            </div>
        )
    }
}
