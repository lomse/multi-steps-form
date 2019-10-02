import * as React from 'react'
import { ACCEPT_SHIPMENTS, STEPS } from '../../interfaces/Common'
import { Consumer } from '../Context'

const InitialForm: React.FC = () => (
  <Consumer>
    {context => (
      <fieldset className="align-center">
        <legend>Do you accept shipments?</legend>
        <ul className="errors">
          {context.state.errors.map((error, i) => (
            <li key={i}>{error.message}</li>
          ))}
        </ul>
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
          <button className="next btn" onClick={() => context.goToStep(STEPS.STEP_ONE)}>
            Next &gt;
          </button>
        </p>
      </fieldset>
    )}
  </Consumer>
)

export default InitialForm
