import DESIGN_TOKEN from '@/styles/token'
import { createTheme } from '@mui/material'
import { Noto_Sans_Thai } from 'next/font/google'

const inter = Noto_Sans_Thai({ subsets: ['thai', 'latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: DESIGN_TOKEN.color.primary,
    },
  },
  typography: {
    fontFamily: `${inter.style.fontFamily}, "Roboto", "Helvetica", "Arial", sans-serif`,
  },
})

export default theme
