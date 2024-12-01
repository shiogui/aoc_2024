const fs = require('node:fs');

function readFile(fileName) {
    try {
        const fileContent = fs.readFileSync('./payloads/' + fileName, 'utf-8');
        return fileContent.split('\n');
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}

module.exports = {
    readFile
}