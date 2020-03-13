import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
            <div  >
                <Row id='rooms' className="justify-content-md-center" noGutters="true">
                   
               
                {this.state.roomsList.map((el,i)=>{
                    return  <Col><Link to ='/room/' id={i}  onClick={() => this.room(i)}>
                        <div style={{backgroundColor:`${el.color}`,hight:'100px',width:'100px'}}>
                            <h5>{el.type}</h5>
                            <h5>{el.name}</h5>
                  
                        </div>
                        
                    </Link></Col>
                      
                })} </Row>
                <Link to = '/addRoom/' >
                <Button variant="success" size="lg" block>
                 +
                </Button>
                </Link>
            </div>
        )
    }
}
