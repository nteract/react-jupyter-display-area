import React from 'react';

import chai, { expect } from 'chai';
import jsxChai from 'jsx-chai';

chai.use(jsxChai);

import Immutable from 'immutable';

import {
  createRenderer
} from 'react-addon-test-utils';

import Display from '../src/Display';

describe('Display', () => {
  it('does not display when status is hidden', () => {
    const renderer = createRenderer();
    renderer.render(<Display isHidden={true} />);
    const component = renderer.getRenderOutput();
    expect(component.style.display).to.equal('none');
  });
  it('displays status when it is not hidden', () => {
    const renderer = createRenderer();
    renderer.render(<Display isHidden={false} />);
    const component = renderer.getRenderOutput();
    expect(component.style.display).to.equal('none');
  });
});
