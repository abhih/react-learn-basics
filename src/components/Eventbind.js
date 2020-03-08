import React, { Component } from "react"
class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message : "Hello"
        }
    }

    clickHandler(){
        this.setState(
            {message: 'GoodBye!'}
        )
        console.log(this)
    }
    clickHandler=()=>{
        this.setState(
            {message: 'GoodBye!'}
        )
    }

    render(){
        return(
            <div>
                {/* <p> Event bind says <button onClick={this.clickHandler.bind(this)}> {this.state.message} </button></p> */}
                {/* <p> Event bind says <button onClick={()=>this.clickHandler()}> {this.state.message} </button></p> */}
                <p> Event bind says <button onClick={this.clickHandler}> {this.state.message} </button></p>
            </div>
        )
    }
}
export default EventBind