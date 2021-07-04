import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`

const Title = styled.h1`
  white-space: pre-line;
`

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`

const RememberMeCheckboxField = styled(Field)`
  margin-top: 10px;
`

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`

const SignInComponent = () => {

  const handleSubmit = (values, actions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        alert(JSON.stringify(values))
      }, 5000)
    })
  }

  const handleValidation = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = "Email can't be empty"
    }
    return errors
  }

  const validatePassword = (value) => {
    if (!value) {
      return "Password can't be empty"
    } else if (value.length < 5) {
      return "Very weak"
    } else if (value.length < 8) {
      return "Weak"
    }
    return undefined
  }

  return (
    <Container>
      <ContentContainer>
        <Title>Formik - Sign In</Title>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '', rememberMe: false }}
          onSubmit={handleSubmit}
          validate={handleValidation}
        >
          {props => (
            <SignUpForm>
              <Label>Email</Label>
              <EmailField name="email" type="email" />

              <ErrorMessage name="email">
                {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <PasswordField name="password" validate={validatePassword} type="password" />

              <ErrorMessage name="password">
                {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Confirm Password</Label>
              <PasswordField name="confirmPassword" validate={validatePassword} type="password" />

              <ErrorMessage name="confirmPassword">
                {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <CheckboxContainer>
                <RememberMeCheckboxField type="checkbox" name="rememberMe" />
                <CheckboxLabel>Remember Me</CheckboxLabel>
              </CheckboxContainer>

              <SubmitButton type="submit" disabled={props.isSubmitting} />
            </SignUpForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  )

}

export default SignInComponent;