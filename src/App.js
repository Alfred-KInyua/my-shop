import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItems from './components/AddItems';
import Search from './components/Search';

export default function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error(' did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const lis = [...items, myNewItem];
    setItems(lis);
  };

  const handleIdChange = (id) => {
    const lis = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));

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

      <main>
        {isLoading && <p>Loading Items....</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            handleDelete={handleDelete}
            handleIdChange={handleIdChange}
            items={items.filter((obj) => obj.item.toLowerCase().includes(search.toLowerCase()))}
          />
        )}
      </main>
      <Footer length={items.length} />
    </>
  );
}
