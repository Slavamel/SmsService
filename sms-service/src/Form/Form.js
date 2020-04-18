import React from "react";
import { Row, Form, FormGroup, Label, Col, Input, Button, ButtonGroup } from 'reactstrap';

const form = (props) => {
  const formStyle = {
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px"
  }

  const statefullButtonStyle = {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    marginRight: "15px"
  }

  return (
    <Form style={formStyle} onSubmit={props.submit}>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Uid">Uid</Label>
            <Input type="text" name="uid" id="Uid" value={props.form.uid || ""} onChange={props.controlChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="mobile">Mobile</Label>
            <Input type="text" name="mobile" id="mobile" placeholder="71111111111" value={props.form.mobile || ""} onChange={props.controlChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="providedId">ProvidedId</Label>
            <Input type="text" name="providedId" id="providedId" value={props.form.providedId || ""} onChange={props.controlChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="createdFrom">Created from</Label>
            <Input type="date" name="createdFrom" id="createdFrom" value={props.form.createdFrom || ""} onChange={props.controlChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="createdTo">Created to</Label>
            <Input type="date" name="createdTo" id="createdTo" value={props.form.createdTo || ""} onChange={props.controlChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form style={{justifyContent: "center"}}>
        <FormGroup inline style={statefullButtonStyle}>
          <Label style={{marginBottom: "0"}}>isSent</Label>
          <ButtonGroup>
            <Button
              outline 
              type="button" 
              color="warning" 
              size="sm" 
              name="isSent"
              value="0"
              onClick={props.controlChange}
              active={props.form.isSent === "0"}>0</Button>
            <Button 
              outline
              type="button" 
              color="secondary" 
              size="sm" 
              name="isSent"
              onClick={props.controlChange}
              active={!props.form.isSent}>-</Button>
            <Button 
              outline
              type="button" 
              color="success" 
              size="sm"
              name="isSent"
              value="1"
              onClick={props.controlChange}
              active={props.form.isSent === "1"}>1</Button>
          </ButtonGroup>
        </FormGroup>
        
        <FormGroup inline style={statefullButtonStyle}>
          <Label style={{marginBottom: "0"}}>isClosed</Label>
          <ButtonGroup>
            <Button 
              outline 
              type="button" 
              color="warning" 
              size="sm"
              name="isClosed" 
              value="0"
              onClick={props.controlChange}
              active={props.form.isClosed === "0"}>0</Button>
            <Button 
              outline 
              type="button" 
              color="secondary" 
              size="sm"
              name="isClosed" 
              onClick={props.controlChange}
              active={!props.form.isClosed}>-</Button>
            <Button 
              outline 
              type="button" 
              color="success" 
              size="sm"
              name="isClosed" 
              value="1" 
              onClick={props.controlChange}
              active={props.form.isClosed === "1"}>1</Button>
          </ButtonGroup>
        </FormGroup>

        <FormGroup inline style={statefullButtonStyle}>
          <Label style={{marginBottom: "0"}}>isError</Label>
          <ButtonGroup>
            <Button 
              outline 
              type="button" 
              color="warning" 
              size="sm"
              name="isError" 
              value="0" 
              onClick={props.controlChange}
              active={props.form.isError === "0"}>0</Button>
            <Button 
              outline 
              type="button" 
              color="secondary" 
              size="sm"
              name="isError" 
              onClick={props.controlChange}
              active={!props.form.isError}>-</Button>
            <Button 
              outline 
              type="button" 
              color="success" 
              size="sm"
              name="isError" 
              value="1" 
              onClick={props.controlChange}
              active={props.form.isError === "1"}>1</Button>
          </ButtonGroup>
        </FormGroup>

        <FormGroup inline style={{...statefullButtonStyle, marginRight: "0"}}>
          <Label style={{marginBottom: "0"}}>isDelivered</Label>
          <ButtonGroup>
            <Button 
              outline 
              type="button" 
              color="warning" 
              size="sm"
              name="isDelivered" 
              value="0" 
              onClick={props.controlChange}
              active={props.form.isDelivered === "0"}>0</Button>
            <Button 
              outline 
              type="button" 
              color="secondary" 
              size="sm" 
              name="isDelivered" 
              onClick={props.controlChange}
              active={!props.form.isDelivered}>-</Button>
            <Button 
              outline 
              type="button" 
              color="success" 
              size="sm"
              name="isDelivered" 
              value="1"  
              onClick={props.controlChange}
              active={props.form.isDelivered === "1"}>1</Button>
          </ButtonGroup>
        </FormGroup>
      </Row>

      <Row form style={{justifyContent: "center", marginTop: "20px"}}>
        <Button type="submit" color="primary" style={{marginRight: "20px"}}>Search</Button>
        <Button type="button" color="secondary" onClick={props.reset}>Reset</Button>
      </Row>
    </Form>
  );
}

export default form;