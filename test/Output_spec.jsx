import React from 'react';

import { expect } from 'chai';

import Immutable from 'immutable';

import {
  renderIntoDocument,
} from 'react-addons-test-utils';

import Output from '../src/Output.jsx';

// Boilerplate test to make sure the testing setup is configured
describe('Output', () => {
  it('accepts an Immutable.Map of output data', () => {
    const outputJSON = `[[{"data":{"text/html":"<h1>Multiple</h1>","text/plain":"<IPython.core.display.HTML object>"},"metadata":{},"output_type":"display_data"},{"data":{"text/html":"<p>Display Elements</p>","text/plain":"<IPython.core.display.HTML object>"},"metadata":{},"output_type":"display_data"},{"data":{"text/markdown":"**awesome**","text/plain":"<IPython.core.display.Markdown object>"},"metadata":{},"output_type":"display_data"},{"name":"stdout","output_type":"stream","text":"hey\\n"},{"data":{"text/plain":"42"},"execution_count":11,"metadata":{},"output_type":"execute_result"}],[{"name":"stdout","output_type":"stream","text":"LICENSE        app.js         main.css       \\u001b[34mnode_modules\\u001b[m\\u001b[m   \\u001b[34msrc\\u001b[m\\u001b[m\\r\\nREADME.md      index.html     main.js        package.json   \\u001b[34mtest-notebooks\\u001b[m\\u001b[m\\r\\n"}],[{"ename":"NameError","evalue":"name \'thistextwillerror\' is not defined","output_type":"error","traceback":["\\u001b[0;31m---------------------------------------------------------------------------\\u001b[0m","\\u001b[0;31mNameError\\u001b[0m                                 Traceback (most recent call last)","\\u001b[0;32m<ipython-input-4-11420afa3bbc>\\u001b[0m in \\u001b[0;36m<module>\\u001b[0;34m()\\u001b[0m\\n\\u001b[0;32m----> 1\\u001b[0;31m \\u001b[0mthistextwillerror\\u001b[0m\\u001b[0;34m\\u001b[0m\\u001b[0m\\n\\u001b[0m","\\u001b[0;31mNameError\\u001b[0m: name \'thistextwillerror\' is not defined"]}],[{"data":{"text/html":"<img src=\\"https://avatars2.githubusercontent.com/u/12401040?v=3&s=200\\"/>","text/plain":"<IPython.core.display.Image object>"},"execution_count":7,"metadata":{},"output_type":"execute_result"}]]`;

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
          output_type: 'execute_result' } ]
    );

    outputs.forEach(output => {
      const component = renderIntoDocument(
        <Output output={output} />
      );
      expect(component).to.not.be.null;
    });
  });
});
