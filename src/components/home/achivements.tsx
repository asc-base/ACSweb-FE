import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import NewsCard from './newsCard'

export default function Achivements() {
  const Container = styled('div')``

  return (
    <div>
      <Container>
        <Typography variant="h2" color="secondary" fontWeight="bold">
          ความสำเร็จสาขาวิชา
        </Typography>
      </Container>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
}
