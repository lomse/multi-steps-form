import * as moment from 'moment'
import {
  ACCEPT_SHIPMENTS,
  IValidationError,
  IStepOneFormData,
  IStepTwoFormData,
  PLAN_OPTIONS,
  IStepThree
} from '../interfaces/types'

export const initalStep = (acceptShipment: string) => {
  let errors: IValidationError[] = []

  if (acceptShipment === ACCEPT_SHIPMENTS.EMPTY_VALUE) {
    errors = [{ label: 'AcceptShipment', message: 'Select an option to proceed.' }]
  }

  return errors
}

export const stepOne = ({ name, email, password, confirmPassword }: IStepOneFormData) => {
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

export const stepTwo = ({ dob, phone, gender }: IStepTwoFormData) => {
  const errors: IValidationError[] = []

  if (!dob || !moment(dob, 'MM/DD/YYYY', true).isValid()) {
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

export const stepThree = ({ address1, city, zipCode, userState }: IStepThree) => {
  const errors: IValidationError[] = []

  if (!address1) {
    errors.push({
      label: 'Address1',
      message: 'Enter your address'
    })
  }

  if (!city) {
    errors.push({
      label: 'City',
      message: 'Enter your city'
    })
  }

  if (!zipCode) {
    errors.push({
      label: 'ZipCode',
      message: 'Enter your zip code'
    })
  }

  if (!userState) {
    errors.push({
      label: 'State',
      message: 'Enter your state'
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

export const stepFour = (plan: PLAN_OPTIONS) => {
  const errors: IValidationError[] = []
  if (plan === PLAN_OPTIONS.EMPTY_VALUE) {
    errors.push({
      label: 'Plan',
      message: 'Select a plan to subscribe'
    })
  }

  return errors
}
