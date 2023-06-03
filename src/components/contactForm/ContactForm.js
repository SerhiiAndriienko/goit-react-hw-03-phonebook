import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

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
      <div className={css.container}>
        <form onSubmit={this.addContact}>
          <>
            {' '}
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
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="[0-9+\- ]+"
                title="Phone number must be digits and can ycontain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
              />
            </label>
          </>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
