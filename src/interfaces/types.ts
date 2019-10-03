export enum STEPS {
  INITIAL_PAGE = 'INITIAL_PAGE',
  STEP_ONE = 'STEP_ONE',
  STEP_TWO = 'STEP_TWO',
  STEP_THREE = 'STEP_THREE',
  STEP_FOUR = 'STEP_FOUR'
}

export enum ACCEPT_SHIPMENTS {
  YES = 'Yes',
  NO = 'No',
  EMPTY_VALUE = ''
}

type HandleInputChangeFunc = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void

type GoToStepFunc = (selectedStep: STEPS, currentStep: STEPS) => void

export interface IContext {
  state: IContainerState
  handleInputChange: HandleInputChangeFunc
  goToStep: GoToStepFunc
}

export enum GENDER {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
  EMPTY_VALUE = ''
}

export interface IStepOneFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface IStepTwoFormData {
  dob: string
  phone: string
  gender: GENDER
}

export interface IContainerState extends IStepOneFormData, IStepTwoFormData {
  errors: Array<{ label: string; message: string }>
  acceptShipment: ACCEPT_SHIPMENTS
  selectedStep: STEPS
}

export interface IValidationError {
  label: string
  message: string
}

export interface IMaskedInputField {
  name: string
  labelText?: string
  mask: string
  value: string
  placeholder: string
  onChange: HandleInputChangeFunc
}

export type MaskedInputFieldDefaultProps = Pick<IMaskedInputField, 'name' | 'placeholder'>
