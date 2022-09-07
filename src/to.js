const newItem = {
  id: 1,
  item: 'sugar',
  checked: false,
};

localStorage.setItem('shopping list', JSON.stringify(newItem));
