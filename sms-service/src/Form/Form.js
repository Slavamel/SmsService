import React from "react";
import { CustomInput, Row, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const form = (props) => {
  const style = {
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px"
  }

  return (
    <Form style={style} onSubmit={props.submit}>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Uid">Uid</Label>
            <Input type="text" name="uid" id="Uid" value={props.form.uid} onChange={props.inputChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="mobile">Mobile</Label>
            <Input type="text" name="mobile" id="mobile" placeholder="71111111111" value={props.form.mobile} onChange={props.inputChange} />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="providedId">ProvidedId</Label>
            <Input type="text" name="providedId" id="providedId" value={props.form.providedId} onChange={props.inputChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="createdFrom">Created from</Label>
            <Input type="date" name="createdFrom" id="createdFrom" value={props.form.createdFrom} onChange={props.inputChange} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="createdTo">Created to</Label>
            <Input type="date" name="createdTo" id="createdTo" value={props.form.createdTo} onChange={props.inputChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form style={{justifyContent: "center"}}>
        <FormGroup check inline>
          <CustomInput type="checkbox" id="isSent" name="isSent" label="isSent" checked={props.form.isSent} onChange={props.inputChange} />
        </FormGroup>
        <FormGroup check inline>
          <CustomInput type="checkbox" id="isClosed" name="isClosed" label="isClosed" checked={props.form.isClosed} onChange={props.inputChange} />
        </FormGroup>
        <FormGroup check inline>
          <CustomInput type="checkbox" id="isError" name="isError" label="isError" checked={props.form.isError} onChange={props.inputChange} />
        </FormGroup>
        <FormGroup check inline>
          <CustomInput type="checkbox" id="isDelivered" name="isDelivered" label="isDelivered" checked={props.form.isDelivered} onChange={props.inputChange} />
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