import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'

export default function NewsCard(): ReactElement {
  const Container = styled('div')`
    && {
      margin: 20px;
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://s3-alpha-sig.figma.com/img/727f/0cd7/a0c77f1336d40f08cc065943e143e349?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BS18V5BjWAzoN~d2c90-ypHebq8aMhQ~etnplvPAnZ7IISoU3MDNrb5nolh79bXAY3hdAEQWtNhWVlMJcQnNR4OC0b7G-1T6KQwvtOIMK-w-rRH4JtZzDxxfVIxgNEAX6tx0wrEDDY08uqVFr4GNxtBFnPSoQR~PRJ1gj7DdyiNZWugW4~DcwHQ4~vAPZOBgmwB3p4xsth4GITxz2qHWx2kStNdMNSjWoS5xOhEw20qSnwQ5wzIVHGVFZzqNOixJ3sjrU4lzizbnGrm3x8zbiT~4y3Hj6ELvhjnzqppeSVS~bpdiYR1Caopy16CBCgzUjLlKgUhS78fixuPOzC21KQ__"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              ชื่อข่าวและอะไรรายละเอียดสักอย่าง เนื้อหาประมาณนึง
            </Typography>
            <Typography variant="body2">12 ธันวาคม 2567</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
