console.log('Starting notes.js...');

module.exports.getAge = (birthDate) => {
    var birthDate = new Date(birthDate);
    var now = new Date();
    var timeDiff = Math.abs(now.getTime() - birthDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24) / 365); 
};