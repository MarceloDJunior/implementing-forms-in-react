import { useField } from 'formik'
import styled from 'styled-components'

const Button = ({ children, isSelected, ...props }) => {
  const backgroundColor = isSelected ? 'yellow' : 'white'
  return (
    <button style={{ backgroundColor }} type="button" {...props}>
      {children}
    </button>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 24px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`

const RatingButton = styled(Button)`
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

const ErrorMessage = styled.div`
  font-size: 25px;
  color: red;
`

const RatingField = ({ label, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(props.name)

  const { value } = meta
  const { setValue } = helpers

  return (
    <Container className={props.className}>
      <Label htmlFor={props.id || props.name}>{label}</Label>

      <RatingContainer name={props.name}>
        <RatingButton onClick={() => setValue(1)} isSelected={value === 1}> 1 </RatingButton>
        <RatingButton onClick={() => setValue(2)} isSelected={value === 2}> 2 </RatingButton>
        <RatingButton onClick={() => setValue(3)} isSelected={value === 3}> 3 </RatingButton>
        <RatingButton onClick={() => setValue(4)} isSelected={value === 4}> 4 </RatingButton>
        <RatingButton onClick={() => setValue(5)} isSelected={value === 5}> 5 </RatingButton>
      </RatingContainer>

      {meta.touched && meta.error && (
        <ErrorMessage>{meta.error}</ErrorMessage>
      )}
    </Container>
  )
}

export default RatingField;