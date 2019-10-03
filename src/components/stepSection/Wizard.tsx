import * as React from 'react'
import { Consumer } from '../../context/AppContext'
import { STEPS, ACCEPT_SHIPMENTS } from '../../interfaces/types'

const Wizard: React.FC = () => (
  <Consumer>
    {context => (
      <ul id="steps">
        <li className={context.state.selectedStep === STEPS.STEP_ONE ? 'current' : ''}>
          Step 1<span> Account information</span>
        </li>
        <li className={context.state.selectedStep === STEPS.STEP_TWO ? 'current' : ''}>
          Step 2<span> Company information</span>
        </li>
        {context.state.acceptShipment === ACCEPT_SHIPMENTS.YES && (
          <li className={context.state.selectedStep === STEPS.STEP_THREE ? 'current' : ''}>
            Step 3<span> Billing information</span>
          </li>
        )}
        <li className={context.state.selectedStep === STEPS.STEP_FOUR ? 'current' : ''}>
          Finalize<span>Complete form</span>
        </li>
      </ul>
    )}
  </Consumer>
)

export default Wizard
