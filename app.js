console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let userInfo = os.userInfo();
console.log(userInfo);
let filepath = 'greetings.txt';
let content = `Hello ${userInfo.username}! You are ${notes.getAge('03/04/1996')}!`;

fs.writeFile(filepath, content, (err) => {
    if(err){
        console.log(`Unable to write file ${filepath}`);
    }
});