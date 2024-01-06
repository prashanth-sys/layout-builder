// Write your code here
import {Component} from 'react'

import './index.css'

class ConfigurationController extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onChangeContent = () => {
    const {showContent} = this.state
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
    console.log(`${showContent} triggered`)
  }

  onChangeLeftNav = () => {
    const {showLeftNavbar} = this.state
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
    console.log(`${showLeftNavbar} triggered`)
  }

  onChangeRightNav = () => {
    const {showRightNavbar} = this.state
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
    console.log(`${showRightNavbar} triggered`)
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Layout</h1>
        <div className="checkbox-container">
          <label className="label" htmlFor="content">
            <input
              type="checkbox"
              className="checkbox"
              id="content"
              onChange={this.onChangeContent}
              checked={showContent}
            />
            Content
          </label>
          <label className="label" htmlFor="left">
            <input
              type="checkbox"
              className="checkbox"
              id="left"
              onChange={this.onChangeLeftNav}
              checked={showLeftNavbar}
            />
            Left Navbar
          </label>
          <label className="label" htmlFor="right">
            <input
              type="checkbox"
              className="checkbox"
              id="right"
              onChange={this.onChangeRightNav}
              checked={showRightNavbar}
            />
            Right Navbar
          </label>
        </div>
      </div>
    )
  }
}
export default ConfigurationController
