import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input
        className="input-component"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
