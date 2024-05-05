import { Typography } from '@mui/material'
import NewsCard from './newsCard'
export default function Activities() {
  return (
    <div>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        งานกิจกรรมนักศึกษา
      </Typography>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  )
}