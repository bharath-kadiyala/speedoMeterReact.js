import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-main-container">
        <h1 className="title">SPEEDOMETER</h1>
        <div>
          <img
            className="img-sty"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <p className="pera">Speed is {speed}mph</p>
        <p className="limit-pera">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button
            className="break-btn"
            type="button"
            onClick={this.decreaseSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
