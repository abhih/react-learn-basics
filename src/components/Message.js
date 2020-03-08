import React, { Component} from "react"
class Message extends Component{
    constructor(){
        super()
        this.state={
            message: "Welcome visitor Abhishek",
            data: "This is another data"
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() =>this.changeMessage()}>Subscribe</button>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default Message