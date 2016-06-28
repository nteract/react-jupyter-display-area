import React from 'react';

import chai, { expect } from 'chai';
import jsxChai from 'jsx-chai';

chai.use(jsxChai);

import Immutable from 'immutable';

import {
  createRenderer
} from 'react-addons-test-utils';

import TogglableDisplay from '../src/TogglableDisplay';

describe('TogglableDisplay', () => {
  it('does not display when status is hidden', () => {
    const renderer = createRenderer();
    renderer.render(<TogglableDisplay isHidden={true} />);
    const component = renderer.getRenderOutput();
    expect(component.props.style.display).to.equal('none');
  });
  it('displays status when it is not hidden', () => {
    const renderer = createRenderer();
    renderer.render(<TogglableDisplay isHidden={false} />);
    const component = renderer.getRenderOutput();
    expect(component.props.style.display).to.equal('block');
  });
});
