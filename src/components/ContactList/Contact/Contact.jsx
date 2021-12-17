import PropTypes from 'prop-types';
import s from './Contact.module.scss';

function Contact({ name, phone }) {
  return (
    <article className={s.contact}>
      <h3 className={s.name}>{name}</h3>
      <p className={s.phone}>{phone}</p>
    </article>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
