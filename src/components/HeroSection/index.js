import React, { useState } from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight 
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer to='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Banco Virtual Hacelo Fácil</HeroH1>
        <HeroP>
          Registrate hoy con una nueva cuenta y recibí $250 en créditos para tu próximo pago
        </HeroP>
        <HeroBtnWrapper>
          <Button 
          to='home' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true' 
          offset={-80}
          >
            Empezar Ahora {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection