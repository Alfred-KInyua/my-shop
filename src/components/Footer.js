import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ length }) => (
  <>
    <footer>
      <p>
        {length}
        List
        {length === 1 || length === 0 ? ' item ' : ' items '}
      </p>
    </footer>
  </>
);
export default Footer;

Footer.propTypes = {
  length: PropTypes.number.isRequired,
};
