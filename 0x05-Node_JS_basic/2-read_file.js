#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        const header = lines.shift();
        if (lines.lenght == 0) {
            console.log('Number of students: 0');
            return;
        }
        console.log(`Number of students: ${lines.length}`);
        const studentsByField = {};
        lines.forEach(line=> {
            const [firstname, , , field] = line.split(',');
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }

            studentsByField[field].push(firstname);
        });

        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (err) {
        console.log('cannot load the database');
    }
}

module.exports = countStudents;

