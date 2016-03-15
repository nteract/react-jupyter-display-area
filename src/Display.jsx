import React from 'react';

import Immutable from 'immutable';

import { transforms, displayOrder } from 'transformime-react';

import Output from './Output';

export default function Display(props) {
  return (
    <div className="cell_display">
      {
        props.outputs.map((output, index) =>
          <Output output={output} key={index}
            displayOrder={props.displayOrder}
            transforms={props.transforms}
          />
        )
      }
    </div>
  );
}

Display.propTypes = {
  displayOrder: React.PropTypes.instanceOf(Immutable.List),
  outputs: React.PropTypes.instanceOf(Immutable.List),
  transforms: React.PropTypes.instanceOf(Immutable.Map),
};

Display.defaultProps = {
  transforms,
  displayOrder,
};
