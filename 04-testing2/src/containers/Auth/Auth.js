import React, {Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

// скоммуниздил со stackoverflow
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {
  
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Input correct email',
        valid: false,
        touched: false,
        validation: {
          required: true, 
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Input correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {
  }

  registerHandler = () => {
  }

  // Вырубить поведение формы по умолчнию
  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    // проверка не требуется, вывалиться с true
    if (!validation) {
      return true
    }

    let isValid = true

    // обязательное значение
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    // проверка на почтовый синтаксис
    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    // проверка требований к паролю
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    // debug
    // console.log(`${controlName}: `, event.target.value)
    
    // особая уличная магия создания копии объекта с помощью оператора spread
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    // Такая мера предохранения, защитить себя от непреднамеренного изменения state
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    // debug
    // console.log(control.valid)
    
    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, 
      isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return(
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}> 
            {this.renderInputs()}
            
            {/* <Input label="Email"/>
            <Input 
              label="password"
              errorMessage={'Halt! Something going wrong...'}
            /> */}

            <Button 
              type="success" 
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Login
            </Button>
            <Button 
              type="primary" 
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    )
  }
}