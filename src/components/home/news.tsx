import { Typography } from '@mui/material'
import { ReactElement } from 'react'
import NewsCard from './newsCard'

export default function News(): ReactElement {
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
