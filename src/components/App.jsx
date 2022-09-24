import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const saveContacts = contact => {
    setContacts(prevContacts => {
      return [...prevContacts, contact];
    });
  };
  const getFilter = event => {
    const { value } = event.target;
    setFilter(() => {
      return value;
    });
  };
  const filterContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return !filter
      ? contacts
      : contacts.filter(elem =>
          elem.name.toLowerCase().includes(filterNormalized)
        );
  };
  const removeContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm saveContacts={saveContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter setFilter={getFilter} filterState={filter} />
      <ContactList
        filterContacts={filterContacts}
        removeContact={removeContact}
      />
    </div>
  );
};

export default App;
