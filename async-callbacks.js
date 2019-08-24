const fs = require('fs');

const readFileAsArray = function (file, cb = () => { }) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
                return cb(err);
            }

            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines)
        })
    })
};

readFileAsArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number);
        const addNumbers = numbers.filter(number => number % 2 === 1);
        console.log(`odd number count: ${addNumbers.length}`);
    })
    .catch(console.error)

readFileAsArray('./numbers', (err, lines) => {
    if (err) throw err;
    const numbers = lines.map(Number);
    const addNumbers = numbers.filter(number => number % 2 === 1);
    console.log(`odd number count: ${addNumbers.length}`);
})