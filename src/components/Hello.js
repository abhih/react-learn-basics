import React from "react"
const Hello = () =>{
    // return (
    //     <div>
    //         <h1>From Hello js</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'name', className: "dummyClass"},
        React.createElement('h1',null,'Hellow from hello js')
    )
}
export default Hello