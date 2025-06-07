function EducationBackground({ data, onChange }) {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="educ-info info">
      <h1>📚 Academic Information</h1>

      <fieldset className="radio-group">
        <legend>Current Year Level:</legend>
        {["1st", "2nd", "3rd", "4th"].map((year) => (
          <label key={year}>
            <input
              type="radio"
              name="yearLevel"
              value={year}
              checked={data.yearLevel === year}
              onChange={handleChange}
            />
            {year}
          </label>
        ))}
      </fieldset>

      <label htmlFor="course">Course/Program:</label>
      <input
        type="text"
        id="course"
        name="program"
        value={data.program}
        onChange={handleChange}
      />

      <fieldset className="radio-group">
        <legend>Student Status:</legend>
        {["Old", "New", "Transferee"].map((status) => (
          <label key={status}>
            <input
              type="radio"
              name="status"
              value={status}
              checked={data.status === status}
              onChange={handleChange}
            />
            {status}
          </label>
        ))}
      </fieldset>
    </div>
  );
}

export default EducationBackground;
