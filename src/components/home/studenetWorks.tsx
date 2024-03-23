import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import WorkCard from './workCard'

export default function StudentWorks() {
  const Title = styled(Typography)`
    && {
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      color: #e8360e;
    }
  `
  const Container = styled('div')``
  return (
    <>
      <Container>
        <Title>ผลงานนักศึกษา</Title>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <WorkCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WorkCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WorkCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
