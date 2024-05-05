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
      text-align: center;
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://s3-alpha-sig.figma.com/img/bde1/8838/f4a4939e52f2c77a9d314a358b09a5ec?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5nOeQ3tzZzPpWS-N4OLSCA12To8~oTksWVSPiJ4KjdARPu~e-edk5VUSi1KQpgquUZZilcTHea2x5wpl1ct4Ui~bbbgqTggrhnwZJYLXNpA3ASJHcb6Bn4UV4eitHjZesbccf0DaI0n~sCUDDdZCDwuaM8DEaFM~Z3f4NOfP1LNR4FmeXI7wPGEWLOJ-xfgbK1H3S9II2R~UkVxeeR2UHJNjOx7Xx~VRQHKaksUvTjV-qppGY~82K2GK3N~Vp1Ufw6hZXuXEX~rsoIKTVVSDi-Osbep2mVpzU~RbSEHIaSjv7ykWncBZb5P7uNfhEmvou5-NcRu1Gdg0jKViYling__"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              CSS123
            </Typography>
            <Typography gutterBottom component="div">
              Introduction to Computer Network
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
