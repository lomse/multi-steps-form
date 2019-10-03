import * as React from 'react'
import { STEPS, ACCEPT_SHIPMENTS, PLAN_OPTIONS } from '../../interfaces/types'
import { Consumer } from '../../context/AppContext'
import { getErrorMessage } from '../../utils/validations'

const Step4: React.FC = () => (
  <Consumer>
    {context => {
      const { state, handleInputChange } = context
      const { errors, plan, acceptShipment } = state
      const previousStep = acceptShipment === ACCEPT_SHIPMENTS.YES ? STEPS.STEP_THREE : STEPS.STEP_TWO

      return (
        <fieldset>
          <legend>Subscription</legend>
          <label htmlFor="plan">Plan</label>
          <select name="plan" id="plan" value={plan} onChange={event => handleInputChange(event)}>
            <option value={PLAN_OPTIONS.EMPTY_VALUE}>Select</option>
            <option value={PLAN_OPTIONS.MONTHLY}>{PLAN_OPTIONS.MONTHLY}</option>
            <option value={PLAN_OPTIONS.YEARLY}>{PLAN_OPTIONS.YEARLY}</option>
          </select>
          <br />
          <span className="error-message">{getErrorMessage(errors, 'Plan')}</span>
          <p id="step0commands">
            <button className="prev btn float-left" onClick={() => context.goToStep(previousStep, STEPS.STEP_THREE)}>
              &lt; Previous
            </button>
            <button className="next btn float-right" onClick={() => context.goToStep(STEPS.STEP_FOUR, STEPS.STEP_FOUR)}>
              Submit
            </button>
          </p>
        </fieldset>
      )
    }}
  </Consumer>
)

export default Step4
