const express = require('express');
const app = express();
const path=require('path');
const PORT = process.env.PORT || 3500;


app.get('/', (req,res)=>{
    // res.sendFile('./views/index.html', {root: __dirname });
    
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

// add a listener for the log event
// myEmitter.on('log', (msg)=>logEvents(msg));
// myEmitter.emit('log', 'Log event emitted!');