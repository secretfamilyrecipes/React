import React from 'react'
import { Message } from 'semantic-ui-react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  `
export default function LoginSuccessful() {
    return (
        <Styles>
            <Message
                success
                header='Your user registration was successful'
                content='You may now log-in with the username you have chosen'
            />
        </Styles>
    )
}