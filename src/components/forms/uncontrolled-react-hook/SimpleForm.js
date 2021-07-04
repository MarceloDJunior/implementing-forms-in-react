import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styled from 'styled-components'

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`

const Title = styled.h1`
  white-space: pre-line;
`

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`

const NameFieldInput = styled.input`
  height: 40px;
  font-size: 24px;
`

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
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

const schema = yup.object().shape({
  name: yup.string().required("Name is required")
})

export default function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <Container>
      <ContentContainer>
        <Title>Uncontrolled Form React Hook Form - Simple Form</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Label>Name</Label>
          <NameFieldInput {...register("name")} />

          {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}

          <SubmitButton type="submit" />
        </Form>
      </ContentContainer>
    </Container>
  )
}