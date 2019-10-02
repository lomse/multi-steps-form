import * as React from 'react'
import Wizard from './Wizard'
import Step1 from './Step1'

const StepSection: React.FC = () => (
  <React.Fragment>
    <Wizard />
    <Step1 />
  </React.Fragment>
)

export default StepSection
