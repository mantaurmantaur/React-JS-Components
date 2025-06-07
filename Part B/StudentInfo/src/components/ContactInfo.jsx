function ContactInfo({ data, onChange }) {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-info info">
      <h1>📍 Contact Information</h1>
      <label>
        Email Address:
        <input name="email" value={data.email} onChange={handleChange} />
      </label>
      <label>
        Phone Number:
        <input name="phone" value={data.phone} onChange={handleChange} />
      </label>
      <label>
        Home Address:
        <input name="address" value={data.address} onChange={handleChange} />
      </label>
    </div>
  );
}

export default ContactInfo;
