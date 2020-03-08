import React, {Component} from "react"
import ChildComponent from './ChildComponent.js'
class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName: 'Parent Component'
        }
        this.greetHandler=this.greetHandler.bind(this)
    }
    greetHandler=(childName)=>{
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                <p>Hello Parent Component</p>
                <ChildComponent greetHandler={this.greetHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent