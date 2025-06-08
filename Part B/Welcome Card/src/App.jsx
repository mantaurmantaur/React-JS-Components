import Card from "./Card.jsx";
import logo from "./assets/icpep-logo.jpg";
import profilePicture from "./assets/profile.jpg";

function App() {
  const students = [
    { name: "Ann", status: "member" },
    { name: "Jane", status: "not" },
    { name: "Kaye", status: "member" },
  ];

  const message =
    "We're excited to have you with us and look forward to supporting your journey.";

  return (
    <>
      {students.map((students, index) =>
        students.status === "member" ? (
          <Card name={students.name} message={message} logo={logo} />
        ) : (
          <Card name={students.name} logo={profilePicture} />
        )
      )}
    </>
  );
}

export default App;
