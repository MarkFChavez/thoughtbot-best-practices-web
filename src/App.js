import React, { Component } from 'react';
import marked from 'marked';

const THOUGHTBOT_URL = "https://thoughtbot.com"
const BEST_PRACTICES = "https://raw.githubusercontent.com/thoughtbot/guides/master/best-practices/README.md"
const CODE_REVIEW = "https://raw.githubusercontent.com/thoughtbot/guides/master/code-review/README.md"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { text: "", loading: true, active: "best_practices", }
    this.fetchContent = this.fetchContent.bind(this)
    this.rawMarkup = this.rawMarkup.bind(this)
    this.linkClasses = this.linkClasses.bind(this)
  }

  componentWillMount() {
    let url = this._getUrlFromActiveLink(this.state.active)
    this.fetchContent(url)
  }

  rawMarkup() {
    let rawMarkup = marked(this.state.text, {sanitize: true})
    return { __html: rawMarkup }
  }

  fetchContent(url) {
    fetch(url)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ text: text, loading: false, })
      })
  }

  setContent(value) {
    this.setState({ loading: true, active: value }, () => {
      let url = this._getUrlFromActiveLink(value)
      this.fetchContent(url)
    })
  }

  linkClasses(value) {
    let active = this.state.active

    console.log(`active: ${active}`)
    console.log(`value: ${value}`)

    if (active === value) {
      return "mr-2 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded no-underline"
    }

    return "mr-2 bg-transparent hover:bg-blue-dark text-blue-dark font-semibold hover:text-white py-2 px-4 rounded border border-blue hover:border-transparent no-underline"
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
        <div className="text-xl py-2">
          <span> Guides maintained by </span>
          <a href={THOUGHTBOT_URL} className="text-blue-dark no-underline hover:underline"> thoughtbot, inc. </a>
        </div>

        <div className="py-4 border-bottom border-black border-solid border-b-4">
          <a href="#" onClick={this.setContent.bind(this, 'best_practices')} className={this.linkClasses('best_practices')}> 
            Best Practices 
          </a>

          <a href="#" onClick={this.setContent.bind(this, 'code_review')} className={this.linkClasses('code_review')}> 
            Code Review Tips
          </a>
        </div>

        {content} 
      </div>
    );
  }

  _getUrlFromActiveLink(active) {
    if (active === "best_practices") {
      return BEST_PRACTICES
    } else {
      return CODE_REVIEW
    }
  }
}

export default App;
