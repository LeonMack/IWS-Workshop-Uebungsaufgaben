const express = require('express'); 
const xssFilters = require('xss-filters'); 
const util = require('util');  
const app = express();  
app.get('/', (req, res) => {   const unsafeFirstname = req.query.firstname;   
const safeFirstname = xssFilters.inHTMLData(unsafeFirstname);    
res.send(util.format('<h1>Tom%s</h1>', safeFirstname)); });  

app.listen(3000);
