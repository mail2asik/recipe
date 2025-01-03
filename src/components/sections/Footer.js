import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <span className="text-muted">
          Copyright © {new Date().getFullYear()} RECIPES
        </span>
      </div>
    </footer>
  );
};

export default Footer;
