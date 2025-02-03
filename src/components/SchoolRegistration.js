import React, { useState } from "react";

function SchoolRegistration({ onNext }) {
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    pastor: "",
    sponsors: [],
  });
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorGender, setSponsorGender] = useState("Male");
  const [judgeWilling, setJudgeWilling] = useState(false);
  const [judgeEvents, setJudgeEvents] = useState("");

  const handleChange = (e) => {
    setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
  };

  const addSponsor = () => {
    if (sponsorName) {
      setSchoolData({
        ...schoolData,
        sponsors: [
          ...schoolData.sponsors,
          { name: sponsorName, gender: sponsorGender, judgeWilling, judgeEvents },
        ],
      });
      setSponsorName("");
      setJudgeWilling(false);
      setJudgeEvents("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(schoolData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>School Registration</h2>
      <input name="schoolName" placeholder="School Name" onChange={handleChange} required />
      <input name="contactPerson" placeholder="Contact Person" onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="address" placeholder="Physical Address" onChange={handleChange} required />
      <input name="pastor" placeholder="Pastor's Name" onChange={handleChange} required />
      
      <h3>Sponsors / Chaperones</h3>
      <input placeholder="Sponsor Name" value={sponsorName} onChange={(e) => setSponsorName(e.target.value)} required />
      <select onChange={(e) => setSponsorGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label>
        Willing to Judge?
        <input type="checkbox" checked={judgeWilling} onChange={(e) => setJudgeWilling(e.target.checked)} />
      </label>
      {judgeWilling && <input placeholder="Events to Judge" value={judgeEvents} onChange={(e) => setJudgeEvents(e.target.value)} />}
      <button type="button" onClick={addSponsor}>Add Sponsor</button>
      <ul>
        {schoolData.sponsors.map((s, i) => (
          <li key={i}>{s.name} ({s.gender}) {s.judgeWilling && `- Judging: ${s.judgeEvents}`}</li>
        ))}
      </ul>
      <button type="submit">Next</button>
    </form>
  );
}

export default SchoolRegistration;
