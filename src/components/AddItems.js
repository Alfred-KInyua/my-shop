import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label> Add Item</label>
      <input
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

AddItems.propTypes = {
  newItem: PropTypes.shape.isRequired,
  setNewItem: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default AddItems;
