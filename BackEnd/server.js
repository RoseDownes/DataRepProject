const express = require('express')
const app = express()
const port = 4000

const bodyParser = require('body-parser')

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

// Serve the static files from the React app
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('/static', express.static(path.join(__dirname, 'build//static')));

//connecting async
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.7zwsywt.mongodb.net/?retryWrites=true&w=majority')
}

const petSchema = new mongoose.Schema({
    animal: String,
    breed: String,
    name: String
});
//the model is how you are going to interact
const petModel = mongoose.model('pets', petSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// CORS error will happen because its blocking a connection this will help allow the connection 
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// res.jason is sending json response
app.get('/api/pets', (req, res) => {
    // //array that will hold my hard coded json file
    petModel.find((error, data) => {
        res.json(data);
    })
})
app.get('/api/pets/:id', (req, res) => {
    console.log(req.params.id);

    petModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

// Handle the edit button server side and edit the correct book
app.put("/api/pet/:id", (req, res) => {
    console.log("Update: " + req.params.id);
    petModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.send(data);
        }
    );
});
//post is a more secure way to send secure data over the web as it won't be displayed on the url
app.post('/api/pets', (req, res) => {
    console.log(req.body);
    //data is repersented in the body of the request
    petModel.create({
        animal: req.body.animal,
        breed: req.body.breed,
        name: req.body.name,
    })
    res.send('Data recieved ');
})

//Handle the delete button
app.delete('/api/pet/:id', (req, res) => {
    console.log("Delete " + req.params.id);

    petModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        if (error) {
            console.log(error)
        }
        console.log(data);
        res.send(data);
    })
})


// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../build/index.html'));
// });

//the server is going to listen for a request for url on the port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})