import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResults = async (searchText) => {
    if (searchText.length < 3) {
      setResults([]);
      setError("Please enter at least 3 characters.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(`http://localhost:5000/api/students/search?query=${searchText}`);
      setResults(data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setResults([]);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError(""); // Clear error when user types
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchResults(query);
    }
  };

  const handleSelect = (student) => {
    setSelectedStudent(student);
    setQuery("");
    setResults([]);
    setError("");
  };

  return (
    <div className="container">
      <h2>🔎 Student Search</h2>
      <input
        type="text"
        placeholder="Search student..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {results.length > 0 && (
        <ul className="dropdown">
          {results.map((student) => (
            <li key={student.rollNumber} onClick={() => handleSelect(student)}>
              {student.name}
            </li>
          ))}
        </ul>
      )}
      {selectedStudent && (
        <div className="details">
          <h3>{selectedStudent.name}</h3>
          <p>📚 Class: {selectedStudent.class}</p>
          <p>🔢 Roll Number: {selectedStudent.rollNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
