import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export default function WorkCard() {
  const Container = styled('div')`
    && {
      margin: 20px;
      text-align: center;s
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://s3-alpha-sig.figma.com/img/86c0/9258/ec34f9e8bb4fa48d6ccad98fba27873a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPPwAyC52WXqWxyG1YIjpvFS07Vi3p0K3KL4YKw-dTLo3WsegdzEuaK-JrxlpyOigPXCMhtVP3c4ervJ6YwpO1UwXXfEU-QpXq9aVZIbvJSRraQlUDd7b81fsYQqpNk8g~DVxDuQysqQtr2Mh9mAzGS8e71mi~M3929v-Phkz6tC2kdYjJp4y1ydLRaDK~Th-vaI24U~uneIiT8124O2hFwg60cy9TAVhxqu3yo5rlUBCH2Qdu1a7uu1MZLwybTDrCGze-qmrcihtFjGYgZadYeOKrqiUbyGHXNPU7Qo5-kP7r~QuD0inubHChkpw~InnZbMEEqRF1BMBnuTKbjv-Q__"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              CSS123
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Introduction to Computer Network
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
