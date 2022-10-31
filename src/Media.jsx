import styled from 'styled-components'
import SocialLink from './SocialLink'

const MediaStyled = styled.div`
  padding-block: 2.5rem;
  font: var(--body1-regular);
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px){
    padding-block: 5rem;
    flex-direction: row;
  }

  .type{
    margin: 0;
    letter-spacing: 1.2px;
  }

  .contact{
    margin: 0;
    letter-spacing: 1.2px;
  }

  .group{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .email{
    color: var(--white);
    font: var(--body2-regular);
    text-decoration: none;
      &:hover{
      text-decoration: underline;
      }
      &:active{
        transform: scale(.99);
      }
  }

  .phone, .details{
    color: var(--white);
    font: var(--body2-regular);
    margin: 0;
    transition: transform .2s;
    cursor: pointer;
    &:hover{
    text-decoration: underline;
    }
    &:active{
      transform: scale(.99);
    }
  }
`

function Media() {
  return (
    <MediaStyled>
      <div className='group'>
        <p className='type'>Redes sociales</p>
        <SocialLink text="GitHub" link="https://github.com/iJCode1" />
        <SocialLink text="Youtube" />
        <SocialLink text="LinkedIn" />
      </div>
      <div className='group'>
        <p className='type'>Contacto</p>
        <a className='email' href="mailto:name@email.com">gwenstacy@gmail.com</a>
        <p className='phone'>(405) 555-0128</p>
        <p className='details'>Detalles de facturación</p>
      </div>
    </MediaStyled>
  )
}

export default Media
