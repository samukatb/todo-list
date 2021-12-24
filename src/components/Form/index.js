import React from 'react'
import PropTypes from 'prop-types';
import { FaPlus, FaEdit } from 'react-icons/fa';

import './style.css';


export default function Form({ handleChange, handleSubmit, newTask, index }) {
  return (
    <form className="form" onSubmit={handleSubmit} action="#">
      <input
        type="text"
        onChange={handleChange}
        value={newTask}
      />
      <button>{index === -1 ? <FaPlus /> : <FaEdit />}</button>
    </form>
  );
}

Form.defaultProps = {
  index: -1,
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
  index: PropTypes.number,
}