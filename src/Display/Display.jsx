import React from 'react';

import Output from './Output';

export default class Display extends React.Component {
  static displayName = 'Display';

  static propTypes = {
    outputs: React.PropTypes.any,
  };

  render() {
    return (
      <div>
      {
        this.props.outputs.map((output, index) => <Output output={output} key={index}/>)
      }
      </div>
    );
  }
}
