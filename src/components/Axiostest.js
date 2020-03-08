import React, {Component} from "react";
import axios from "axios";

class Axiostest extends Component{
    constructor(){
        super()
        this.state={
            persons:[]
        }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            const persons = res.data;
            console.log(res)
            this.setState(
                {persons:persons}
            );})}
    render(){
        return(
            <div>
                <ul align="left">
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Axiostest