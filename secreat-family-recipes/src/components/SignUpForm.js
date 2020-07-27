import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default function SignUpForm({setInCurrentForm}) {
  setInCurrentForm('SignUpForm')
  return (
    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input
          name='firstName'
          
          label='First name'
          placeholder='First name'
        />
        <Form.Input
          label='Last name'
          placeholder='Last name'
        />
        <Form.Input
          label='Username'
          placeholder='Username'
        />w
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          label='Email'
          placeholder='Email'
        />
        <Form.Input
          label='Password'
          placeholder='Password'
        />
      </Form.Group>
      <Form.Checkbox
        label='I agree to the Terms and Conditions'
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}