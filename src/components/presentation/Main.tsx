import * as React from 'react'
import StepSection from './stepSection'
import InitialForm from './InitialForm'
import { Consumer } from '../Context'
import { STEPS } from '../../interfaces/Common'

const Presentation: React.FC = () => (
  <Consumer>
    {context => (
      <div className="wrapper">
        {context.state.selectedStep === STEPS.INITIAL_PAGE ? <InitialForm /> : <StepSection />}
      </div>
    )}
  </Consumer>
)

export default Presentation
