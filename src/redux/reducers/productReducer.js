import ActionTypes from '../constants/action-types';

const initialState = {
  products: [{ id: 1, title: 'Alfred', category: 'programmer' }],
};
const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.set:
      return state;
    default:
      return state;
  }
};
export default productReducer;
