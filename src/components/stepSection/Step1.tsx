import * as React from 'react'
import { STEPS } from '../../interfaces/Common'
import { Consumer } from '../../context/AppContext'

const Step1: React.FC = () => (
  <Consumer>
    {context => (
      <fieldset>
        <legend> Account information</legend>
        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" />
        <label htmlFor="Email">Email</label>
        <input id="Email" type="text" />
        <label htmlFor="Password">Password</label>
        <input id="Password" type="password" />
        <p id="step0commands">
          <button className="prev btn float-left" onClick={() => context.goToStep(STEPS.INITIAL_PAGE)}>
            &lt; Previous
          </button>
          <button className="next btn float-right" onClick={() => context.goToStep(STEPS.STEP_TWO)}>
            Next &gt;
          </button>
        </p>
      </fieldset>
    )}
  </Consumer>
)

export default Step1
