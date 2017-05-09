# react-jupyter-display-area

Render Jupyter notebook outputs in a trim little React component.

:warning: This package has been deprecated in favor of [`@nteract/display-area`](https://github.com/nteract/nteract/tree/master/packages/display-area).

The usage is similar:

```jsx
import Display from '@nteract/display-area`
<Display outputs={outputs} />
```

Here `outputs` is an Immutable.js structure with all the outputs of a cell.
Note: this does require trim, clean editions of the multiline cells as is done
in [commutable](https://github.com/nteract/nteract/tree/master/packages/commutable).

Used in context of a notebook, you will likely be extracting it from a cell:

```jsx
<Display outputs={this.props.cell.get('outputs')} />
```

