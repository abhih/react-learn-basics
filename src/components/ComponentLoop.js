import React, {Component} from "react"

class C1 extends Component{
    render(){
    return(
        <div>
            <p>This is component one.</p>
        </div>
    )
}}

class C2 extends C1{
    render(){
        return(
            <div>
                <p>This is component two.</p>
            </div>
        )
    }
}

export {C1,C2}