export enum STEPS {
  INITIAL_PAGE = 'INITIAL_PAGE',
  STEP_ONE = 'STEP_ONE',
  STEP_TWO = 'STEP_TWO'
}

export enum ACCEPT_SHIPMENTS {
  YES = 'Yes',
  NO = 'No',
  EMPTY_VALUE = ''
}

export type HandleInputChangeFunc = (
  event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
) => void

export type GoToStepFunc = (selectedStep: STEPS) => void

export interface IContext {
  state: IContainerState
  handleInputChange: HandleInputChangeFunc
  goToStep: GoToStepFunc
}

export interface IContainerState {
  errors: Array<{ label: string; message: string }>
  acceptShipment: ACCEPT_SHIPMENTS
  selectedStep: STEPS
}
