import React, { Fragment } from 'react';
import { Transition } from 'react-spring';

import SideDrawer from './SideDrawer/SideDrawer';
import CardContent from './CardContent/CardContent';
import Toggle from '../../../Utils/Toggle';
import './NavigationCard.scss';

/**
 * 
 * @NavigationCard Component - Target Component
 * 1. Wrapped around Toggle Component to get { on, toggle } as props.
 * 2. Then wrapped around Transition Component to get all animations properties.
 * 3. Checks if the { on } is true, if so then it renders SideDrawer Component, otherwise CardContent
 * 
 */

const NavigationCard = props => {
  return (
    <div className="NavigationCard">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <Transition
              from={{ width: "0px" }}

              enter={{ width: "400px" }}

              leave={{ width: "0px" }}

              config={{
                tension: 150,
                friction: 20,
                overshootClamping: true
              }}
            >
              {on ? styles => <SideDrawer styles={styles} toggle={toggle} /> : null}
            </Transition>

            <CardContent 
              on={on}
              toggle={toggle} 
            />

          </Fragment>
        )}
      </Toggle>
    </div>
  );
};

export default NavigationCard;