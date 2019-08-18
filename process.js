process.on('exit',(code)=>{
    console.log('exited',code)
});

process.on('uncaughtException',(err)=>{
    console.log(err);
    process.exit();
});

process.stdin.resume();


console.dog()