import PropTypes from 'prop-types';
import LineItem from './LineItem';

const ItemList = ({ items, handleIdChange, handleDelete }) => (
  <ul>
    {items.map((myItems) => (
      <LineItem
        key={myItems.id}
        myItems={myItems}
        handleDelete={handleDelete}
        handleIdChange={handleIdChange}
      />
    ))}
  </ul>
);
ItemList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleIdChange: PropTypes.func.isRequired,
  items: PropTypes.shape.isRequired,
};
export default ItemList;
