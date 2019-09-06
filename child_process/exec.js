const { exec } = require('child_process');

exec('find . -type f | wc -l',(err, stdout, stderr) => {
    if(err){
        console.error(`exec err:${err}`);
        return;
    }
    console.log(`Number of files ${stdout}`)
})