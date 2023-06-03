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

    const newContactName = this.state.name;
    {
      const test = this.props.contacts.some(contact => {
        return contact.name === newContactName;
      });

      if (test) {
        alert(`${newContactName} is already in contacts.`);
        return;
      }
    }
    const newArray = this.props.contacts;

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
        <form type="submit">
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
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

          <button type="submit" onClick={this.addContact}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
