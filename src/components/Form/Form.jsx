const Form = ({ label, type, value, name, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor="input field">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        className="primary-form"
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Form;
