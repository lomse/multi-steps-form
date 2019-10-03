import * as React from 'react'
import { STEPS, GENDER, ACCEPT_SHIPMENTS } from '../../interfaces/types'
import { Consumer } from '../../context/AppContext'
import { getErrorMessage } from '../../utils/validations'

const Step4: React.FC = () => (
  <Consumer>
    {context => {
      const { state, handleInputChange } = context
      const { errors, dob, phone, gender, acceptShipment } = state
      const nextStep = acceptShipment === ACCEPT_SHIPMENTS.YES ? STEPS.STEP_THREE : STEPS.STEP_FOUR

      return (
        <fieldset>
          <legend> Date of Birth</legend>
          <label htmlFor="name">Name</label>
          <input id="dob" type="text" name="dob" value={dob} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'DOB')}</span>

          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" name="phone" value={phone} onChange={event => handleInputChange(event)} />
          <span className="error-message">{getErrorMessage(errors, 'Phone')}</span>

          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" value={gender}>
            <option value={GENDER.EMPTY_VALUE}>Select</option>
            <option value={GENDER.MALE}>Male</option>
            <option value={GENDER.FEMALE}>Female</option>
            <option value={GENDER.OTHER}>Other</option>
          </select>
          <span className="error-message">{getErrorMessage(errors, 'Gender')}</span>

          <p id="step0commands">
            <button className="prev btn float-left" onClick={() => context.goToStep(STEPS.STEP_ONE)}>
              &lt; Previous
            </button>
            <button className="next btn float-right" onClick={() => context.goToStep(nextStep)}>
              Next &gt;
            </button>
          </p>
        </fieldset>
      )
    }}
  </Consumer>
)

export default Step4
