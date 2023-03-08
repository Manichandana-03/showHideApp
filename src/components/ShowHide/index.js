// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: false, lastCard: false}

  firstNameClicked = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  lastCardClicked = () => {
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state

    return (
      <div className="app">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="card">
              <button
                className="button margin-right margin-bottom"
                type="button"
                onClick={this.firstNameClicked}
              >
                Show/Hide Firstname
              </button>
              {firstCard ? <p className="name">Joe</p> : ''}
            </div>
            <div className="card">
              <button
                className="button margin-left margin-top"
                type="button"
                onClick={this.lastCardClicked}
              >
                Show/Hide Lastname
              </button>
              {lastCard ? <p className="name">Jonas</p> : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
