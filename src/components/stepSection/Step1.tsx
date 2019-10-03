import * as React from 'react'
import { STEPS } from '../../interfaces/types'
import { Consumer } from '../../context/AppContext'
import { getErrorMessage } from '../../utils/validations'

const Step1: React.FC = () => (
  <Consumer>
    {context => {
      const { state, handleInputChange } = context
      const { errors, name, email, password, confirmPassword } = state

      return (
        <fieldset>
          <legend>Account information</legend>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={name} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'Name')}</span>

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={email} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'Email')}</span>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={event => handleInputChange(event)}
          />
          <span className="error-message">{getErrorMessage(errors, 'Password')}</span>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={event => handleInputChange(event)}
          />
          <span className="error-message">{getErrorMessage(errors, 'ConfirmPassword')}</span>

          <p id="step0commands">
            <button
              className="prev btn float-left"
              onClick={() => context.goToStep(STEPS.INITIAL_PAGE, STEPS.INITIAL_PAGE)}
            >
              &lt; Previous
            </button>
            <button className="next btn float-right" onClick={() => context.goToStep(STEPS.STEP_TWO, STEPS.STEP_ONE)}>
              Next &gt;
            </button>
          </p>
        </fieldset>
      )
    }}
  </Consumer>
)

export default Step1
