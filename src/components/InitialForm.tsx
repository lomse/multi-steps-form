import * as React from 'react'
import { ACCEPT_SHIPMENTS, STEPS } from '../interfaces/types'
import { Consumer } from '../context/AppContext'
import { getErrorMessage } from '../utils/validations'

const InitialForm: React.FC = () => (
  <Consumer>
    {context => (
      <fieldset className="align-center">
        <legend>Do you accept shipments?</legend>
        <span className="error-message">{getErrorMessage(context.state.errors, 'AcceptShipment')}</span>
        <br /> <br />
        <select
          name="acceptShipment"
          value={context.state.acceptShipment}
          onChange={event => context.handleInputChange(event)}
        >
          <option value={ACCEPT_SHIPMENTS.EMPTY_VALUE}>Select</option>
          <option value={ACCEPT_SHIPMENTS.YES}>{ACCEPT_SHIPMENTS.YES}</option>
          <option value={ACCEPT_SHIPMENTS.NO}>{ACCEPT_SHIPMENTS.NO}</option>
        </select>
        <p id="step0commands">
          <button className="next btn" onClick={() => context.goToStep(STEPS.STEP_ONE, STEPS.INITIAL_PAGE)}>
            Next &gt;
          </button>
        </p>
      </fieldset>
    )}
  </Consumer>
)

export default InitialForm
