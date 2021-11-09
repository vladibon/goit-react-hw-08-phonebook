import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.field}>
          <span className={s.label}>Name</span>
          <input
            className={s.input}
            type='text'
            name='name'
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>

        <label className={s.field}>
          <span className={s.label}>Number</span>
          <input
            className={s.input}
            type='tel'
            name='number'
            value={number}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={s.button} type='submit'>
          Add contact
        </button>
      </form>
    );
  }
}

export { ContactForm };
