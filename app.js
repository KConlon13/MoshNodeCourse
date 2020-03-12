
// function sayHello(name){
//     console.log("Hello "+ name);
// }
// sayHello('Kyle')

// var message = 'sup';
// console.log(message);
// this will return undefined 

// const log = require('./logger');

// log('message')

// const os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log('Total Memory: '+ totalMemory)

// console.log(`Free memory: ${freeMemory}`)


// const fs = require('fs');

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files)
// })

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('logging', (arg)=>{
//     console.log('Listener called', arg)
// });

// emitter.emit('logging', { data: 'message' });


// const Logger = require('./logger')
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// })

// logger.log('message')

const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write("Hell0 World")
        res.end();
    } 

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]))
        res.end();
    }
});

server.listen(3000)

console.log('Listening on port 3000...')

