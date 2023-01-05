import React from "react";
import {Games} from "./games";
import axios from "axios";

export class View extends React.Component{
    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

        //gets data
        componentDidMount(){
                axios.get('http://localhost:3690/api/games')
                    .then((response)=>{
                    this.setState({games: response.data })
                     })
                    .catch((error)=>{
                        console.log(error);
                    })
        }

            state = {
                games: []
            }

            //shows all games added from the create stage
            render() {
                return (
                    <div>
                        <h3>View Games!</h3>
                        <Games games={this.state.games} Reload={this.componentDidMount}></Games>
                    </div>
                );
            }













}