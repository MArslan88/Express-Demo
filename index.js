const express = require('express');
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()

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


// query parameters
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));