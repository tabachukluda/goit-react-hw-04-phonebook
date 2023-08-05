import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
        setName(value);
    } else if (name === 'number') {
        setNumber(value);
    }
    };

    const onFormSubmit = (e) => {
    e.preventDefault();

    if (!isValidName(name) || !isValidNumber(number)) {
        alert("Please provide a valid name and phone number.");
        return;
    }

    handleSubmit({ name, number });
    setName('');
    setNumber('');
    };

    const isValidName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return nameRegex.test(name);
    };

    const isValidNumber = (number) => {
    const numberRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return numberRegex.test(number);
    };

    return (
    <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.formLabel}>Name </label>
        <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
        />
        <label className={css.formLabel}>Number </label>
        <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
        />
        <button className={css.formBtn} type="submit">
        Add contact
        </button>
    </form>
    );
};

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
