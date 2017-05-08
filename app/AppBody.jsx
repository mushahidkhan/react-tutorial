import React, { Component } from 'react'
import Step from './Step'
import Completed from './Completed'
import CompleteLink from './CompleteLink'

export default class AppBody extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      completed: false,
    }

    this.completeStep = this.completeStep.bind(this)
  }

  render() {
    return (
      <div className="step">
        <Step stepNumber={9000}/>
        <Completed
          completed={this.state.completed}
        />
        {<CompleteLink
          completed={this.state.completed}
          completeStep={this.completeStep}
        />}
      </div>
    )
  }

  completeStep() {
    this.setState({
      completed: true,
    })
  }
}

