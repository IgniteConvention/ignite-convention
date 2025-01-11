import React from "react";

function EventList({ events }) {
  return (
    <div>
      <h2>Available Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
