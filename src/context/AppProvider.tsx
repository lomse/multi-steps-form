import * as React from 'react'
import { STEPS, IContainerState, IValidationError } from '../interfaces/types'
import { Provider, DEFAULT_STATE } from './AppContext'
import * as validation from '../utils/validations'

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

  goToStep = (selectedStep: STEPS, currentStep: STEPS) => {
    let errors: IValidationError[] = []

    const {
      acceptShipment,
      name,
      email,
      password,
      confirmPassword,
      dob,
      phone,
      gender,
      plan,
      address1,
      zipCode,
      userState,
      city
    } = this.state

    this.setState({ errors: [] }, () => {
      switch (currentStep) {
        case STEPS.INITIAL_PAGE:
          errors = validation.initalStep(acceptShipment)
          break

        case STEPS.STEP_ONE:
          errors = validation.stepOne({ name, email, password, confirmPassword })
          break

        case STEPS.STEP_TWO:
          errors = validation.stepTwo({ dob, phone, gender })
          break

        case STEPS.STEP_THREE:
          errors = validation.stepThree({ address1, city, zipCode, userState })
          break

        case STEPS.STEP_FOUR:
          errors = validation.stepFour(plan)
          break

        default:
          break
      }

      if (errors.length) {
        this.setState({ errors })
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
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default AppProvider
