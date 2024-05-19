import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactElement } from 'react'
import images from '../../../public/Images/home/thumnail.svg'

export default function ThumbnailComponent(): ReactElement {
  const Thumbnail = styled('div')`
    position: relative;
    width: 100%;
    height: 240px; /* Adjust height as needed */
    background-image: url(${images.src});
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
  return (
    <Thumbnail>
      <BackgroundOverlay>
        <TextOverlay>
          <Title variant="h1" color="white" fontWeight="bold">
            สาขาวิทยาการคอมพิวเตอร์ประยุกต์
          </Title>
          <SubTitle variant="h2" color="white">
            คณะวิทยาศาสตร์ ภาควิชาคณิตศาสตร์
          </SubTitle>
          <SubTitle variant="h2" color="white">
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
          </SubTitle>
        </TextOverlay>
      </BackgroundOverlay>
    </Thumbnail>
  )
}
