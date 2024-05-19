import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'

export default function EventsCard(): ReactElement {
  const Container = styled('div')`
    && {
      padding: 5px;
    }
  `
  const Cards = styled(Card)`
    && {
      background-color: #f2f2f2;
    }
  `
  const Title = styled(Typography)`
    && {
      padding-left: 20px;
    }
  `
  const SubTitle = styled(Typography)`
    && {
      padding-left: 20px;
    }
  `
  const data = {
    title: 'ประกาศรายชื่อสัมภาษณ์รอบ Active Recruitment',
    subTitle: '15-20 มกราคม 2567',
  }

  return (
    <>
      <Container>
        <Cards>
          <CardActionArea>
            <CardContent>
              <Title variant="h3" fontWeight="bold">
                {data.title}
              </Title>
              <SubTitle>{data.subTitle}</SubTitle>
            </CardContent>
          </CardActionArea>
        </Cards>
      </Container>

      <Container>
        <Cards>
          <CardActionArea>
            <CardContent>
              <Title variant="h3" fontWeight="bold">
                {data.title}
              </Title>
              <SubTitle>{data.subTitle}</SubTitle>
            </CardContent>
          </CardActionArea>
        </Cards>
      </Container>

      <Container>
        <Cards>
          <CardActionArea>
            <CardContent>
              <Title variant="h3" fontWeight="bold">
                {data.title}
              </Title>
              <SubTitle>{data.subTitle}</SubTitle>
            </CardContent>
          </CardActionArea>
        </Cards>
      </Container>

      <Container>
        <Cards>
          <CardActionArea>
            <CardContent>
              <Title variant="h3" fontWeight="bold">
                {data.title}
              </Title>
              <SubTitle>{data.subTitle}</SubTitle>
            </CardContent>
          </CardActionArea>
        </Cards>
      </Container>

      <Container>
        <Cards>
          <CardActionArea>
            <CardContent>
              <Title variant="h3" fontWeight="bold">
                {data.title}
              </Title>
              <SubTitle>{data.subTitle}</SubTitle>
            </CardContent>
          </CardActionArea>
        </Cards>
      </Container>
    </>
  )
}
