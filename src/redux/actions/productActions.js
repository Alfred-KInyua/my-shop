import ActionTypes from '../constants/action-types';

const setProduct = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});
export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
export default setProduct;
