import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header title="Groceries from Alfred" />
      <Content />
      <Footer />
    </>
  );
}
