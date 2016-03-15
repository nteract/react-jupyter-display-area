/* eslint camelcase: 0 */
import React from 'react';

import { expect } from 'chai';

import Immutable from 'immutable';

import TestUtils from 'react-addons-test-utils';

import Output from '../src/Output.jsx';

// Boilerplate test to make sure the testing setup is configured
describe('Output', () => {
  it('accepts an Immutable.Map of output data', () => {
    const outputs = Immutable.fromJS(
      [{ data:
           { 'text/html': '<h1>Multiple</h1>',
             'text/plain': '<IPython.core.display.HTML object>' },
          metadata: {},
          output_type: 'display_data' },
        { data:
           { 'text/html': '<p>Display Elements</p>',
             'text/plain': '<IPython.core.display.HTML object>' },
          metadata: {},
          output_type: 'display_data' },
        { data:
           { 'text/markdown': '**awesome**',
             'text/plain': '<IPython.core.display.Markdown object>' },
          metadata: {},
          output_type: 'display_data' },
        { name: 'stdout', output_type: 'stream', text: 'hey\n' },
        { data: { 'text/plain': '42' },
          execution_count: 11,
          metadata: {},
          output_type: 'execute_result' },
        { data:
           { 'text/html': '<img src="https://avatars2.githubusercontent.com/u/12401040?v=3&s=200"/>',
             'text/plain': '<IPython.core.display.Image object>' },
          execution_count: 7,
          metadata: {},
          output_type: 'execute_result' }]
    );

    outputs.forEach(output => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<Output output={output} />);
      const component = renderer.getRenderOutput();
      expect(component).to.not.be.null;
    });
  });
});
