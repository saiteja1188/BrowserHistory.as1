import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    newList: initialHistoryList,
    isTrue: false,
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteFun = value => {
    const {newList} = this.state
    const {isTrue} = this.state
    console.log(isTrue)
    const searchRes = newList.filter(eachItem => eachItem.id !== value)
    console.log(searchRes)
    if (searchRes.length === 1) {
      this.setState({newList: searchRes, isTrue: true})
    } else {
      this.setState({newList: searchRes})
    }
  }

  render() {
    const {searchInput} = this.state
    let {isTure} = this.state
    const {newList} = this.state
    const searchRes = newList.filter(eachValue =>
      eachValue.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchRes.length === 0) {
      isTure = true
    }

    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="bottom-container">
          {!isTure && (
            <ul className="ui-container">
              {searchRes.map(eachRes => (
                <li className="li-res" key={eachRes.id}>
                  <p className="time">{eachRes.timeAccessed}</p>
                  <div className="content-d">
                    <div className="img-icon">
                      <img
                        src={eachRes.logoUrl}
                        alt="domain logo"
                        className="logo-url"
                      />
                      <div className="icon-content">
                        <p className="title">{eachRes.title}</p>
                        <p className="domain">{eachRes.domainUrl}</p>
                      </div>
                    </div>
                    <div className="delete-container">
                      <button
                        type="button"
                        data-testid="delete"
                        onClick={() => this.onDeleteFun(eachRes.id)}
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                          alt="delete"
                          className="delete-button"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              
            </ul>
          )}
          {isTure && (
                <div className="emty-container">
                  <p>There is no history to show</p>
                </div>
              )}
        </div>
      </div>
    )
  }
}

export default App
