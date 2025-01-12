import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import EventList from "./components/EventList";
import "./styles.css";

function App() {
  const events = ["Soccer Kick", "Track and Field", "Bible Bowl", "Choir"];

  return (
    <div>
      <header>
        <h1>Ignite Student Convention</h1>
        <p>Welcome to the registration app!</p>
      </header>
      <main>
        <RegistrationForm />
        <EventList events={events} />
      </main>
    </div>
  );
}

export default App;
