# react-jupyter-display-area

Render Jupyter notebook outputs in a trim little React component.

```jsx
<Display outputs={outputs} />
```

Here `outputs` is an Immutable.js structure with all the outputs of a cell.
Note: this does require trim, clean editions of the multiline cells as is done
in [commutable](https://github.com/nteract/commutable).

Used in context of a notebook, you will likely be extracting it from a cell:

```jsx
<Display outputs={this.props.cell.get('outputs')} />
```

