import React, { Component } from 'react';
import ComponentMountingB from "./ComponentMountingB.js"
class ComponetMountingA extends Component{
    constructor(props){
        super(props)
        this.state={
            message:""
        }
        console.log("Constructor A called")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount called")
        //this is called at the end of call in an heirarchical manner
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate A called")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("A getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("A componentDidUpdate")
    }
    changeEvent=()=>{
        this.setState(
            {message:"Changed"}
        )
    }
    render(){
        console.log("render called")
        return(
            <div>
                ComponetMountingA
                
                <button onClick={this.changeEvent}>Click</button>
                <ComponentMountingB/>
            </div>
        )
    }

}


export default ComponetMountingA;