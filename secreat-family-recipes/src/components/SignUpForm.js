import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default function SignUpForm({ changeInCurrentForm, signUpErrorMessages, signUpFormValues, handleChange, onSubmit }) {
  changeInCurrentForm('SignUpForm')
  return (
    <Form onSubmit={onSubmit} error>
      <Form.Group unstackable widths={2}>
        <Form.Input
          name='firstName'
          value={signUpFormValues.firstName}
          onChange={handleChange}
          label='First name'
          placeholder='First name'
        />
        <Form.Input
          name='lastName'
          value={signUpFormValues.lastName}
          onChange={handleChange}
          label='Last name'
          placeholder='Last name'
        />
        <Form.Input
          name='username'
          value={signUpFormValues.username}
          onChange={handleChange}
          label='Username'
          placeholder='Username'
        />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input
          name='email'
          value={signUpFormValues.email}
          onChange={handleChange}
          label='Email'
          placeholder='Email'
        />
        <Form.Input
          name='password'
          value={signUpFormValues.password}
          onChange={handleChange}
          label='Password'
          placeholder='Password'
        />
      </Form.Group>
      <Form.Checkbox
        value={signUpFormValues.termAndConditions}
        onChange={handleChange}
        label='I agree to the Terms and Conditions'
        name='termAndConditions'
      />
      
      <Button type='submit'>Submit</Button>
    </Form>
  )
}