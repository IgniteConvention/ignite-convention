import React, { useState } from "react";

function EventRegistration({ students, onSubmit }) {
  const eventsList = ["Soccer Kick", "Track and Field", "Bible Bowl", "Choir"];
  const [selectedEvents, setSelectedEvents] = useState({});

  const toggleEvent = (student, event) => {
    setSelectedEvents((prev) => ({
      ...prev,
      [student]: prev[student]?.includes(event) ? prev[student].filter((e) => e !== event) : [...(prev[student] || []), event],
    }));
  };

  return (
    <div>
      <h2>Event Registration</h2>
      {students.map((s, i) => (
        <div key={i}>
          <h3>{s.name}</h3>
          {eventsList.map((event) => (
            <label key={event}>
              <input type="checkbox" onChange={() => toggleEvent(s.name, event)} /> {event}
            </label>
          ))}
        </div>
      ))}
      <button onClick={() => onSubmit(selectedEvents)}>Submit</button>
    </div>
  );
}

export default EventRegistration;
