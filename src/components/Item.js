import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : props.itemname
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {console.log(this.state.name) }
            </div>
        )
    }
}
