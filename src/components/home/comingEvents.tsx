import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import EventsCard from './eventsCard'

export default function ComingEvents(): ReactElement {
  const Container = styled('div')``
  return (
    <>
      <Container>
        <Typography variant="h1" color="secondary" fontWeight="bold">
          งานและกิจกรรมเร็ว ๆ นี้
        </Typography>
        <EventsCard />
      </Container>
    </>
  )
}
