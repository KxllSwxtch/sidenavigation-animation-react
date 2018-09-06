import React from 'react';

import NavigationCard from './NavigationCard/NavigationCard';
import './Navigation.scss';

const Navigation = props => {
  return (
    <div className="Navigation">
      <NavigationCard />
    </div>
  );
};

export default Navigation;