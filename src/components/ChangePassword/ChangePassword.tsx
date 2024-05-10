import { Button, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../public/Images/ACSlogo.svg'

const ChangePasswordLayout: React.FC = () => {
  const [formData, setFormData] = useState<{ password: string; confirmPassword: string }>({
    password: '',
    confirmPassword: '',
  })
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match.')
      return
    }

    setPasswordError('')
    setSubmitting(true)
    setTimeout(() => {
      alert('Password changed successfully!')
      setSubmitting(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '0 20px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 600, width: '100%' }}>
          <Image src={Logo} alt="ACS Logo" width={150} height={150} />
          <Typography variant="h1" style={{ margin: '20px 0' }}>
            กรอกรหัสใหม่ของคุณ
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
              maxWidth: 400,
            }}
          >
            <TextField
              fullWidth
              id="password"
              name="password"
              label="รหัสผ่านใหม่"
              variant="outlined"
              color="primary"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={passwordError !== ''}
              helperText={passwordError}
              sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'red',
                },
              }}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="ยืนยันรหัสผ่านใหม่"
              variant="outlined"
              color="primary"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={passwordError !== ''}
              helperText={passwordError}
              sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'red',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{ marginTop: 20, width: '100%' }}
              disabled={submitting}
            >
              {submitting ? 'กำลังเปลี่ยนรหัสผ่าน...' : 'เปลี่ยนรหัสผ่าน'}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePasswordLayout
