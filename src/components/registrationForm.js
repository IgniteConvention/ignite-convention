import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    studentName: "",
    grade: "",
    events: [],
  });

  const eventsList = ["Soccer Kick", "Track and Field", "Bible Bowl", "Choir"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventSelection = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      events: checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Submitted:", formData);
    // Add Firebase integration to save formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div>
        <label>School Name:</label>
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Student Name:</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="text"
          name="grade"
          value={formData.grade}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Events:</label>
        {eventsList.map((event) => (
          <div key={event}>
            <input
              type="checkbox"
              value={event}
              onChange={handleEventSelection}
            />
            <label>{event}</label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
