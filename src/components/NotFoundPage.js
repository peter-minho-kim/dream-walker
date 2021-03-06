import React from 'react'

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // This fixes the bottom spacing issue that the moving stars background causes
    this.refs.wrapper.style.height = window.innerHeight + 'px'
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <div className="four-oh-four-page">
          <h2 className="four-oh-four">404</h2>
          <p className="four-oh-four-p">page not found</p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage