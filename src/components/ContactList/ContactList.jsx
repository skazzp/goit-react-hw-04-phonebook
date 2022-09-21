import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ filteredContacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <span className={css.name}>{contact.name} : </span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};
