const express = require('express')
const app = express()
const port = 3690
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
//connects to mongoose database to put data in
    await  mongoose.connect('mongodb+srv://Joe:1234@datarep.lzwvjya.mongodb.net/?retryWrites=true&w=majority');


}
//things being added to database
const gameSchema = new mongoose.Schema({
    title: String,
    cover: String,
    developer: String
});

const gameModel = mongoose.model('Game Database', gameSchema);

    app.post('/api/games',(req,res)=>{
           console.log(req.body);

    gameModel.create({
        title: req.body.title,
        cover: req.body.cover,
        developer: req.body.developer
    })

    res.send('data recieved');
    })

    app.get('/api/games',(req, res)=>{
        gameModel.find((error,data)=>{
            res.json(data);
        })
    })

    app.get('/api/game/:id',(req,res)=>{
        console.log(req.params.id);
        gameModel.findById(req.params.id,(error,data)=>{
            res.json(data);
        })
    })
    //sends to update page
    app.put('/api/game/:id',(req,res)=>{
        console.log("Update: "+req.params.id);

        gameModel.findByIdAndUpdate(req.params.id, req.body,{new:true},
            (error,data)=>{
                res.send(data);
            })
    })
        //deleting the game from the view page
    app.delete('/api/game/:id',(req,res)=>{
        console.log('Deleting '+req.params.id);
        gameModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
            res.send(data);
        })
        
    })
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    