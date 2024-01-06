import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const content = {
  showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
}

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent(content.showContent)
        console.log('')
      }
      const onChangeLeftNav = () => {
        onToggleShowRightNavbar(content.showLeftNavbar)
        console.log('')
      }
      const onChangeRightNav = () => {
        onToggleShowLeftNavbar(content.showRightNavbar)
        console.log('')
      }

      return (
        <div className="bg-container">
          <h1 className="main-heading">Layout</h1>
          <div className="checkbox-container">
            <label className="label" htmlFor="content">
              <input
                type="checkbox"
                className="checkbox"
                id="content"
                onChange={onChangeContent}
                value={showContent}
              />
              Content
            </label>
            <label className="label" htmlFor="left">
              <input
                type="checkbox"
                className="checkbox"
                id="left"
                onChange={onChangeLeftNav}
                value={showLeftNavbar}
              />
              Left Navbar
            </label>
            <label className="label" htmlFor="right">
              <input
                type="checkbox"
                className="checkbox"
                id="right"
                onChange={onChangeRightNav}
                value={showRightNavbar}
              />
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
