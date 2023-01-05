import React from "react";
import axios from "axios";

export class Creating extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeGameTitle = this.onChangeGameTitle.bind(this);
        this.onChangeGameCover = this.onChangeGameCover.bind(this);
        this.onChangeGameDeveloper = this.onChangeGameDeveloper.bind(this);
        //makes the field empty so be filled in 
        this.state = {
            title:'',
            cover:'',
            developer:''
        }


    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.developer}`);

        const game ={
            title:this.state.title,
            cover:this.state.cover,
            developer:this.state.developer
        }

        axios.post('http://localhost:3690/api/games',game)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            developer:''

        })
    }   //allows me to type the title           
        onChangeGameTitle(e){
            this.setState({
                title:e.target.value
            })
        }


 //allows me to type the cover
        onChangeGameCover(e){
            this.setState({
                cover:e.target.value
            })

        }
         //allows me to type the developer
        onChangeGameDeveloper(e){
            this.setState({
                developer:e.target.value
            })
        }
        // gets the data and creates an output of the game filled in for title cover and developer 
        render(){
            return(
                <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Game Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeGameTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Game Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeGameCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add developer: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.developer}
                            onChange={this.onChangeGameDeveloper}
                        />
                    </div>

                    <input type="submit" value="Add Game" />
                </form>
            </div>  
















            );









        }








    








}