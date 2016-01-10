import React from 'react';
import Immutable from 'immutable';

import { richestMimetype, transforms, displayOrder } from 'transformime-react';

export default class RichestMime extends React.Component {
  static displayName = 'RichestMime';

  static propTypes = {
    bundle: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    displayOrder: React.PropTypes.instanceOf(Immutable.List),
    transforms: React.PropTypes.instanceOf(Immutable.Map),
  };

  static defaultProps = {
    transforms,
    displayOrder,
  };

  render() {
    const mimetype = richestMimetype(
      this.props.bundle,
      this.props.displayOrder,
      this.props.transforms
    );

    const Transform = this.props.transforms.get(mimetype);
    const data = this.props.bundle.get(mimetype);
    return <Transform key={mimetype} data={data} />;
  }
}
