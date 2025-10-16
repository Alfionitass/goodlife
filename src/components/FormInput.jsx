export const FormInput = ({
  type,
  children,
  label,
  value,
  handleChange,
  className,
  error
}) => {
  return (
    <div className={`form-container ${className}`}>
      <input
        type={type}
        name={children}
        id={children}
        placeholder=" "
        aria-label={children}
        className="form-input"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={`form ${children}`} className="form-label">
        {label}
      </label>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
};

export const TextArea = ({ children, label, value, handleChange, className, error }) => {
  return (
    <div className={`form-container ${className}`}>
      <textarea
        name={children}
        id="form-body"
        rows="4"
        placeholder=" "
        className="form-input"
        value={value}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="form-body" className="form-label">
        {label}
      </label>
      {error && <p className="form-error mt-48">{error}</p>}
    </div>
  );
};
