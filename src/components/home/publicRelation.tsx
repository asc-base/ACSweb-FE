import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function PublicRelation() {
  const Container = styled('div')``
  const Title = styled(Typography)`
    && {
      margin: 0;
      font-weight: bold;
      font-size: 36px;
      color: #e8360e;
      background-position: center;
    }
  `
  const Tumnail = styled('div')`
    position: relative;
    width: 564px;
    height: 496px;
    background-size: cover;
    background-image: url('https://s3-alpha-sig.figma.com/img/9eb8/92d6/ea2a1c17e2e7b1094db7651742b8e746?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUWX9OTelG92hhfT0m2V9yareUBZG6637AmOBeysuZEHk8b-piacDl5ok0vYubYpnrgjX7VRY3yZr~b1vRjSLhhqvrIBUWHq8-9sYsMtxLda1IN2IXbP-CSWfmoDk1DK40dKlMFxDP0VFGjZ0--47xtFuiyIWa6jXbIuJ~JKoZ4eQCYcTHO0hr1UFlOaELZOHWs9kKo2StDr0ojDSmQ1hW2YaUKQX8LWLW0gVnI7j2NbawMmd8taJ-iD47c96DgoSZ1JgfSjCcsgrs7Em9ihhli2IJEC5oY4jWjXni53GlrFFCz8go0RHZChCsVfeqAvos1mCgNI3joCLg4MczF~OA__');
    background-position: center;
    border-radius: 4px;
  `
  return (
    <>
      <Container>
        <Title>ประชาสัมพันธ์สำคัญ</Title>
        <Tumnail />
      </Container>
    </>
  )
}
