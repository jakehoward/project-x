const express = require('express');
const jsonfile = require('jsonfile');
const FILE = 'data.json';

const app = express();

app.use(express.json());

//This code works!!
// app.get('/', (req, res) => {
//   res.send("Have a good weekend!");
// });

//This is the alternative (doesn't work yet)
app.get('/', (req,res) => {
	var output; 
	jsonfile.readFile(FILE, (err,products) => {
		output = JSON.parse(FILE);
	})
	res.send(output);
})

app.listen(3000, () => console.log('Listening on port 3000'));


