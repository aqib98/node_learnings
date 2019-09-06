const http = require('http');
const pid = process.pid;
let userCount ;

http.createServer((req,res)=>{
    for (let index = 0; index < 1e7; index++) {
        res.write(`Handles by process ${pid}\n`);
        res.end(`Users: ${userCount}`);
    }
}).listen(8000,()=>{
    console.log(`Started at pid ${pid}`);
});

process.on('message',msg=>{
    userCount = msg.userCount;
});