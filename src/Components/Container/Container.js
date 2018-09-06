import React from 'react';

const Container = ({ children }) => (
  <div 
    style={{
      padding: "0px 10px",
      maxWidth: "1400px",
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);

export default Container;