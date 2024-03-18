import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Thumbnail = styled('div')`
  position: relative;
  width: 100%;
  height: 240px; /* Adjust height as needed */
  background-image: url('https://s3-alpha-sig.figma.com/img/86c0/9258/ec34f9e8bb4fa48d6ccad98fba27873a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPPwAyC52WXqWxyG1YIjpvFS07Vi3p0K3KL4YKw-dTLo3WsegdzEuaK-JrxlpyOigPXCMhtVP3c4ervJ6YwpO1UwXXfEU-QpXq9aVZIbvJSRraQlUDd7b81fsYQqpNk8g~DVxDuQysqQtr2Mh9mAzGS8e71mi~M3929v-Phkz6tC2kdYjJp4y1ydLRaDK~Th-vaI24U~uneIiT8124O2hFwg60cy9TAVhxqu3yo5rlUBCH2Qdu1a7uu1MZLwybTDrCGze-qmrcihtFjGYgZadYeOKrqiUbyGHXNPU7Qo5-kP7r~QuD0inubHChkpw~InnZbMEEqRF1BMBnuTKbjv-Q__');
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
    font-weight: bold;
    font-size: 36px;
  }
`
const SubTitle = styled(Typography)`
  && {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
  }
`

export default function ThumbnailComponent() {
  return (
    <>
      <Thumbnail>
        <BackgroundOverlay>
          <TextOverlay>
            <Title variant="h1">สาขาวิทยาการคอมพิวเตอร์ประยุกต์</Title>
            <SubTitle variant="h2">คณะวิทยาศาสตร์ ภาควิชาคณิตศาสตร์</SubTitle>
            <SubTitle variant="h2">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</SubTitle>
          </TextOverlay>
        </BackgroundOverlay>
      </Thumbnail>
    </>
  )
}
