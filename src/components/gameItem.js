import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import axios from "axios";

export class GameItem extends React.Component{
    constructor(){
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }
    //deletes the game added to the view page
    DeleteGame(e){
        e.preventDefault();
        axios.delete('http://localhost:3690/api/game/'+this.props.game._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.game.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.game.cover}></img>
                            <footer >
                                {this.props.game.developer}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/editing/' + this.props.game._id} className="btn btn-primary">Edit</Link>
                    <Button variant="Delete" onClick={this.DeleteGame}>Delete</Button>
                </Card>
            </div>
        );
    }








}
