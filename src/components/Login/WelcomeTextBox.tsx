import { theme } from '@/constants/theme'
import React from 'react'

interface Props {}

const WelcomeTextBox: React.FC<Props> = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: '20px',
          fontSize: '36px',
          fontWeight: '700',
          color: theme.Primary03,
        }}
      >
        Welcome Back!
      </div>
      <div
        style={{
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: '400',
          color: theme.Primary03,
        }}
      >
        สวัสดีนักศึกษาสาขาวิทยาการคอมพิวเตอร์ประยุกต์
      </div>
    </div>
  )
}

export default WelcomeTextBox
