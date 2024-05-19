import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import MessageCard from './messageCard'

export default function Message(): ReactElement {
  const Container = styled('div')`
    && {
    padding-bottom: 20px;
    `

  return (
    <div>
      <Container>
        <Typography variant="h2" color="secondary" fontWeight="bold" align="center">
          สารจากคณาจารย์และนักศึกษาเก่า
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <MessageCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MessageCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MessageCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
