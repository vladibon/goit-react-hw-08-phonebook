import PropTypes from 'prop-types';
import s from './Input.module.scss';

function Input({
  type = 'text',
  name,
  labelName,
  value,
  pattern,
  title,
  required = false,
  onChange,
}) {
  const handleChange = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <label className={s.field}>
      <span className={s.label}>{labelName}</span>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={handleChange}
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export { Input };
