import { Typography } from '@mui/material'
import { ReactElement } from 'react'
import NewsCard from './newsCard'

export default function Activities(): ReactElement {
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
