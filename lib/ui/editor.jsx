import fs from 'fs';
import React from 'react/addons';
import marked from 'marked';
import _ from 'lodash';


const editableArea = {
  flex: '1 0 200px',
  border: 0,
  outline: 'none',
  background: '#1B2B34',
  color: '#CDD3DE',
  padding: '1.5em',
  fontFamily: 'monospace',
  fontSize: '1.2em'
};


const previewArea = {
  flex: '1 0 200px',
  background: '#EEEEEE',
  padding: '1.5em',
  overflow: 'scroll'
};


const wrapper = {
  height: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'stretch',
  alignItems: 'stretch',
};


marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});


export default React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      content: ''
    };
  },

  componentWillReceiveProps: function (nextProps) {
    console.log('path', nextProps);

    const content = fs.readFileSync(nextProps.notePath);

    this.setState({
      content: content.toString()
    });
  },

  render: function () {
    var markdown = marked(this.state.content);

    return <div style={_.merge({}, wrapper, this.props.style)}>
      <textarea style={editableArea} valueLink={this.linkState('content')}></textarea>
      <div style={previewArea} dangerouslySetInnerHTML={{ __html: markdown}}></div>
    </div>;
  }
});