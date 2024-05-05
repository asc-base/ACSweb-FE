import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import WorkCard from './workCard'

export default function StudentWorks(): ReactElement {
  const Title = styled(Typography)`
    && {
      margin: 0;
    }
  `
  const Container = styled('div')``
  return (
    <>
      <Container>
        <Title variant="h2" color="secondary" fontWeight="bold">
          ผลงานนักศึกษา
        </Title>
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
