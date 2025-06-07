import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import ContactInfo from "./components/ContactInfo";
import EducationBackground from "./components/EducationBackground";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    studentNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: "",
    age: "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    yearLevel: "",
    program: "",
    status: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Basic Info:", basicInfo);
    console.log("Contact Info:", contactInfo);
    console.log("Education Info:", education);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <BasicInfo data={basicInfo} onChange={setBasicInfo} />
        <ContactInfo data={contactInfo} onChange={setContactInfo} />
        <EducationBackground data={education} onChange={setEducation} />

        <div className="submit">
          <input className="submit-input" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default App;
