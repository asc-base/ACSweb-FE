import { Typography } from '@mui/material'
import NewsCard from './newsCard'

export default function News() {
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
