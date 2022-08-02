import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter 
} from 'react-icons/fa';

import { 
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink  
} from './FooterElements';

const toggleHome = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Sobre Nosotros </FooterLinkTitle>
                <FooterLink to='/'> Como Funciona </FooterLink>
                <FooterLink to='/'> Testimoños </FooterLink>
                <FooterLink to='/'> Carrera </FooterLink>
                <FooterLink to='/'> Inversores </FooterLink>
                <FooterLink to='/'> Terms of Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
                <FooterLink to='/'> Enviar Video </FooterLink>
                <FooterLink to='/'> Embajador </FooterLink>
                <FooterLink to='/'> Agencia </FooterLink>
                <FooterLink to='/'> Influencer </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Redes Sociales </FooterLinkTitle>
                <FooterLink to='/'> Instagram </FooterLink>
                <FooterLink to='/'> Facebook </FooterLink>
                <FooterLink to='/'> Youtube </FooterLink>
                <FooterLink to='/'> Twitter </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contacta Con Nosotros</FooterLinkTitle>
                <FooterLink to='/'> Contacto </FooterLink>
                <FooterLink to='/'> Soporte </FooterLink>
                <FooterLink to='/'> Sponsors </FooterLink>
                <FooterLink to='/'> Destinos </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()} Todos los derechos reservados.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//www.twitter.com/badlooser93' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer