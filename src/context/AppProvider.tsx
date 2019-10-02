import * as React from 'react'
import { ACCEPT_SHIPMENTS, STEPS, IContainerState } from '../interfaces/Common'
import { Provider, DEFAULT_STATE } from './AppContext'

class AppProvider extends React.Component {
  state: Readonly<IContainerState> = DEFAULT_STATE

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  goToStep = (selectedStep: STEPS) => {
    const { acceptShipment } = this.state

    this.setState({ errors: [] }, () => {
      if (acceptShipment === ACCEPT_SHIPMENTS.EMPTY_VALUE) {
        this.setState({ errors: [{ label: 'acceptShipment', message: 'Select an option to proceed.' }] })
      } else {
        this.setState({ selectedStep })
      }
    })
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handleInputChange: this.handleInputChange,
          goToStep: this.goToStep
        }}
      > {this.props.children}</Provider>
    )
  }
}

export default AppProvider
