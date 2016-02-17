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
    return (
      <div className='cell_display'>
      {
        this.props.outputs.map((output, index) => <Output output={output} key={index}/>)
      }
      </div>
    );
  }
}
