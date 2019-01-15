console.log('Starting Node app...');

const fs = require('fs');
const os = require('os');

let userInfo = os.userInfo();
let filepath = 'greetings.txt';
let content = `Hello ${userInfo.username}!`;

fs.writeFile(filepath, content, (err) => {
    if(err){
        console.log(`Unable to write file ${filepath}`);
    }
});