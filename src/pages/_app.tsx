import MainLayout from '@/components/Layout'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
