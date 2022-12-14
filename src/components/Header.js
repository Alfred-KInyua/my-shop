import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <div>
    <header>{title}</header>
  </div>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
