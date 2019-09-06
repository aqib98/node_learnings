const http = require('http');
const pid = process.pid;

http.createServer((req,res)=>{
    for (let index = 0; index < 1e7; index++) {
    res.end(`Handled by process ${pid}`);        
    }
}).listen(8080,()=>{
    console.log(`Started process ${pid}`);
});

// setTimeout(() => {
//     process.exit(1);
// }, Math.random()*10000);