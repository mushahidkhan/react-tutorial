import React, { Component } from 'react'

export default class CompleteLink extends Component {
  constructor(props) {
    super(props)

    this.completeStep = this.completeStep.bind(this)
  }
  render() {
    return (
      <div
        className="complete"
        onClick={this.props.completeStep}
      >
        Click to complete!
      </div>
    )
  }


}

