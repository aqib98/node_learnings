const {spawn} = require('child_process');

const child = spawn('find',['.','-type','f']);

child.stdout.on('data',data=>{
    console.log(`\nChild stdout:\n${data}`)
});

child.stderr.on('data',data=>{
    console.log(`\nChild stderr:\n${data}`)
});

child.on('exit',(code,signal)=>{
    console.log(`child process exited with code ${code} and signal ${signal}`)
});