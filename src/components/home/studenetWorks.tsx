import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import WorkCard from './workCard'

export default function StudentWorks(): ReactElement {
  const Title = styled(Typography)`
    && {
    }
  `
  const Container = styled('div')`
    && {
      padding-bottom: 20px;
    }
  `
  return (
    <>
      <Container>
        <Title variant="h2" color="secondary" fontWeight="bold">
          ผลงานนักศึกษาตามรายวิชา
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
