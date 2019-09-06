const {Readable} = require('stream');

const inStream = new Readable({
    read(size){
        setTimeout(() => {
            if(this.currentCharCode>90){
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
       
    }
});

inStream.currentCharCode = 65;
// inStream.push('aqib');
// inStream.push(null);

 inStream.pipe(process.stdout);

 process.on('exit',() => {
     console.log(
         `\n\ncurrentCharCode is ${inStream.currentCharCode}`
     )
 });

 process.stdout.on('error',process.exit);