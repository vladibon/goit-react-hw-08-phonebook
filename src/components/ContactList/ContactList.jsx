import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };

  findMatches = name =>
    name.toLowerCase().includes(this.props.filter.toLowerCase().trim());

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul className={s.list}>
        {contacts.map(
          ({ id, name, number }) =>
            this.findMatches(name) && (
              <li className={s.item} key={id}>
                <p className={s.name}>{name}</p>
                <p className={s.number}>{number}</p>

                <button
                  className={s.button}
                  type='button'
                  onClick={() => deleteContact(id)}
                >
                  X
                </button>
              </li>
            ),
        )}
      </ul>
    );
  }
}

export { ContactList };
