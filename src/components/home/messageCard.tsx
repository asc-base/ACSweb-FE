import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import avatar from '../../../public/images/home/avatar.svg'

export default function MessageCard(): ReactElement {
  const Container = styled('div')`
    && {
      padding: 20px;
      text-align: center;
    }
  `
  const Space = styled('div')`
    && {
      padding-bottom: 50px;
    }
  `
  return (
    <Container>
      <Card sx={{ maxWidth: 378 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={avatar.src}
            alt="random"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              margin: '16px auto 0',
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Space>
              <Typography
                gutterBottom
                variant="h3"
                color="primary"
                fontWeight="bold"
                component="div"
              >
                “มุ่งพัฒนาหลักสูตรสู่สากล”
              </Typography>
            </Space>
            <Space>
              <Typography variant="h4">
                มุ่งเน้นสร้างและพัฒนากำลังคนให้มี ศักยภาพสูงสุด และให้บริการวิชาการด้าน
                วิทยาศาสตร์และเทคโนโลยีเป็นเลิศ
              </Typography>
            </Space>
            <Space>
              <Typography variant="h4" fontWeight="bold">
                ดร. วรินทร์ วัฒนพรพรหม
              </Typography>
              <Typography variant="h4">อาจารย์ประจำภาควิชาคณิตศาสตร์</Typography>
            </Space>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
