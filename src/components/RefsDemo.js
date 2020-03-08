import React,{ Component } from "react";
//Here the refs are being created to create a focus on the elements such as textbox
class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRefs=React.createRef()
    }

    componentDidMount(){
        this.inputRefs.current.focus()
        console.log(this.inputRefs)
    }
    onClickHandler=()=>{
        
        alert((this.inputRefs.current.value))
    }

    render(){
        return(
            <div>
                <label>INput: </label>
                <input type="text" ref={this.inputRefs}/>
                <button onClick={this.onClickHandler}>Submit</button>
            </div>
        )
    }
}
export default RefsDemo;