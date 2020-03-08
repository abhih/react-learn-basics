import React,{Component} from "react"

class Forms extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            comments:"",
            topic:""
        }
        this.onChangeEvent=this.onChangeEvent.bind(this)
        this.onCommentEvent=this.onCommentEvent.bind(this)
        this.onSelectEvent=this.onSelectEvent.bind(this)
    }
    onChangeEvent=(event)=>{
        this.setState(
            {username:event.target.value}
        )
        console.log(this.state.username)
    }
    onCommentEvent=(event)=>{
        this.setState(
            {comments:event.target.value}
        )
        console.log(this.state.comments)
    }
    onSelectEvent=(event)=>{
        this.setState(
            {topic:event.target.value}
        )
        console.log(this.state.topic)
    }
    onSubmitEvent=(event)=>{
        alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
        event.preventDefault()
    }

    render (){
        return(
            <form id="form" onSubmit={this.onSubmitEvent}>
                <div className="user">
                    <label>Username: {this.state.username}</label>
                    <input type='text' onChange={this.onChangeEvent} value={this.state.username}></input><br/>
                    <label>Password: </label>
                    <input type='password'></input><br/>
                    <button >Save</button>
                </div>
                <div className="comment">
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.onCommentEvent}></textarea>
                </div>
                <div className="select">
                    <p>{this.state.topic}</p>
                    <select onChange={this.onSelectEvent} value={this.state.topic}>
                        <option value="react">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <div>
                    <button value="submit">submit</button>
                </div>
            </form>
            
        )
    }
}

export default Forms