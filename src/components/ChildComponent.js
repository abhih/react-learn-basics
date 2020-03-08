import React, {Component} from "react"

class ChildComponent extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <p>Hello from Child Component</p>
                <button onClick={() =>this.props.greetHandler('baccha')}>Greethandle</button>
            </div>
        )
    }
}

export default ChildComponent