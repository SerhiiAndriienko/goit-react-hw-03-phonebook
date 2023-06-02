import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    if (e.target.type === 'text') {
      this.setState({
        name: e.target.value,
      });
    } else {
      this.setState({
        number: e.target.value,
      });
    }
  };
  addContact = e => {
    e.preventDefault();
    let test;

    const newContactName = this.state.name;
    {
      if (this.props.contacts !== null && this.props.contacts !== []) {
        test = this.props.contacts.some(contact => {
          return contact.name === newContactName;
        });
      }
      if (test) {
        alert(`${newContactName} is already in contacts.`);
        return;
      }
    }
    let newArray;
    if (this.props.contacts !== null && this.props.contacts !== []) {
      newArray = this.props.contacts;
    } else {
      newArray = [];
    }
    newArray.push({
      name: `${this.state.name}`,
      number: `${this.state.number}`,
      id: nanoid(),
    });
    this.setState({
      name: '',
      number: '',
    });
    this.props.handleValueChange(newArray);
  };
  render() {
    return (
      <div>
        <form style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="[0-9+\- ]+"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <br></br>
        </form>
        <button type="confirm" onClick={this.addContact}>
          Add contact
        </button>
      </div>
    );
  }
}

export default ContactForm;
