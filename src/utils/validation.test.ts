import * as valiation from './validations'
import { ACCEPT_SHIPMENTS, GENDER, PLAN_OPTIONS } from '../interfaces/types'
import * as Constant from './constants'

describe('Form Validation', () => {
  describe('Initial Step', () => {
    it('validates the acceptShipment field', () => {
      const acceptShipment = ACCEPT_SHIPMENTS.EMPTY_VALUE
      const errors = valiation.initalStep(acceptShipment)
      const acceptShipmentError = errors.find(error => error.label === 'AcceptShipment')
      expect(acceptShipmentError.message).toBe(Constant.EMPTY_ACCEPT_SHIPMENT_ERROR_MESSAGE)
    })
  })
  describe('Step One', () => {
    it('validates empty name field', () => {
      const name = ''
      const errors = valiation.stepOne({ name })

      const nameError = errors.find(error => error.label === 'Name')
      expect(nameError.message).toBe(Constant.EMPTY_NAME_ERROR_MESSAGE)
    })
    it('validates empty email field', () => {
      const email = ''
      const errors = valiation.stepOne({ email })

      const nameError = errors.find(error => error.label === 'Email')
      expect(nameError.message).toBe(Constant.INVALID_EMAIL_ERROR_MESSAGE)
    })
    it('validates invalid email field', () => {
      const email = 'test@email'
      const errors = valiation.stepOne({ email })

      const nameError = errors.find(error => error.label === 'Email')
      expect(nameError.message).toBe(Constant.INVALID_EMAIL_ERROR_MESSAGE)
    })
    it('validates empty password field', () => {
      const password = ''
      const errors = valiation.stepOne({ password })

      const nameError = errors.find(error => error.label === 'Password')
      expect(nameError.message).toBe(Constant.EMPTY_PASSWORD_ERROR_MESSAGE)
    })
    it('validates empty confirm password field', () => {
      const confirmPassword = ''
      const errors = valiation.stepOne({ confirmPassword })

      const nameError = errors.find(error => error.label === 'ConfirmPassword')
      expect(nameError.message).toBe(Constant.EMPTY_CONFIRM_ERROR_MESSAGE)
    })
    it('validates password fields no match', () => {
      const confirmPassword = 'password'
      const password = 'pass12345'
      const errors = valiation.stepOne({ confirmPassword, password })

      const nameError = errors.find(error => error.label === 'ConfirmPassword')
      expect(nameError.message).toBe(Constant.PASSWORDS_NOT_MATCH_ERROR_MESSAGE)
    })
    it('validates password fields no match', () => {
      const confirmPassword = 'password'
      const password = 'pass12345'
      const errors = valiation.stepOne({ confirmPassword, password })

      const nameError = errors.find(error => error.label === 'ConfirmPassword')
      expect(nameError.message).toBe(Constant.PASSWORDS_NOT_MATCH_ERROR_MESSAGE)
    })
  })

  describe('Step Two', () => {
    it('validates empty dob field', () => {
      const dob = ''
      const errors = valiation.stepTwo({ dob })

      const nameError = errors.find(error => error.label === 'DOB')
      expect(nameError.message).toBe(Constant.EMPTY_DOB_ERROR_MESSAGE)
    })
    it('validates empty phone field', () => {
      const phone = ''
      const errors = valiation.stepTwo({ phone })

      const nameError = errors.find(error => error.label === 'Phone')
      expect(nameError.message).toBe(Constant.EMPTY_PHONE_ERROR_MESSAGE)
    })
    it('validates empty phone field', () => {
      const gender = GENDER.EMPTY_VALUE
      const errors = valiation.stepTwo({ gender })

      const nameError = errors.find(error => error.label === 'Gender')
      expect(nameError.message).toBe(Constant.EMPTY_GENDER_ERROR_MESSAGE)
    })
  })

  describe('Step Three', () => {
    it('validates empty address1 field', () => {
      const address1 = ''
      const errors = valiation.stepThree({ address1 })

      const nameError = errors.find(error => error.label === 'Address1')
      expect(nameError.message).toBe(Constant.EMPTY_ADDRESS_ERROR_MESSAGE)
    })
    it('validates empty city field', () => {
      const city = ''
      const errors = valiation.stepThree({ city })

      const nameError = errors.find(error => error.label === 'City')
      expect(nameError.message).toBe(Constant.EMPTY_CITY_ERROR_MESSAGE)
    })
    it('validates empty zip code field', () => {
      const zipCode = ''
      const errors = valiation.stepThree({ zipCode })

      const nameError = errors.find(error => error.label === 'ZipCode')
      expect(nameError.message).toBe(Constant.EMPTY_ZIP_CODE_ERROR_MESSAGE)
    })
    it('validates empty state field', () => {
      const userState = ''
      const errors = valiation.stepThree({ userState })

      const nameError = errors.find(error => error.label === 'State')
      expect(nameError.message).toBe(Constant.EMPTY_STATE__ERROR_MESSAGE)
    })
  })
  describe('Step Four', () => {
    it('validates empty plan field', () => {
      const plan = PLAN_OPTIONS.EMPTY_VALUE
      const errors = valiation.stepFour(plan)

      const nameError = errors.find(error => error.label === 'Plan')
      expect(nameError.message).toBe(Constant.EMPTY_PLAN_ERROR_MESSAGE)
    })
  })
})
