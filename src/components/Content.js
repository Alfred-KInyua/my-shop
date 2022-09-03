import PropTypes from 'prop-types';
import ItemList from './ItemList';

export default function Content({ items, handleDelete, handleIdChange }) {
  return (
    <>
      <main>
        {items.length ? (
          <ItemList
            items={items}
            handleDelete={handleDelete}
            handleIdChange={handleIdChange}
          />
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
