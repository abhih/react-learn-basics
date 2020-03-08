import React from "react"

function clickHandler(){
    console.log("button was clicked")
}

const ClickFunction = () =>{
    console.log("clicked it")
    return(
        <div>
            <button onClick = {clickHandler}>Click me .com</button>
        </div>
    ) 
}
// function clickFunction(){
//     return(
//         <div>
//             Hello function click
//         </div>
//     )
// }

export default ClickFunction;
export {clickHandler}