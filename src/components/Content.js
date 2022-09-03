import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Content() {
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
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    localStorage.setItem('shopping list', JSON.stringify(listitems));
  };
  const handleDelete = (id) => {
    const listitems = items.filter((myItems) => myItems.id !== id);

    setItems(listitems);
    localStorage.setItem('Filltred items', JSON.stringify(listitems));
  };

  return (
    <>
      <main>
        <ul>
          {items.map((myItems) => (
            <li className="item" key={myItems.id}>
              <input
                type="checkbox"
                checked={myItems.checked}
                id="myinput"
                onChange={() => handleIdChange(myItems.id)}
              />
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
      </main>
    </>
  );
}
