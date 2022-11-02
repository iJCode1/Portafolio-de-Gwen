import styled from 'styled-components';
import { ButtonSmall } from './Button';
import cv from '../assets/files/cv.pdf';

const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 5rem;

  .title{
    font: var(--headline4);
    margin: 0;
    @media screen and (min-width: 768px){
      font: var(--headline1);
    }
  }

  .description{
    font: var(--body1-regular);
    color: var(--secondary);
    margin: 0;
    @media screen and (min-width: 768px){
      max-width: 36.25rem;
    }
  }

`;

function Hero() {
  return (
    <HeroStyled id='home'>
      <h3 className='title'>Diseño y Código de punta a punta de experiencias digitales innovadoras, sostenibles y flexibles</h3>
      <p className='description'>Soy una diseñadora y programadora de productos e interacción independiente centrada en las necesidades humanas, las posibilidades técnicas y el éxito empresarial.</p>
      <ButtonSmall link={cv} text="Descargar currículum" download="download"/>
    </HeroStyled>
  );
}

export default Hero;