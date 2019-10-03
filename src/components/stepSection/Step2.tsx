import * as React from 'react'
import { STEPS, GENDER, ACCEPT_SHIPMENTS } from '../../interfaces/types'
import { Consumer } from '../../context/AppContext'
import { getErrorMessage } from '../../utils/validations'
import MaskedInput from '../../elements/MaskedInput'

const Step2: React.FC = () => (
  <Consumer>
    {context => {
      const { state, handleInputChange } = context
      const { errors, dob, phone, gender, acceptShipment } = state
      const nextStep = acceptShipment === ACCEPT_SHIPMENTS.YES ? STEPS.STEP_THREE : STEPS.STEP_FOUR

      return (
        <fieldset>
          <legend>Account information</legend>
          <MaskedInput
            name="dob"
            value={dob}
            onChange={handleInputChange}
            placeholder="MM/DD/YYYY"
            labelText="Date of Birth"
            mask="99/99/9999"
          />
          <span className="error-message">{getErrorMessage(errors, 'DOB')}</span>

          <MaskedInput
            name="phone"
            value={phone}
            onChange={handleInputChange}
            placeholder="(999) 999-9999"
            labelText="Phone Number"
            mask="(999) 999-9999"
          />
          <span className="error-message">{getErrorMessage(errors, 'Phone')}</span>

          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" value={gender} onChange={event => handleInputChange(event)}>
            <option value={GENDER.EMPTY_VALUE}>Select</option>
            <option value={GENDER.MALE}>Male</option>
            <option value={GENDER.FEMALE}>Female</option>
            <option value={GENDER.OTHER}>Other</option>
          </select>
          <br />
          <span className="error-message">{getErrorMessage(errors, 'Gender')}</span>

          <p id="step0commands">
            <button
              className="prev btn float-left"
              onClick={() => context.goToStep(STEPS.STEP_ONE, STEPS.INITIAL_PAGE)}
            >
              &lt; Previous
            </button>
            <button className="next btn float-right" onClick={() => context.goToStep(nextStep, STEPS.STEP_TWO)}>
              Next &gt;
            </button>
          </p>
        </fieldset>
      )
    }}
  </Consumer>
)

export default Step2
