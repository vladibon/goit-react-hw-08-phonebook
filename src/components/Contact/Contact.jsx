import PropTypes from 'prop-types';
import s from './Contact.module.scss';

function Contact({ name, number }) {
  return (
    <article className={s.contact}>
      <h3 className={s.name}>{name}</h3>
      <p className={s.number}>{number}</p>
    </article>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { Contact };
