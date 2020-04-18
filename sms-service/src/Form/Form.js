import React from "react";
import { Row, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

import RadioButtons from './../common/RadioButtons';
import CustomInput from './../common/CustomInput';

const form = (props) => {
  const formStyle = {
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px"
  }

  return (
    <Form style={formStyle} onSubmit={props.submit}>
      <Row form>
        <Col md={4}>
          <CustomInput label="Uid" type="text" name="uid" value={props.form.uid} onChange={props.controlChange} />
        </Col>
        <Col md={4}>
          <CustomInput label="Mobile" type="text" name="mobile" value={props.form.mobile} onChange={props.controlChange} placeholder="71111111111" />
        </Col>
        <Col md={4}>
          <CustomInput label="ProvidedId" type="text" name="providedId" value={props.form.providedId} onChange={props.controlChange} />
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <CustomInput label="Created from" type="date" name="createdFrom" value={props.form.createdFrom} onChange={props.controlChange} />
        </Col>
        <Col md={6}>
          <CustomInput label="Created to" type="date" name="createdTo" value={props.form.createdTo} onChange={props.controlChange} />
        </Col>
      </Row>

      <Row form style={{justifyContent: "center"}}>
        <RadioButtons name="isSent" buttonClicked={props.controlChange} currentValue={props.form.isSent} />
        <RadioButtons name="isClosed" buttonClicked={props.controlChange} currentValue={props.form.isClosed} />
        <RadioButtons name="isError" buttonClicked={props.controlChange} currentValue={props.form.isError} />
        <RadioButtons name="isDelivered" buttonClicked={props.controlChange} currentValue={props.form.isDelivered} />
      </Row>

      <Row form style={{justifyContent: "center", marginTop: "20px"}}>
        <Button type="submit" color="primary" style={{marginRight: "20px"}}>Search</Button>
        <Button type="button" color="secondary" onClick={props.reset}>Reset</Button>
      </Row>
    </Form>
  );
}

export default form;