import { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

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
      <ul>
        {contacts.map(
          ({ id, name, number }) =>
            this.findMatches(name) && (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>

                <button type='button' onClick={() => deleteContact(id)}>
                  Delete
                </button>
              </li>
            ),
        )}
      </ul>
    );
  }
}

export { ContactList };
