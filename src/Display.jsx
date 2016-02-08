import React from 'react';

import Output from './Output';

export default class Display extends React.Component {
  static displayName = 'Display';

  static propTypes = {
    outputs: React.PropTypes.any,
  };

  render() {
    return (
      <div className="cell_display">
      {
        this.props.outputs.map((output, index) => <Output output={output} key={index}/>)
      }
      </div>
    );
  }
}
