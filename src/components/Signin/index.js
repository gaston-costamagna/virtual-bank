import React from 'react';
import { 
  Form, 
  FormButtom, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel,
  Container,
  FormWrap,
  Icon,
  Text, 
} from './SigninElements';

const Signin = () => {
  return (
  <>
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Registrate y crea tu cuenta</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButtom type='submit'>Continuar</FormButtom>
            <Text>Recupera tu contraseña</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  </>
  )
}

export default Signin