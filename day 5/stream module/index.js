// const fs = require('fs')
// const http = require('http')
// const server = http.createServer();

// server.on('request', (req, res) => {
//     var fs = require('fs')
//     fs.readFile('read.txt', (err, data) => {
//         if (err) return console.error(err)
//         res.end(data.toString())
//     })
// })

// server.listen(8000, '127.0.0.1')


// 2nd way 

// reading from a stream

// Create a readable stream
// handle stream events ---> data, end and error

const fs = require('fs')
const http = require('http')
const server = http.createServer();
server.on('request', (req, res) => {
   const rstream = fs.createReadStream('read.txt')
   rstream.on('data', (chunkdata)=>{
    res.write(chunkdata);
   });
   rstream.on('end', ()=>{
    res.end();
   })
   rstream.on('error', (err) =>{
    console.log('err')
    res.end('file not found')
   })
    })
server.listen(8000, '127.0.0.1')
