import { useState } from 'react';

import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //ввод в интпут
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  //-----------другой вариант записи------------
  // const handleNameChange = event => {
  //   setName(event.currentTarget.value);
  // };
  // const handleNumberChange = event => {
  //   setNumber(event.currentTarget.value);
  // };

  //добавить контакт через кнопку
  const handleSabmit = event => {
    event.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');

    //this.resetInput();
  };

  //   //очистить поля ввода
  //   resetInput = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  return (
    <form className={s.form} onSubmit={handleSabmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button type="sabmit" className={s.btnAdd}>
        Add contact
      </button>
    </form>
  );
}

export { ContactForm };
