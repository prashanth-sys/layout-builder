import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <>
          <Header />
          <div className="layout-container">
            {showLeftNavbar ? (
              <div className="left-navbar">
                <h1 className="left-heading">Left Navbar Menu</h1>
                <ul>
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
                <li className="item">Item 5</li>
              </ul>
              </div>
            
            ) : null}

            {showContent ? (
              <div className="content-container">
                <h1 className="content-heading">Content</h1>
                <p className="content-description">
                  Lorem ipsum dolor sit amet, shiva parvathi Hare Rama Rama Rama
                  Hare Hare Hare Krishna Krishna Krishna Hare Hare
                </p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="right-container">
                <h1 className="right-heading">Right Navbar</h1>
                <Body />
              </div>
            ) : null}
          </div>
          <Footer />
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout