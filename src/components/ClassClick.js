import React, {Component} from "react"
//import {clickHandler} from './ClickFunction.js'
class ClassClick extends Component{
    funcClickHandler(){
        console.log("Inner function is triggerred")
    }
    render(){
        return(
            <div>
                <p>Class click is here</p>
                <button onClick={this.funcClickHandler}> Class Click</button>
            </div>
        )
    }
}

export default ClassClick