import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message:'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thnk uuu'

            })
        
    }
    render(){
        //return <h1>this.state.message</h1>
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>  this.changeMessage()}>Subscribe</button>

            </div>
        )
        
    }
}
export default Message;