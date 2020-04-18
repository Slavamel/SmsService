import React, {Component} from 'react';
import { Container, Row, Spinner } from 'reactstrap';
import axios from 'axios';

import Form from './Form/Form';
import Result from './Result/Result';
import CustomPagination from './common/CustomPagination';
import './App.css';

class App extends Component {
  state = {
    form: {
      uid: null,
      mobile: null,
      providedId: null,
      createdFrom: null,
      createdTo: null,
      isSent: null,
      isClosed: null,
      isError: null,
      isDelivered: null
    },
    messages: [],
    pagination: {
      pages: 0,
      currentPage: 1
    },
    isLoading: false
  };

  controlChangeHandler = (event) => {
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
    this.getMessages();
  }

  getMessages = (currentPage = null) => {
    this.setState( { isLoading: true } );
    axios.get("http://localhost:4000/getMessages", this.getQueryParams(currentPage))
      .then(response => {
        this.setState({
          messages: response.data.messages.map(m => {
            const createDate = new Date(m.createDate);
            return {...m, createDate: `${createDate.toLocaleDateString()} ${createDate.toLocaleTimeString()}`}
          }),
          pagination: {
            currentPage: response.data.currentPage,
            pages: response.data.pages
          },
          isLoading: false
        });
      })
      .catch(err => alert(err.response.data))
      .finally(() => {
        this.setState( { isLoading: false } );
      });
  }

  getQueryParams = (currentPage) => {
    const params = {
      params: {
        page: currentPage || this.state.pagination.currentPage,
        uid: this.state.form.uid,
        mobile: this.state.form.mobile,
        providedId: this.state.form.providedId,
        createdFrom: this.state.form.createdFrom,
        createdTo: this.state.form.createdTo,
        isSent: this.state.form.isSent,
        isClosed: this.state.form.isClosed,
        isError: this.state.form.isError,
        isDelivered: this.state.form.isDelivered
      }
    };
    return params;
  }

  resetFormHandler = () => {
    this.setState({
      form: {
        uid: null,
        mobile: null,
        providedId: null,
        createdFrom: null,
        createdTo: null,
        isSent: null,
        isClosed: null,
        isError: null,
        isDelivered: null
      },
      messages: [],
      pagination: {
        pages: 0,
        currentPage: 1
      }
    });
  }

  onPageClickHandler = (index) => {
    this.getMessages(index);
  }

  onNextPageClickHandler = () => {
    this.getMessages(this.state.pagination.currentPage + 1);
  }

  onPreviousPageClickHandler = () => {
    this.getMessages(this.state.pagination.currentPage - 1);
  }

  onFirstPageClickHandler = () => {
    this.getMessages(1);
  }

  onLastPageClickHandler = () => {
    this.getMessages(this.state.pagination.pages);
  }

  statefulButtonClickedHandler = (buttonName, value) => {
    const updatedForm = {
      ...this.state.form
    };

    updatedForm[buttonName] = value;

    this.setState({form: updatedForm});
  }
  
  render() {
    return (
      <Container>
        <Row style={{justifyContent: "center"}}><h1>SmsService</h1></Row>
        <Row>
          <Form 
            form={this.state.form} 
            controlChange={this.controlChangeHandler}
            submit={this.submitFormHandler}
            reset={this.resetFormHandler} />
        </Row>
        <Row>
          {
            this.state.isLoading ?
              (<div style={{margin: "auto"}}>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="dark" />
              </div>) :
              <Result messages={this.state.messages} />
          }
        </Row>
        <Row style={{justifyContent: "center"}}>
          <CustomPagination 
            pages={this.state.pagination.pages} 
            currentPage={this.state.pagination.currentPage}
            onPageClick={this.onPageClickHandler}
            onFirstPageClick={this.onFirstPageClickHandler}
            onLastPageClick={this.onLastPageClickHandler}
            onNextPageClick={this.onNextPageClickHandler}
            onPreviousPageClick={this.onPreviousPageClickHandler} />
        </Row>
      </Container>
    )
  }
}

export default App;
