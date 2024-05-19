import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import pr from '../../../public/Images/home/pr.svg'

export default function PublicRelation(): ReactElement {
  const Container = styled('div')`
    && {
      padding-bottom: 20px;`
  const Title = styled(Typography)`
    && {
      margin: 0;
      background-position: center;
    }
  `
  const Tumnail = styled('div')`
    position: relative;
    width: 564px;
    height: 496px;
    background-size: cover;
    background-image: url(${pr.src});
    background-position: center;
    border-radius: 4px;
  `
  return (
    <>
      <Container>
        <Title variant="h1" color="secondary" fontWeight="bold" sx={{ paddingBottom: '20px' }}>
          ประชาสัมพันธ์สำคัญ
        </Title>
        <Tumnail />
      </Container>
    </>
  )
}
