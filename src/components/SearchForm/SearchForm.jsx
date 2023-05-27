import css from '../SearchForm/SearchForm.module.css';
import React, { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setInput(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (input.trim() === '') {
      alert('Search film can not be empty.');
      return;
    }
    onSubmit(input);
    clearForm();
  };

  const clearForm = () => {
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        name="query"
        type="text"
        placeholder="Search films"
        value={input}
        onChange={handleInputChange}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};
