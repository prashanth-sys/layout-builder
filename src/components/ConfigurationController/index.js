// Write your code here
import {Component} from 'react'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Layout</h1>
        <div className="checkbox-container">
          <label className="label" htmlFor="content">
            <input type="checkbox" className="checkbox" id="content" />
            Content
          </label>
          <label className="label" htmlFor="left">
            <input type="checkbox" className="checkbox" id="left" />
            Left Navbar
          </label>
          <label className="label" htmlFor="right">
            <input type="checkbox" className="checkbox" id="right" />
            Right Navbar
          </label>
        </div>
      </div>
    )
  }
}
export default ConfigurationController
