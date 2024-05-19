import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import EventsCard from './eventsCard'

export default function ComingEvents(): ReactElement {
  const Container = styled('div')`
    && {
      padding-bottom: 20px;`
  return (
    <>
      <Container>
        <Typography variant="h1" color="secondary" fontWeight="bold" sx={{ paddingBottom: '20px' }}>
          งานและกิจกรรมเร็ว ๆ นี้
        </Typography>
        <EventsCard />
      </Container>
    </>
  )
}
