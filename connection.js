//library it makes a easy work with mongodb
const mongoose = require('mongoose');

const url ="mongodb+srv://ankita8188:ankita2004@cluster0.88vks.mongodb.net/mydb563?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
    
}).catch((err) => {
    console.log('error connecting to database', err)
    
});

module.exports = mongoose;