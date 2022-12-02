const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT =8080;
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res) {
    res.send('Hello form server port 8080');
})

app.post('/enroll' , function(req,res){
    console.log(req.body);
    res.status(200).send({"message" : "Data received"});
})

app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
})
