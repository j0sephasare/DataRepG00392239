import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function Editing(){
    let{id} = useParams();
    const[title,setTitle] = useState('');
    const[cover,setCover] = useState('');
    const[developer,setDeveloper] = useState('');
        
        useEffect(()=>{
            axios.get('http://localhost:3690/api/game/'+id)
            .then((response)=>{
                setTitle(response.data.title);
                setCover(response.data.cover);
                setDeveloper(response.data.developer);



            })
            .catch()




        },[]);

        const handleSubmit = (e)=>{
            e.preventDefault();
                const editGame={
                    title:title,
                    cover:cover,
                    developer:developer
                }

                axios.put('http://localhost:3690/api/game/'+id,editGame)
                .then()
                .catch();
    
        }   
        // form page that lets me edit the games 
        return(
            <div>
                <h3>Edit Games</h3>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                            <label>Edit Game Title: </label>
                            <input type="text"
                                className="form-control"
                                value={title}
                                onChange={(e)=>{setTitle(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Edit Game Cover: </label>
                            <input type="text"
                                className="form-control"
                                value={cover}
                                onChange={(e)=>{setCover(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Edit Developer: </label>
                            <input type="text"
                                className="form-control"
                                value={developer}
                                onChange={(e)=>{setDeveloper(e.target.value)}}
                            />
                        </div>
                    <input type="submit" value="Edit Game"></input>
                </form>
            </div>
        );
       
















}