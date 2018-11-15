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
      <div className="container mx-auto"> 
        <div className="py-4">
          <a href="#" className="mr-2 bg-transparent hover:bg-blue-dark text-blue-dark font-semibold hover:text-white py-2 px-4 rounded border border-blue hover:border-transparent no-underline"> 
            Best Practices 
          </a>

          <a href="#" className="ml-2 bg-transparent hover:bg-blue-dark text-blue-dark font-semibold hover:text-white py-2 px-4 rounded border border-blue hover:border-transparent no-underline"> 
            Code Review
          </a>
        </div>

        {content} 
      </div>
    );
  }
}

export default App;
