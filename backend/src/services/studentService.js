const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/students.json");

// Load students from JSON file
const loadStudents = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

// Search students
const searchStudents = (query) => {
    const students = loadStudents();

    return students
        .filter(student => student.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
};

module.exports = { searchStudents };
