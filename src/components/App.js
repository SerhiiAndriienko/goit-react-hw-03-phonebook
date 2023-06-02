import { Component } from 'react';
import './App.css';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getFromStorage = localStorage.getItem('contacts');
    const parseStorage = JSON.parse(getFromStorage);
    if (this.state.contacts) {
      this.setState({ contacts: parseStorage });
    }
  }

  filterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  handleValueChange = newValue => {
    this.setState({
      contacts: newValue,
    });
  };

  onDeleteContact = contactId => {
    const newArray = this.state.contacts.filter(
      contact => contact.id !== contactId
    );

    this.handleValueChange(newArray);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          handleValueChange={this.handleValueChange}
        ></ContactForm>

        <h2>Contacts</h2>
        <Filter filter={filter} filterChange={this.filterChange}></Filter>
        <ContactList
          filter={filter}
          contacts={contacts}
          onDeleteContact={this.onDeleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
