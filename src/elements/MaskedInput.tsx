import * as React from 'react'
import InputMask from 'react-input-mask'
import { IMaskedInputField } from '../interfaces/types'

const MaskedInput: React.FC<IMaskedInputField> = props => (
    <div className="form-group">
        {props.labelText && <label>{props.labelText}</label>}
        <InputMask
            type="text"
            mask={props.mask}
            className="form-control"
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            onChange={event=>props.onChange(event)}
        />
    </div>
)

export default MaskedInput
