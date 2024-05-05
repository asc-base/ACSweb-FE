import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function EventsCard() {
  const Card = styled('div')`
    && {
        display: flex;
        width: 100%;
        height: 101px;
        flex-direction: column;
        justify-content: center;
        background-color: #F2F2F2;
        border-radius: 16px;
        margin-top: 10px;
        `

  const Title = styled(Typography)`
    && {
      margin-left: 20px;
    }
  `
  const SubTitle = styled(Typography)`
    && {
      margin-left: 20px;
    }
  `
  const data = {
    title: 'ประกาศรายชื่อสัมภาษณ์รอบ Active Recruitment',
    subTitle: '15-20 มกราคม 2567',
  }

  return (
    <>
      <Card>
        <Title variant="h3" fontWeight="bold">
          {data.title}
        </Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Card>
      <Card>
        <Title variant="h3" fontWeight="bold">
          {data.title}
        </Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Card>
      <Card>
        <Title variant="h3" fontWeight="bold">
          {data.title}
        </Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Card>
      <Card>
        <Title variant="h3" fontWeight="bold">
          {data.title}
        </Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Card>
      <Card>
        <Title variant="h3" fontWeight="bold">
          {data.title}
        </Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </Card>
    </>
  )
}
