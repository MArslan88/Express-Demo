const Joi = require('joi');
const express = require('express');
const app = express();

// for post requst
app.use(express.json());

const courses = [
    {id: 1, name: "couse-1"},
    {id: 2, name: "couse-2"},
    {id: 3, name: "couse-3"},
];

const dataError = {
    message: "The course with the given ID was not found",
    responseCode: "404",
};
const badReqError = {
    message: "Please enter the name of the course.",
    responseCode: "400",
};

app.get('/', (req, res) =>{
    res.send('Hello world');
});

// app.get('/api/courses', (req, res) => {
//     res.send([1,2,3,4,5]);
// });

// // with one parameter
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });

// // with more parameters
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });


// // query parameters
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });


app.get('/api/courses', (req, res) => {
    res.send(courses); // array on root
    // res.send({courses}); // object on root

});

// with one parameter
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send(dataError);
    res.send(course);
});


// // POST request to add new course
// app.post('/api/courses', (req, res) => {
//     // status code 400 bad request
//     if(!req.body.name || req.body.name.length < 3){
//         res.status(400).send(badReqError);
//         return;
//     }

//     const course = {
//         id: courses.length +1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });


// POST request to add new course
app.post('/api/courses', (req, res) => {
    const schema = {
        name : Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    console.log(result);

    // status code 400 bad request
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send(badReqError);
        return;
    }

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));