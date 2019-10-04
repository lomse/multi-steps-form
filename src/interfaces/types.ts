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
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export interface IStepTwoFormData {
  dob?: string
  phone?: string
  gender?: GENDER
}

export interface IStepFourData {
  plan: PLAN_OPTIONS
}

export interface IStepThree {
  address1?: string
  address2?: string
  zipCode?: string
  city?: string
  userState?: string
}

export interface IContainerState extends IStepOneFormData, IStepTwoFormData, IStepThree, IStepFourData {
  errors: IValidationError[]
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

export enum PLAN_OPTIONS {
  EMPTY_VALUE = '',
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly'
}
