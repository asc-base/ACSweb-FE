import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'

export default function PublicRelation(): ReactElement {
  const Container = styled('div')``
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
    background-image: url('https://s3-alpha-sig.figma.com/img/9eb8/92d6/ea2a1c17e2e7b1094db7651742b8e746?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dGTxs3OI5iXyC5-44OtW36lxGFzOCOwC1KtlPTZFKCwxYcDxClQLLbmcFhMY7pCgxq14~LRPeWbqztCOBGJ9MkTz9SFT2fSh1Sw1w0jGzX0MjYs4U2J0jeob0-V1BOCitt~2NA7z9m70MrW33lfz7t3NZQDAIRec5RkviTtMcwb892UsSsbBV~HrkiweBthCoK~xO6Tu-NJ3lgFlA5KOhycXSyPSJ3BSzSqhHjX8X4ZLrOTCf4pxER44LaZQAcs166f5C~gORp3ExuoSlpPaYQOAUC8gHRHriSPwuTjaCyJN6E3xBSq6jFxdPmEBE3pkjnCxEd2fTvnvow7tt~Bh2w__');
    background-position: center;
    border-radius: 4px;
  `
  return (
    <>
      <Container>
        <Title variant="h1" color="secondary" fontWeight="bold">
          ประชาสัมพันธ์สำคัญ
        </Title>
        <Tumnail />
      </Container>
    </>
  )
}
