import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="layout-container">
          <div className="left-navbar">
            <h1 className="left-heading">Left Navbar Menu</h1>
            <p className="item">Item 1</p>
            <p className="item">Item 2</p>
            <p className="item">Item 3</p>
            <p className="item">Item 4</p>
          </div>
          <div className="content-container">
            <h1 className="content-heading">Content</h1>
            <p className="content-description">
              Lorem ipsum dolor sit amet, shiva parvathi Hare Rama Rama Rama
              Hare Hare Hare Krishna Krishna Krishna Hare Hare
            </p>
          </div>
          <div className="right-container">
            <h1 className="right-heading">Right Navbar</h1>
            <Body />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default Layout
