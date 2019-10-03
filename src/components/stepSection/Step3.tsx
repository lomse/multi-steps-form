import * as React from 'react'
import { STEPS } from '../../interfaces/types'
import { Consumer } from '../../context/AppContext'
import { getErrorMessage } from '../../utils/validations'

const Step4: React.FC = () => (
  <Consumer>
    {context => {
      const { state, handleInputChange } = context
      const { errors, address1, address2, zipCode, city, userState } = state

      return (
        <fieldset>
          <legend>Address</legend>
          <label htmlFor="name">Address Line 1</label>
          <input
            id="address1"
            type="text"
            name="address1"
            value={address1}
            onChange={event => handleInputChange(event)}
          />
          <span className="error-message">{getErrorMessage(errors, 'Address1')}</span>

          <label htmlFor="name">Address Line 2</label>
          <input
            id="address2"
            type="text"
            name="address2"
            value={address2}
            onChange={event => handleInputChange(event)}
          />
          <span className="error-message">{getErrorMessage(errors, 'Address2')}</span>

          <label htmlFor="name">Zip Code</label>
          <input id="zipCode" type="text" name="zipCode" value={zipCode} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'ZipCode')}</span>

          <label htmlFor="name">City</label>
          <input id="city" type="text" name="city" value={city} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'City')}</span>

          <label htmlFor="name">State</label>
          <input
            id="userState"
            type="text"
            name="userState"
            value={userState}
            onChange={event => handleInputChange(event)}
          />
          <span className="error-message">{getErrorMessage(errors, 'State')}</span>

          <p id="step0commands">
            <button className="prev btn float-left" onClick={() => context.goToStep(STEPS.STEP_TWO, STEPS.STEP_THREE)}>
              &lt; Previous
            </button>
            <button
              className="next btn float-right"
              onClick={() => context.goToStep(STEPS.STEP_FOUR, STEPS.STEP_THREE)}
            >
              Next &gt;
            </button>
          </p>
        </fieldset>
      )
    }}
  </Consumer>
)

export default Step4
