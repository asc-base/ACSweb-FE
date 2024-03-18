import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function Achivements() {
  const Container = styled('div')``
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
      <Container>
        <Title>ความสำเร็จสาขาวิชา</Title>
      </Container>
    </div>
  )
}
