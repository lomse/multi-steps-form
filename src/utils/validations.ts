import * as moment from 'moment'
import { ACCEPT_SHIPMENTS, IValidationError, IStepOneFormData, IStepTwoFormData } from '../interfaces/types'

export const validateInitalStep = (acceptShipment: string) => {
  let errors: IValidationError[] = []

  if (acceptShipment === ACCEPT_SHIPMENTS.EMPTY_VALUE) {
    errors = [{ label: 'acceptShipment', message: 'Select an option to proceed.' }]
  }

  return errors
}

export const validateStepOne = ({ name, email, password, confirmPassword }: IStepOneFormData) => {
  const errors: IValidationError[] = []

  if (!name) {
    errors.push({
      label: 'Name',
      message: 'Enter your name'
    })
  }

  if (!email || (email && !validateEmail(email))) {
    errors.push({
      label: 'Email',
      message: 'Enter a valid email'
    })
  }

  if (!password) {
    errors.push({
      label: 'Password',
      message: 'Enter your password'
    })
  }

  if (!confirmPassword) {
    errors.push({
      label: 'ConfirmPassword',
      message: 'Confirm your password'
    })
  }

  if (password && confirmPassword && password !== confirmPassword) {
    errors.push({
      label: 'ConfirmPassword',
      message: 'Password do not match'
    })
  }

  return errors
}

export const validateStepTwo = ({ dob, phone, gender }: IStepTwoFormData) => {
  const errors: IValidationError[] = []

  if (!dob || !moment(dob, 'MM/DD/YYYY',true).isValid()) {
    errors.push({
      label: 'DOB',
      message: 'Enter a valid date of birth'
    })
  }

  if (!phone) {
    errors.push({
      label: 'Phone',
      message: 'Enter your phone number'
    })
  }

  if (!gender) {
    errors.push({
      label: 'Gender',
      message: 'Select your gender'
    })
  }

  return errors
}

export const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const getErrorMessage = (errors: IValidationError[], label: string) => {
  const foundError = errors.find(error => error.label === label)

  if (foundError) {
    return foundError.message
  }

  return null
}
