const http = require('http');


//req: http.Clientrequest
const req = http.request(
    {hostname:'www.google.com'},
    (res) => {
        //res : http:IncomingMessage
        // console.log(res)
        res.on('data',(data)=>{
            // console.log(data.toString());
        })
    }
);

req.on('error',(e)=> console.log(e));
console.log(req.agent);

req.end();

