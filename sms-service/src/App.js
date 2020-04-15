import React, {Component} from 'react';
import { Container, Row, Button } from 'reactstrap';
import Form from './Form/Form';
import Result from './Result/Result';
import './App.css';

class App extends Component {
  state = {
    form: {
      uid: "123",
      mobile: "",
      providedId: "",
      createdFrom: "",
      createdTo: "",
      isSent: "",
      isClosed: "",
      isError: "",
      isDelivered: ""
    },
    messages: []
  };

  inputChangeHandler = (event) => {
    const inputName = event.target.name;

    const updatedForm = {
      ...this.state.form
    };

    if (event.target.type === 'checkbox') {
      updatedForm[inputName] = event.target.checked;
    } else {
      updatedForm[inputName] = event.target.value;
    }

    this.setState({form: updatedForm});
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    this.setState({messages: this.mockMessages});
    console.log(this.state);
  }

  resetFormHandler = () => {
    this.setState({form: {
      uid: "",
      mobile: "",
      providedId: "",
      createdFrom: "",
      createdTo: "",
      isSent: "",
      isClosed: "",
      isError: "",
      isDelivered: ""
    }});
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Form 
            form={this.state.form} 
            inputChange={this.inputChangeHandler}
            submit={this.submitFormHandler}
            reset={this.resetFormHandler} />
        </Row>
        <hr></hr>
        <Row>
          <Result 
            messages={this.state.messages} />
        </Row>
      </Container>
    )
  }

  

  mockMessages = [
    {
      id: "asd",
      mobile: "79291111111",
      text: "Уважаемый клиент, Ваш заказ PN_Test PHILIPP PLEIN передан на доставку курьеру DHL, доставка в течение дня. Накладная DHL: 1827934286",
      createDate: "2020-04-15",
      appName: "PhillipPlein",
      providedId: "1111111",
      isSent: true,
      isClosed: true,
      isError: false,
      isDelivered: true
    }, 
    {
      id: "asd1",
      mobile: "79292222222",
      text: "Уважаемый клиент, Ваш заказ PN_Test PHILIPP PLEIN передан на доставку курьеру DHL, доставка в течение дня. Накладная DHL: 1827934286",
      createDate: "2020-04-14",
      appName: "PhillipPlein",
      providedId: "222222",
      isSent: false,
      isClosed: false,
      isError: false,
      isDelivered: false
    }, 
    {
      id: "asd2",
      mobile: "79293333333",
      text: "Уважаемый клиент, Ваш заказ PN_Test PHILIPP PLEIN передан на доставку курьеру DHL, доставка в течение дня. Накладная DHL: 1827934286",
      createDate: "2020-04-13",
      appName: "PhillipPlein",
      providedId: "333333",
      isSent: true,
      isClosed: true,
      isError: true,
      isDelivered: false
    }
  ]
}

export default App;
