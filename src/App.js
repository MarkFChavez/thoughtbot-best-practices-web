import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

const SOURCE_URL = "https://raw.githubusercontent.com/thoughtbot/guides/master/best-practices/README.md"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
    this.rawMarkup = this.rawMarkup.bind(this)
  }

  rawMarkup() {
    let rawMarkup = marked(this.state.text, {sanitize: true})
    return { __html: rawMarkup }
  }

  componentWillMount() {
    fetch(SOURCE_URL)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ text: text })
      })
  }

  render() {
    return (
      <div className="App">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default App;
