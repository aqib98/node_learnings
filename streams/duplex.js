const {Duplex} = require('stream');

const inputStream = new Duplex({
    write(chunk,encoding,callback){
        console.log(chunk.toString());
        callback();
    },
    read(size){
        if(this.currentCharcode > 90){
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharcode++));
    }
})

inputStream.currentCharcode = 65;
process.stdin.pipe(inputStream).pipe(process.stdout)