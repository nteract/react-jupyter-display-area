import React from 'react';
import Immutable from 'immutable';

import { transforms, displayOrder } from 'transformime-react';

import Display from './Display';

export default function ToggleableDisplay(props) {
  const style = { display: props.isHidden ? 'none' : 'block' };
  return (
    <Display {...props} style={style}/>
  );
}

ToggleableDisplay.propTypes = {
  displayOrder: React.PropTypes.instanceOf(Immutable.List),
  outputs: React.PropTypes.instanceOf(Immutable.List),
  transforms: React.PropTypes.instanceOf(Immutable.Map),
  isHidden: React.PropTypes.bool,
};

ToggleableDisplay.defaultProps = {
  transforms,
  displayOrder,
};
