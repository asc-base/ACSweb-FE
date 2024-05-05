import Achivements from '@/components/home/achivements'
import Activities from '@/components/home/activities'
import ComingEvents from '@/components/home/comingEvents'
import News from '@/components/home/news'
import PublicRelation from '@/components/home/publicRelation'
import StudentWorks from '@/components/home/studenetWorks'
import Tumanail from '@/components/home/tumnail'
import { Container, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'

export default function HomePage(): ReactElement {
  const ContainerWrapper = styled(Container)`
    && {
      margin-top: 40px;
    }
  `
  return (
    <>
      <Tumanail />
      <ContainerWrapper>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ComingEvents />
          </Grid>
          <Grid item xs={6}>
            <PublicRelation />
          </Grid>
        </Grid>
      </ContainerWrapper>
      <ContainerWrapper>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <News />
          </Grid>
          <Grid item xs={4}>
            <Achivements />
          </Grid>
          <Grid item xs={4}>
            <Activities />
          </Grid>
        </Grid>
        <StudentWorks />
      </ContainerWrapper>
    </>
  )
}
