import React from 'react';

import Immutable from 'immutable';

import { transforms, displayOrder } from 'transformime-react';

import Output from './Output';

export default class Display extends React.Component {
  static displayName = 'Display';

  static propTypes = {
    displayOrder: React.PropTypes.instanceOf(Immutable.List),
    outputs: React.PropTypes.instanceOf(Immutable.List),
    transforms: React.PropTypes.instanceOf(Immutable.Map),
  };

  static defaultProps = {
    transforms,
    displayOrder,
  };

  render() {
    // Handle the clear_output spec by only display that which comes after
    // the last clear_output
    let outputs = this.props.outputs;
    const fromIndex = outputs.findLastIndex(
      output => output.get('output_type') === 'clear_output'
    );
    if(fromIndex !== -1) {
      // Note: when clear_output is the last element, this is an empty array
      outputs = outputs.slice(fromIndex + 1);
    }

    return (
      <div className='cell_display'>
      {
        outputs.map((output, index) =>
          <Output output={output} key={index}
                  displayOrder={this.props.displayOrder}
                  transforms={this.props.transforms}
          />
        )
      }
      </div>
    );
  }
}
