import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import EventsCard from './eventsCard'

export default function ComingEvents() {
  const Title = styled(Typography)`
    && {
      margin: 0;
      font-weight: bold;
      font-size: 36px;
      color: #e8360e;
    }
  `
  const Container = styled('div')``
  return (
    <>
      <Container>
        <Title>งานและกิจกรรมเร็ว ๆ นี้</Title>
        <EventsCard />
      </Container>
    </>
  )
}
