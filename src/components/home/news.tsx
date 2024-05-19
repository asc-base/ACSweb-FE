import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import NewsCard from './newsCard'

export default function News(): ReactElement {
  const Container = styled('div')`
    && {
      padding-bottom: 20px;
    }
  `
  return (
    <>
      <Container>
        <Typography variant="h2" color="secondary" fontWeight="bold" sx={{ paddingBottom: '20px' }}>
          ข่าวสารและกิจกรรม
        </Typography>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Container>
    </>
  )
}
