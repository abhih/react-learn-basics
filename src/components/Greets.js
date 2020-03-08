import React from "react"
//import ReactDOM from "react-dom"

// function Greet(){
//     return <h1>Hellow Abhishek</h1>
// }
const Greet = (props) =>{
console.log(props)

return (
<div>
    <h1>Hellow {props.name} aka {props.aliasname}</h1>
    {props.children}
</div>

)

}
export default Greet;