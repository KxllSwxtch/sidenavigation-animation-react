import React from 'react';

import './SideDrawer.scss';

const SideDrawer = props => {
  return (
    <div 
      className="SideDrawer"
      onClick={props.toggle}
      style={props.styles}
    >
      <ul>
        <li>Home</li>
        <li>Downloads</li>
        <li>Contacts</li>
        <li>API</li>
      </ul>
    </div>
  );
};

export default SideDrawer;