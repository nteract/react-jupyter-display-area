import React from 'react';

import chai, { expect } from 'chai';
import jsxChai from 'jsx-chai';

chai.use(jsxChai);

import Immutable from 'immutable';

import {
  createRenderer
} from 'react-addons-test-utils';

import ToggleableDisplay from '../src/ToggleableDisplay';

describe('ToggleableDisplay', () => {
  it('does not display when status is hidden', () => {
    const renderer = createRenderer();
    renderer.render(<ToggleableDisplay isHidden={true} />);
    const component = renderer.getRenderOutput();
    expect(component.props.style.display).to.equal('none');
  });
  it('displays status when it is not hidden', () => {
    const renderer = createRenderer();
    renderer.render(<ToggleableDisplay isHidden={false} />);
    const component = renderer.getRenderOutput();
    expect(component.props.style.display).to.equal('block');
  });
});
