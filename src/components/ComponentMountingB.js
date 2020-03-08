import React, { Component } from 'react';
class ComponentMountingB extends Component{
    constructor(props){
        super(props)
        this.state={
            message:""
        }
        console.log("Constructor B called")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps B called")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount B called")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate B called")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("B getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("B componentDidUpdate")
    }
    render(){
        console.log("render B called")
        return(
            <div>
                ComponentMountingB
            </div>
        )
    }

}
export default ComponentMountingB;