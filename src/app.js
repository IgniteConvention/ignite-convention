import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import EventList from "./components/EventList";

function App() {
  const events = ["Soccer Kick", "Track and Field", "Bible Bowl", "Choir"];

  return (
    <div>
      <h1>Ignite Student Convention</h1>
      <RegistrationForm />
      <EventList events={events} />
    </div>
  );
}

export default App;
