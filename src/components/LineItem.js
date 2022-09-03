import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const LineItem = ({ myItems, handleDelete, handleIdChange }) => (
  <li className="item" key={myItems.id}>
    <input
      type="checkbox"
      checked={myItems.checked}
      id="myinput"
      onChange={() => handleIdChange(myItems.id)}
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label
      onDoubleClick={() => handleIdChange(myItems.id)}
      style={myItems.checked ? { textDecoration: 'line-through' } : null}
    >
      {myItems.item}
    </label>
    <FaTrashAlt
      role="button"
      tabIndex="0"
      onClick={() => handleDelete(myItems.id)}
    />
  </li>
);
LineItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleIdChange: PropTypes.func.isRequired,
  myItems: PropTypes.shape.isRequired,
};
export default LineItem;
