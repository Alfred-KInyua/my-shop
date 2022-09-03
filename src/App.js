import React, { useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'sugar',
    },
    {
      id: 2,
      checked: false,
      item: 'spice',
    },
    {
      id: 3,
      checked: false,
      item: 'and everything nice',
    },
  ]);
  const handleIdChange = (id) => {
    const lis = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(lis);
    localStorage.setItem('shopping list', JSON.stringify(lis));
  };
  const handleDelete = (id) => {
    const lis = items.filter((myItems) => myItems.id !== id);

    setItems(lis);
    localStorage.setItem('Filltred items', JSON.stringify(lis));
  };
  return (
    <>
      <Header title="Groceries from Alfred" />
      <Content
        handleDelete={handleDelete}
        handleIdChange={handleIdChange}
        items={items}
      />
      <Footer length={items.length} />
    </>
  );
}
