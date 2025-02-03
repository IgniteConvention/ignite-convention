import React, { useState } from "react";

function StudentRegistration({ onNext }) {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ name: "", gender: "Male", dob: "" });

  const addStudent = () => {
    if (student.name && student.dob) {
      setStudents([...students, student]);
      setStudent({ name: "", gender: "Male", dob: "" });
    }
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(students);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <input name="name" placeholder="Student Name" value={student.name} onChange={handleChange} required />
      <select name="gender" onChange={handleChange}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input name="dob" type="date" value={student.dob} onChange={handleChange} required />
      <button type="button" onClick={addStudent}>Add Student</button>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} ({s.gender}, DOB: {s.dob})</li>
        ))}
      </ul>
      <button type="submit">Next</button>
    </form>
  );
}

export default StudentRegistration;
