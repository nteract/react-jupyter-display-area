import React from 'react';
import Immutable from 'immutable';

import { transforms, displayOrder } from 'transformime-react';

import Display from './Display';

export default function TogglableDisplay(props) {
  const style = { display: props.isHidden ? 'none' : 'block' };
  return (
    <Display {...props} style={style}/>
  );
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
