//Initialize a markdown string
const initialMarkdown = `
# heding 1
## heading 2
### heading 3

Heres some code, \`<div>dasdsad</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});


class App extends React.Component {
  // Use the useState hook to create a state variable `markdown` and a setter function `setMarkdown` to update its value. The initial value is set to `initialMarkdown`.
  state = {
    text: initialMarkdown
  };

  // Define a function `handleInputChange` that updates the `markdown` state with the new value whenever the input changes. The new value is obtained from `event.target.value`.
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  
  render() {
    return (
      <div className="App">
        <h1 id="title">Markdown Previewer</h1>
        <textarea 
          id="editor" 
          value={ this.state.text } 
          onChange={ this.onChange } 
          placeholder="Enter Markdown..." />
        <div 
          id="preview"
          dangerouslySetInnerHTML = {{ __html: marked(this.state.text) }}>
        </div> 
      </div>
    );
  };
};


ReactDOM.render(<App />, document.getElementById('root'));
