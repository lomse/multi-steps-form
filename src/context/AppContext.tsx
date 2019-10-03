import * as React from 'react'
import { IContext, ACCEPT_SHIPMENTS, STEPS, GENDER, PLAN_OPTIONS } from '../interfaces/types'

export const DEFAULT_STATE = {
  errors: [],
  acceptShipment: ACCEPT_SHIPMENTS.EMPTY_VALUE,
  selectedStep: STEPS.INITIAL_PAGE,
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  dob: '',
  phone: '',
  gender: GENDER.EMPTY_VALUE,
  plan: PLAN_OPTIONS.EMPTY_VALUE,
  address1: '',
  address2: '',
  zipCode: '',
  city: '',
  userState: ''
}

export const DEFAULT_VALUE = {
  state: DEFAULT_STATE,
  handleInputChange: () => {},
  goToStep: () => {}
}

export const { Provider, Consumer } = React.createContext<IContext>(DEFAULT_VALUE)
