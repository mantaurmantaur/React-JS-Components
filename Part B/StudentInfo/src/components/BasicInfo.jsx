function BasicInfo({ data, onChange }) {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="basic-info info">
      <h1>🧑‍🎓 Basic Information</h1>
      <label>
        Student Number:
        <input
          name="studentNumber"
          value={data.studentNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        First name:
        <input
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Middle name:
        <input
          name="middleName"
          value={data.middleName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input name="lastName" value={data.lastName} onChange={handleChange} />
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          name="birthdate"
          value={data.birthdate}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default BasicInfo;
