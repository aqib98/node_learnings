const fs = require('fs');
const file = fs.createWriteStream('./big-file');

for (let index = 0; index < 1e6; index++) {
    file.write('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');
}

file.end();