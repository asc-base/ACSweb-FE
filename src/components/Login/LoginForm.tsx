import { NUMBER_REGEX } from '@/constants/regex'
import { Colour } from '@/constants/theme'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const [inputValues, setInputValues] = React.useState({
    id: '',
    password: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValues)
  }

  return (
    <form onSubmit={handleSubmit} style={{ flex: 1, width: '520px', fontFamily: 'Noto Sans Thai' }}>
      <TextField
        id="id"
        name="id"
        label="รหัสนักศึกษา"
        variant="outlined"
        inputProps={{
          maxLength: 11,
          pattern: '[0-9]*',
          title: 'รหัสนักศึกษาต้องเป็นตัวเลขเท่านั้น',
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: Colour.Primary03,
          },
          '& .MuiInputLabel-root': {
            color: inputValues.id ? Colour.Primary03 : Colour.Neutral03,
            fontSize: '18px',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: Colour.Primary03,
            fontSize: '18px',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: Colour.Primary03,
            fontSize: '18px',
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: inputValues.id ? Colour.Primary03 : Colour.Neutral03,
            fontSize: '18px',
          },
          width: '100%',
          fontSize: '24px',
          height: '95px',
        }}
        value={inputValues.id}
        onChange={handleInputChange}
        error={!NUMBER_REGEX.test(inputValues.id) && inputValues.id.length > 0}
        helperText={
          !NUMBER_REGEX.test(inputValues.id) && inputValues.id.length > 0
            ? 'รหัสนักศึกษาต้องเป็นตัวเลข 11 หลักเท่านั้น'
            : ''
        }
      />
      <TextField
        id="password"
        name="password"
        label="รหัสผ่าน"
        variant="outlined"
        type="password"
        sx={{
          '& .MuiOutlinedInput-root': {
            color: Colour.Primary03,
          },
          '& .MuiInputLabel-root': {
            fontSize: '18px',
            color: inputValues.password ? Colour.Primary03 : Colour.Neutral03,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            fontSize: '18px',
            color: Colour.Primary03,
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            fontSize: '18px',
            borderColor: Colour.Primary03,
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            fontSize: '18px',
            borderColor: inputValues.password ? Colour.Primary03 : Colour.Neutral03,
          },
          width: '100%',
          fontSize: '24px',
          height: '65px',
        }}
        value={inputValues.password}
        onChange={handleInputChange}
      />
      <Typography style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <a style={{ color: '#49454F', fontSize: '12px' }}>ลืมรหัสผ่าน?</a>
      </Typography>
      <Button
        type="submit"
        variant="contained"
        sx={{
          fontSize: '15px',
          fontWeight: 700,
          height: '55px',
          backgroundColor:
            inputValues.id && inputValues.password ? Colour.Primary02 : Colour.Primary02,
          color: inputValues.id && inputValues.password ? Colour.Neutral01 : Colour.Neutral01,
          width: '100%',
          '&:hover': {
            backgroundColor:
              inputValues.id && inputValues.password ? Colour.Primary02 : Colour.Neutral03,
          },
        }}
      >
        <Typography>เข้าสู่ระบบ</Typography>
      </Button>
      <Typography style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <a style={{ color: Colour.Primary05 }}>
          ยังไม่เป็นสมาชิก?&nbsp;
          <a style={{ textDecorationLine: 'underline' }}>ลงทะเบียน</a>
        </a>
      </Typography>
    </form>
  )
}

export default LoginForm
