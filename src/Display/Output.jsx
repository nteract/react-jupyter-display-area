import React from 'react';

import RichestMime from './RichestMime';

import ConsoleText from './ConsoleText';

export default class Output extends React.Component {
  static displayName = 'Output';

  static propTypes = {
    output: React.PropTypes.any,
  };

  render() {
    const output = this.props.output;
    const outputType = output.get('output_type');
    switch(outputType) {
    case 'execute_result':
      // We can defer to display data here, the cell number will be handled
      // separately. For reference, it is output.get('execution_count')
      // The execution_count belongs in the component above if
      // this is a code cell
    case 'display_data':
      const bundle = output.get('data');
      return <RichestMime bundle={bundle} />;
    case 'stream':
      const text = output.get('text');
      switch(output.get('name')) {
      case 'stdout':
        return <ConsoleText text={text} />;
      case 'stderr':
        return <ConsoleText text={text} />;
      }
    case 'error':
      const traceback = output.get('traceback');
      if (!traceback) {
        return <ConsoleText text={`${output.get('ename')}: ${output.get('evalue')}`} />;
      }
      return <ConsoleText text={traceback.join('\n')} />;
    case 'clear_output':
      return (
        <div>
          <p style={{ color: 'red' }}>Output type '{outputType}' not implemented yet</p>
          <pre style={{ color: 'red' }}>{JSON.stringify(output)}</pre>
        </div>
      );
    }
  }
}
