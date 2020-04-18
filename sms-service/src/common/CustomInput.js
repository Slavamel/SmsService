import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';

const customInput = (props) => {
  const {label, name, value, onChange, type, placeholder } = props

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} value={value || ""} onChange={onChange} />
    </FormGroup>
  )
}

export default customInput;