import React, { Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0

        }
    }
    changeCounter(){
        this.setState(
            {count :   this.state.count+1},
            ()=>{console.log(this.state.count)}
            
        )
        
    }
    render(){
    return(
        <div>
            <button onClick={() => this.changeCounter()}>{this.state.count}</button>
            
        </div>
    )
}
}
export default Counter