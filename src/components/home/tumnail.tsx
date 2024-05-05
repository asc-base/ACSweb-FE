import DESIGN_TOKEN from '@/styles/token'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Thumbnail = styled('div')`
  position: relative;
  width: 100%;
  height: 240px; /* Adjust height as needed */
  background-image: url('https://s3-alpha-sig.figma.com/img/86c0/9258/ec34f9e8bb4fa48d6ccad98fba27873a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fRHfEq9gHHk4z3ljIxpK1YqVlaP-JQ8GcLv8OYZk~tL3qzF~Jq4xl35qub4uA2i4TOr45cYyAgASOyQpYL0PBPFzUqekOoPc2iKb-JVlPYzV4atRJaf~v9JGdBoYcGSE4tYoCRwP-7h0mUUeBque2EferQO6C79tOIPxEXWu4uz-6nn~MXTah3ZuyV0qLppX7Dyt2y7vtSlY5Il9UyhAgnkqdlXSJ9~Aghu7UMO89W13CcSKmADkwbZ09O8Dtyy6nEVmHb-5P1EZXZpGuYhUKi82ZvizteRA5vDuOoKyZSGwdYRASszwUBo6~buXziQG5zMQkMPo8jdBfb5OODMGBA__');
  background-size: cover;
  background-position: center;
`
const BackgroundOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const TextOverlay = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: white;
  text-align: center;
`

const Title = styled(Typography)`
  && {
    margin: 0;
  }
`
const SubTitle = styled(Typography)`
  && {
    margin: 0;
  }
`

export default function ThumbnailComponent() {
  return (
    <Thumbnail>
      <BackgroundOverlay>
        <TextOverlay>
          <Title variant="h1" color={DESIGN_TOKEN.color.primary[6]} fontWeight="bold">
            สาขาวิทยาการคอมพิวเตอร์ประยุกต์
          </Title>
          <SubTitle variant="h2" color={DESIGN_TOKEN.color.primary[6]}>
            คณะวิทยาศาสตร์ ภาควิชาคณิตศาสตร์
          </SubTitle>
          <SubTitle variant="h2" color={DESIGN_TOKEN.color.primary[6]}>
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
          </SubTitle>
        </TextOverlay>
      </BackgroundOverlay>
    </Thumbnail>
  )
}
