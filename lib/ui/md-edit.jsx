import React from 'react';
import realMdEdit from '../../vendor/mdEdit/mdedit.min';


export default React.createClass({
  componentDidMount: function() {
    this.editor = realMdEdit(this.refs.pre.getDOMNode(), {
      change: value => {
        this.props.onChange(value)
      }
    });
  },

  componentWillReceiveProps: function (nextProps) {
    this.props.value = nextProps.value;

    if (this.editor.getValue() !== this.props.value) {
      this.editor.setValue(this.props.value);
    }
  },

  shouldComponentUpdate: function() {
    return false;
  },

  render: function () {
     return <pre style={this.props.style} ref="pre">
       {this.props.value}
     </pre>;
  }
});