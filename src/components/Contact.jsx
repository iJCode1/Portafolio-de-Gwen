import styled from 'styled-components'

const ContactStyled = styled.div`
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 768px){
    padding-block: 5rem; 
    gap: 5rem;
  }

  .note{
    font: var(--headline4);
    margin: 0;
    @media screen and (min-width: 768px){
      font: var(--headline2);
    }
  }

  .email{
    color: var(--button-background);
    font: var(--headline5);
    cursor: pointer;
    transition: transform .2s;
    &:active{
      transform: scale(.97);
    }
    @media screen and (min-width: 768px){
      font: var(--headline3);
    }
    @media screen and (min-width: 1024px){
      font: var(--headline2);
    }
  }
`

function Contact() {
  return (
    <ContactStyled>
      <h2 className='note'>¿Quieres trabajar conmigo o simplemente tomar un café? - ¡Hazme ping!</h2>
      <a className='email' href="mailto:name@email.com">gwenstacy@gmail.com</a>
    </ContactStyled>
  )
}

export default Contact