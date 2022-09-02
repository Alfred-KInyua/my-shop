import React from 'react';

export default function Footer() {
  const data = new Date();
  return (
    <>
      <footer>
        Copyright &copy;
        {data.getFullYear()}
      </footer>
    </>
  );
}
