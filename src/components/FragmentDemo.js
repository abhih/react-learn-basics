import React from 'react';


function FragmentDemo() {
    return(
        // <React.Fragment>
        //     hello
        //     <label value="Username"></label>
        //     <input type="text"></input>
        // </React.Fragment>
        <>
            hello
            <label value="Username"></label>
            <input type="text"></input>
        </>

    )
}

export default FragmentDemo;