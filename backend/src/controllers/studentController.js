const studentService = require("../services/studentService");

const searchStudents = async (req, res, next) => {
    try {
        const { query } = req.query;

        if (!query || query.length < 3) {
            return res.status(400).json({ error: "Enter at least 3 characters to search." });
        }

        const students = await studentService.searchStudents(query);
        res.json(students);
    } catch (error) {
        next(error);
    }
};

module.exports = { searchStudents };
