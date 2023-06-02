import { Component } from 'react';

class ContactList extends Component {
  //   console.log(contacts);
  state = {};

  componentDidUpdate(prevProps, prevState) {
    // console.log({ 'prevProps.contacts': prevProps.contacts });
    // console.log({ 'this.props.contacts': this.props.contacts });
    localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
  }
  render() {
    const { filter, contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts[0] === undefined ? (
          <span
            style={{
              fontStyle: 'Italic',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Your phonebook is empty
          </span>
        ) : filter === '' ? (
          contacts.map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          contacts
            .filter(contact => {
              return contact.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map(contact => (
              <li key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <button
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))
        )}
      </ul>
    );
  }
}

export default ContactList;
