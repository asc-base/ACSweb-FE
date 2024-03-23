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
    <div>
      <Title>ข่าวสารและกิจกรรม</Title>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
}
