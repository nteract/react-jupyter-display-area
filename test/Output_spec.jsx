import React from 'react';

import chai, { expect } from 'chai';
import jsxChai from 'jsx-chai';

chai.use(jsxChai);

import Immutable from 'immutable';

import {
  createRenderer,
} from 'react-addons-test-utils';

import Output from '../src/Output';
import ConsoleText from '../src/ConsoleText';

describe('Output', () => {
  it('handles display data', () => {
    const renderer = createRenderer();

    const output = Immutable.fromJS({
      data:
          { 'text/html': '<h1>Multiple</h1>',
            'text/plain': '<IPython.core.display.HTML object>' },
      metadata: {},
      output_type: 'display_data',
    });

    renderer.render(<Output output={output} />);
    const result = renderer.getRenderOutput();
    expect(result.props.bundle).to.eq(output.get('data'));
  });
  it('handles stream data', () => {
    const renderer = createRenderer();

    const output = Immutable.fromJS({
      name: 'stdout',
      output_type: 'stream',
      text: 'hey\n',
    });

    renderer.render(<Output output={output} />);
    const result = renderer.getRenderOutput();
    expect(result).to.deep.equal(<ConsoleText text={'hey\n'} />);
  });
});
