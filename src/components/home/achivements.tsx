import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import NewsCard from './newsCard'

export default function Achivements(): ReactElement {
  const Container = styled('div')`
    && {
      padding-bottom: 20px;`

  return (
    <div>
      <Container>
        <Typography variant="h2" color="secondary" fontWeight="bold" sx={{ paddingBottom: '20px' }}>
          ความสำเร็จสาขาวิชา
        </Typography>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Container>
    </div>
  )
}
