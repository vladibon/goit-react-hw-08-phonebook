import PropTypes from 'prop-types';
import s from './Button.module.scss';

function Button({ children, type = 'button' }) {
  return (
    <button className={s.button} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
