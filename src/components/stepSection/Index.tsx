import * as React from 'react'
import Wizard from './Wizard'
import Step1 from './Step1'
import { Consumer } from '../../context/AppContext'
import { STEPS } from '../../interfaces/types'
import Step2 from './Step2'
import Step3 from './SteP3'
import Step4 from './Step4'

const StepSection: React.FC = () => (
  <Consumer>
    {context => (
      <React.Fragment>
        <Wizard />
        {context.state.selectedStep === STEPS.STEP_ONE && <Step1 />}
        {context.state.selectedStep === STEPS.STEP_TWO && <Step2 />}
        {context.state.selectedStep === STEPS.STEP_THREE && <Step3 />}
        {context.state.selectedStep === STEPS.STEP_FOUR && <Step4 />}
      </React.Fragment>
    )}
  </Consumer>
)

export default StepSection
