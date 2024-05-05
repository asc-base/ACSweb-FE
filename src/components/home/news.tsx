import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import NewsCard from './newsCard'

export default function News() {
  const Title = styled(Typography)`
    && {
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      color: #e8360e;
    }
  `
  return (
    <>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        ข่าวสารและกิจกรรม
      </Typography>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </>
  )
}
