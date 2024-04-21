import LoginForm from '@/components/Login/LoginForm'
import WelcomeTextBox from '@/components/Login/WelcomeTextBox'
import React from 'react'

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        // backgroundColor: 'red',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div style={{ backgroundColor: '#F8F6FF' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <WelcomeTextBox />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
