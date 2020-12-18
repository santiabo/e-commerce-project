import React from 'react';

// Styled Components
import { FooterWrapper, SocialMediaWrapper } from './styles';

// Social Media Icons
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as YouTube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';

const Footer = () => {

  return (
    <FooterWrapper>

      <SocialMediaWrapper>
        <Twitter />
        <Facebook />
        <YouTube />
        <Instagram />
      </SocialMediaWrapper>

      <a href='/'>Terminos de uso </a>
      <a href='/'>Declaración de privacidad </a>
      <a href='/'>Centro de ayuda</a>

    </FooterWrapper>
  );
};

export default Footer;
