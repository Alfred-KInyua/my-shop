import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItems from './components/AddItems';
import Search from './components/Search';

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shopping list')) || []
  );
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shopping list', JSON.stringify(items));
  }, [items]);

  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const lis = [...items, myNewItem];
    setItems(lis);
  };

  const handleIdChange = (id) => {
    const lis = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(lis);
  };
  const handleDelete = (id) => {
    const lis = items.filter((myItems) => myItems.id !== id);
    setItems(lis);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!setItems) return;
    AddItem(newItem);
    setNewItem('');
  };
  return (
    <>
      <Header title="Groceries from Alfred" />

      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        handleDelete={handleDelete}
        handleIdChange={handleIdChange}
        items={items.filter((obj) =>
          obj.item.toLowerCase().includes(search.toLowerCase())
        )}
      />
      <Footer length={items.length} />
    </>
  );
}
