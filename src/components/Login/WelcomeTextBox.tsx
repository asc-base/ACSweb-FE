import { Colour } from '@/constants/theme'
import { Typography } from '@mui/material'
import React from 'react'

interface Props {}

const WelcomeTextBox: React.FC<Props> = () => {
  return (
    <Typography>
      <div
        style={{
          marginBottom: '20px',
          fontSize: '36px',
          fontWeight: '700',
          color: Colour.Primary03,
        }}
      >
        Welcome Back!
      </div>
      <div
        style={{
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: '400',
          color: Colour.Primary03,
        }}
      >
        สวัสดีนักศึกษาสาขาวิทยาการคอมพิวเตอร์ประยุกต์
      </div>
    </Typography>
  )
}

export default WelcomeTextBox
