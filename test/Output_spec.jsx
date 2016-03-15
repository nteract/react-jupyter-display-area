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
      output_type: 'display_data',
      data:
          { 'text/html': '<h1>Multiple</h1>',
            'text/plain': '<IPython.core.display.HTML object>' },
      metadata: {},
    });

    renderer.render(<Output output={output} />);
    const result = renderer.getRenderOutput();
    expect(result.props.bundle).to.eq(output.get('data'));
  });
  it('handles stream data', () => {
    const renderer = createRenderer();

    const output = Immutable.fromJS({
      output_type: 'stream',
      name: 'stdout',
      text: 'hey\n',
    });

    renderer.render(<Output output={output} />);
    const result = renderer.getRenderOutput();
    expect(result).to.deep.equal(<ConsoleText text={'hey\n'} />);
  });
  it('handles errors/tracebacks', () => {
    const renderer = createRenderer();

    const output = Immutable.fromJS({
      output_type: 'error',
      traceback: 'whoa there buckaroo!',
      ename: 'BuckarooException',
      evalue: 'whoa!',
    });

    renderer.render(<Output output={output} />);
    const result = renderer.getRenderOutput();

    expect(result).to.deep.equal(<ConsoleText text={output.get('traceback').join('\n')} />);

    const outputNoTraceback = Immutable.fromJS({
      output_type: 'error',
      ename: 'BuckarooException',
      evalue: 'whoa!',
    });

    renderer.render(<Output output={output} />);
    const result2 = renderer.getRenderOutput();

    expect(result2).to.deep.equal(
      <ConsoleText
        text={`${outputNoTraceback.get('ename')}: ${outputNoTraceback.get('evalue')}`}
      />
    );
  });
});
