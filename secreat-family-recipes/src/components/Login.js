import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

export default function Login({ loginFormValues, handleChange, onSubmit }) {
 

  return (
    <Segment placeholder>
      <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
          <Form onSubmit={onSubmit}>
            <Form.Input
              name='username'
              value={loginFormValues.username}
              onChange={handleChange}
              icon='user'
              iconPosition='left'
              label='Username'
              placeholder='Username'
            />
            <Form.Input
              name='password'
              value={loginFormValues.password}
              onChange={handleChange}
              icon='lock'
              iconPosition='left'
              label='Password'
              type='password'
            />

            <Button content='Login' primary />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Button content='Sign up' icon='signup' size='big' />
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  )
}

