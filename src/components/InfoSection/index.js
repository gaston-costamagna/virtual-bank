import React from 'react'
import { Button } from '../ButtonElements';
import { 
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap,
  Img,
  ImgWrap 
} from './InfoElements';


const InfoSection = ({
  lightBg, 
  id, 
  imgStart,
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  buttonLabel, 
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button 
                to='/' 
                primary={primary ? 1 : 0}  
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
                smooth={true}
                spy={true}
                exact='true'
                offset={-80}
                duration={500}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection