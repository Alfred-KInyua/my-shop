import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Content({ items, handleDelete, handleIdChange }) {
  return (
    <>
      <main>
        {items.length ? (
          <ul>
            {items.map((myItems) => (
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
                  style={
                    myItems.checked ? { textDecoration: 'line-through' } : null
                  }
                >
                  {myItems.item}
                </label>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(myItems.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginBottom: '10px', color: 'red' }}>
            Your List is empty
          </p>
        )}
      </main>
    </>
  );
}

// Content.defaultProps = {
//   handleDelete: 'Handle delete required',
//   handleIdChange: 'Handle change required',
// };
Content.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleIdChange: PropTypes.func.isRequired,
  items: PropTypes.shape.isRequired,
};
