import React, { useState } from "react";
import SchoolRegistration from "./components/SchoolRegistration";
import StudentRegistration from "./components/StudentRegistration";
import EventRegistration from "./components/EventRegistration";
import EventList from "./components/EventList";
import VerificationPage from "./components/VerificationPage";

function App() {
  const [step, setStep] = useState(1);
  const [schoolData, setSchoolData] = useState(null);
  const [students, setStudents] = useState([]);
  const [eventSelections, setEventSelections] = useState({});

  const nextStep = (data) => {
    if (step === 1) setSchoolData(data);
    if (step === 2) setStudents(data);
    if (step === 3) setEventSelections(data);
    setStep(step + 1);
  };

  const goBack = (stepNumber) => {
    setStep(stepNumber);
  };

  return (
    <div>
      <header>
        <h1>Ignite Student Convention</h1>
        <p>Welcome to the registration app!</p>
      </header>
      <main>
        {step === 1 && <SchoolRegistration onNext={nextStep} />}
        {step === 2 && <StudentRegistration onNext={nextStep} />}
        {step === 3 && <EventRegistration students={students} onSubmit={nextStep} />}
        {step === 4 && <VerificationPage schoolData={schoolData} students={students} eventSelections={eventSelections} onEdit={goBack} onFinalize={() => setStep(5)} />}
        {step === 5 && <h2>Registration Complete! Thank you for registering.</h2>}
      </main>
    </div>
  );
}

export default App;
