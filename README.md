# Express-Demo

 Tutorial Link
 https://www.youtube.com/watch?v=pKd0Rpw7O48&t=2118s

1- Install npm

2- make a folder 
3- open terminal within the folder
4- then write this command 

	npm init --yes
5- then install the express with npm, for this write this command

	npm i express

=========================================================================

	Now start project with VS Code

1- make a file 'index.js' or 'app.js' then write this code

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world');
});


// this will show message on console screen of the terminal


==========================================================================

	get respnse on localhost body

const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send('Hello world');
});


app.listen(3000, ()=> console.log('Listening on port 3000...'));

==========================================================================

	get response as an API

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.listen(3000, ()=> console.log('Listening on port 3000...'));


// with this you always need to save the file first and then run on console again with this command
// node index.js

===========================================================================
but we also have another better method for this
install this package

1- npm i -g nodemon

after installation of the package now use this command 

2- nodemon index.js
now this nodemon will watching all the files
===========================================================================
port 3000 is not always available so to handle this dynamically

// instead of this code
app.listen(3000, ()=> console.log('Listening on port 3000...'));

// use this one 
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`)); // replace here single coute with respectic ` (key above the tab key)

// the will remain the same 3000 because we haven't set the invironment yet...
// for this open terminal and write this command

1- set PORT=5000  // or export PORT=5000  on mac





