const {Transform} = require('stream');

const upperCaseTr = new Transform({
    transform(chunk,enciding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);