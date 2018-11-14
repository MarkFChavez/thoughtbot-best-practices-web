import React, { Component } from 'react';
import marked from 'marked';

const SOURCE_URL = "https://raw.githubusercontent.com/thoughtbot/guides/master/best-practices/README.md"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "", loading: true, }
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
        this.setState({ text: text, loading: false, })
      })
  }

  render() {
    let content;
    if (this.state.loading) {
      content = <span> Loading content... </span>
    } else {
      content = <span dangerouslySetInnerHTML={this.rawMarkup()} />
    }

    return (
      <div className="App"> {content} </div>
    );
  }
}

export default App;
