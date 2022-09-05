import React, {Component, useState} from "react";
import '../styles/App.css';
const arr=["vicky","john","mick"]
class App extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            name:["vicky","john","mick"],
            temp:''
        }
    }
    handleChange=e=>{
        this.name=e.target.value
        this.setState((prevState)=>{
            //console.log(this.state)
            return {
                temp:this.name
            }
        })
        
    }
    handleSubmit=e=>{
        this.setState(prevState=>{
            //e.preventDefault();
            //const name=prevState.name.concat(prevState.temp)
            return{
                name:([...prevState.name,this.state.temp]),
                temp:""
            }
        })
        document.getElementById('input').value=''
    }
    render() {
        //console.log(this.state)
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input onChange={this.handleChange} id={"input"} type='text' />
               <button onClick={this.handleSubmit} >Add</button>
               <ol>
                {
                    this.state.name.map((ele,i)=>{
                        return (
                            <li key={`relativelist${i+1}`}>{ele}</li>
                        )
                    })
                }
               </ol>
            </div>
        )
    }
}


export default App;
