import React from 'react';
import Immutable from 'immutable';

import { richestMimetype, transforms, displayOrder } from 'transformime-react';

export default function RichestMime(props) {
  const mimetype = richestMimetype(
    props.bundle,
    props.displayOrder,
    props.transforms
  );

  if (!mimetype) {
    // If no mimetype is supported, don't return a component
    return null;
  }

  const Transform = props.transforms.get(mimetype);
  const data = props.bundle.get(mimetype);
  return <Transform key={mimetype} data={data} />;
}

RichestMime.propTypes = {
  bundle: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  displayOrder: React.PropTypes.instanceOf(Immutable.List),
  transforms: React.PropTypes.instanceOf(Immutable.Map),
};

RichestMime.defaultProps = { transforms, displayOrder };
