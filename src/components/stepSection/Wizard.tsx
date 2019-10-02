import * as React from 'react'

const Wizard: React.FC = () => (
  <ul id="steps">
    <li className="current">
      Step 1<span> Account information</span>
    </li>
    <li>
      Step 2<span> Company information</span>
    </li>
    <li>
      Step 3<span> Billing information</span>
    </li>
  </ul>
)

export default Wizard
