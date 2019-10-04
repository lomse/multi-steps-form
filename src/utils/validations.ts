import * as moment from 'moment'
import {
  ACCEPT_SHIPMENTS,
  IValidationError,
  IStepOneFormData,
  IStepTwoFormData,
  PLAN_OPTIONS,
  IStepThree
} from '../interfaces/types'
import * as Constants from './constants'

export const initalStep = (acceptShipment: string) => {
  let errors: IValidationError[] = []

  if (acceptShipment === ACCEPT_SHIPMENTS.EMPTY_VALUE) {
    errors = [{ label: 'AcceptShipment', message: Constants.EMPTY_ACCEPT_SHIPMENT_ERROR_MESSAGE }]
  }

  return errors
}

export const stepOne = ({ name, email, password, confirmPassword }: IStepOneFormData) => {
  const errors: IValidationError[] = []

  if (!name) {
    errors.push({
      label: 'Name',
      message: Constants.EMPTY_NAME_ERROR_MESSAGE
    })
  }

  if (!email || (email && !validateEmail(email))) {
    errors.push({
      label: 'Email',
      message: Constants.INVALID_EMAIL_ERROR_MESSAGE
    })
  }

  if (!password) {
    errors.push({
      label: 'Password',
      message: Constants.EMPTY_PASSWORD_ERROR_MESSAGE
    })
  }

  if (!confirmPassword) {
    errors.push({
      label: 'ConfirmPassword',
      message: Constants.EMPTY_CONFIRM_ERROR_MESSAGE
    })
  }

  if (password && confirmPassword && password !== confirmPassword) {
    errors.push({
      label: 'ConfirmPassword',
      message: Constants.PASSWORDS_NOT_MATCH_ERROR_MESSAGE
    })
  }

  return errors
}

export const stepTwo = ({ dob, phone, gender }: IStepTwoFormData) => {
  const errors: IValidationError[] = []

  if (!dob || !moment(dob, 'MM/DD/YYYY', true).isValid()) {
    errors.push({
      label: 'DOB',
      message: Constants.EMPTY_DOB_ERROR_MESSAGE
    })
  }

  if (!phone) {
    errors.push({
      label: 'Phone',
      message: Constants.EMPTY_PHONE_ERROR_MESSAGE
    })
  }

  if (!gender) {
    errors.push({
      label: 'Gender',
      message: Constants.EMPTY_GENDER_ERROR_MESSAGE
    })
  }

  return errors
}

export const stepThree = ({ address1, city, zipCode, userState }: IStepThree) => {
  const errors: IValidationError[] = []

  if (!address1) {
    errors.push({
      label: 'Address1',
      message: Constants.EMPTY_ADDRESS_ERROR_MESSAGE
    })
  }

  if (!city) {
    errors.push({
      label: 'City',
      message: Constants.EMPTY_CITY_ERROR_MESSAGE
    })
  }

  if (!zipCode) {
    errors.push({
      label: 'ZipCode',
      message: Constants.EMPTY_ZIP_CODE_ERROR_MESSAGE
    })
  }

  if (!userState) {
    errors.push({
      label: 'State',
      message: Constants.EMPTY_STATE__ERROR_MESSAGE
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
      message: Constants.EMPTY_PLAN_ERROR_MESSAGE
    })
  }

  return errors
}
