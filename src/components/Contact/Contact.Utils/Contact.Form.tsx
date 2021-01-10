import React, { Component, ChangeEvent, SyntheticEvent } from 'react';
import { navigate } from 'gatsby';
import emailjs from 'emailjs-com';
import View from './Contact.Form.View';

class Form extends Component {
  state = {
    formName: '',
    formSurname: '',
    formEmail: '',
    formPhone: '',
    inputPrivatePolicy: false,
    inputRODO: false,
    showFalseAgreements: false,
    showFalseName: false,
    showFalseEmail: false,
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state: any = {};
    state[`${e.target.id}`] = e.target.value;
    this.setState(state);
  };

  handleCheckboxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state: any = {};
    state[`${e.target.id}`] = e.target.checked;
    this.setState(state);
  };

  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.useEmailJS();
  };

  useEmailJS = () => {
    const formStatus = this.verifyFormInput();
    if (!formStatus) return;

    const service_ID = 'gmail';
    const template_ID = 'commision_refund';
    const user_ID = 'user_n0WHjyWmnMLuPLadBWMaO';
    const templateParams = this.setEmailTemplate();

    emailjs.send(service_ID, template_ID, templateParams, user_ID).then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
        navigate('confirmation');
      },
      err => {
        console.log('FAILED...', err);
      },
    );
  };

  verifyFormInput = () => {
    const { formName, formEmail, inputPrivatePolicy, inputRODO } = this.state;

    let status = true;

    formName && formEmail && inputPrivatePolicy && inputRODO ? (status = true) : (status = false);

    formName ? this.setState({ showFalseName: false }) : this.setState({ showFalseName: true });

    formEmail ? this.setState({ showFalseEmail: false }) : this.setState({ showFalseEmail: true });

    inputPrivatePolicy && inputRODO
      ? this.setState({ showFalseAgreements: false })
      : this.setState({ showFalseAgreements: true });

    return status;
  };

  setEmailTemplate = () => {
    const { formName, formSurname, formEmail, formPhone } = this.state;

    const message = `Dane kontatowe: ${formName} ${formSurname}. Numer telefonu: ${formPhone}. Adres e-mail: ${formEmail}`;

    return {
      from_name: formEmail,
      to_name: 'ja.tanski@gmail.com',
      subject: 'Nowy kontakt',
      message_html: message,
    };
  };

  resetForm = () => this.setState({});

  render() {
    return (
      <View
        showFalseName={this.state.showFalseName}
        showFalseEmail={this.state.showFalseEmail}
        showFalseAgreements={this.state.showFalseAgreements}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        handleCheckboxInputChange={this.handleCheckboxInputChange}
      />
    );
  }
}

export default Form;
