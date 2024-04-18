import React, { useState } from 'react';
import styles from '../Tabela/Tabela.module.css';

const InputCell = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value || ''}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default InputCell;