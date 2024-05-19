import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import images from '../../../public/images/home/work.svg'

export default function WorkCard(): ReactElement {
  const Container = styled('div')`
    && {
      padding: 20px;
      text-align: center;
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={images.src} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h3">
              CSS123
            </Typography>
            <Typography gutterBottom variant="h3">
              Introduction to Computer Network
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
