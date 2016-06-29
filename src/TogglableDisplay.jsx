import React from 'react';
import Immutable from 'immutable';

import { transforms, displayOrder } from 'transformime-react';

import Display from './Display';

export default function TogglableDisplay(props) {
  if (!props.isHidden) {
    return (
      <Display {...props}/>
    );
  } else {
    return null;
  }
}

TogglableDisplay.propTypes = {
  displayOrder: React.PropTypes.instanceOf(Immutable.List),
  outputs: React.PropTypes.instanceOf(Immutable.List),
  transforms: React.PropTypes.instanceOf(Immutable.Map),
  isHidden: React.PropTypes.bool,
};

TogglableDisplay.defaultProps = {
  transforms,
  displayOrder,
};
