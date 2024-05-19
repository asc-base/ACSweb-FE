import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import images from '../../../public/images/home/news.svg'

export default function NewsCard(): ReactElement {
  const Container = styled('div')`
    && {
      padding-bottom: 20px;
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={images.src}
            alt="green iguana"
            sx={{
              width: 314,
              height: 240,
              borderRadius: '12px',
              margin: '30px auto 0',
            }}
          />
          <CardContent sx={{ padding: '30px' }}>
            <Typography gutterBottom variant="h3" fontWeight="bold">
              ชื่อข่าวและอะไรรายละเอียดสักอย่าง เนื้อหาประมาณนึง
            </Typography>
            <Typography variant="body2">12 ธันวาคม 2567</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
