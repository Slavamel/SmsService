import React from "react";
import { FormGroup, Label, Button, ButtonGroup } from 'reactstrap';

const radioButtons = (props) => {
  const { name, buttonClicked, currentValue } = props;

  const statefullButtonStyle = {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    marginRight: "15px"
  }

  return (
    <FormGroup inline style={statefullButtonStyle}>
      <Label style={{marginBottom: "0"}}>{name}</Label>
      <ButtonGroup>
        <Button
          outline 
          type="button" 
          color="warning" 
          size="sm" 
          name={name}
          value="0"
          onClick={buttonClicked}
          active={currentValue === "0"}>0</Button>
        <Button 
          outline
          type="button" 
          color="secondary" 
          size="sm" 
          name={name}
          onClick={buttonClicked}
          active={!currentValue}>-</Button>
        <Button 
          outline
          type="button" 
          color="success" 
          size="sm"
          name={name}
          value="1"
          onClick={buttonClicked}
          active={currentValue === "1"}>1</Button>
      </ButtonGroup>
    </FormGroup>
  )
}

export default radioButtons;