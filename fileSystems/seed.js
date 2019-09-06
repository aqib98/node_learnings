const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'seededFiles');

fs.mkdirSync(dirname);

const ms1Day = 24*60*60*1000;

for (let index = 0; index < 10; index++) {
    const filePath = path.join(dirname,`file_${index}`);
    fs.writeFile(filePath,index,(err)=>{
        if(err) throw err;

        const time = (Date.now()-index*ms1Day)/1000;
        fs.utimes(filePath,time,time,(err)=>{
            if(err) throw err;
        })
    })    
}