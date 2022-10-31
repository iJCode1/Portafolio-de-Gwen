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

  .email, .phone{
    color: var(--white);
    font: var(--body2-regular);
    text-decoration: none;
    transition: transform .2s;
      &:hover{
      text-decoration: underline;
      }
      &:active{
        transform: scale(.90);
      }
  }

  .details{
    color: var(--white);
    font: var(--body2-regular);
    margin: 0;
    transition: transform .2s;
    cursor: pointer;
    &:hover{
    text-decoration: underline;
    }
    &:active{
      transform: scale(.90);
    }
  }
`

function Media() {
  return (
    <MediaStyled>
      <div className='group'>
        <p className='type'>Redes sociales</p>
        <SocialLink text="GitHub" link="https://github.com/iJCode1" />
        <SocialLink text="Twitter" link="https://twitter.com/iJCode1" />
        <SocialLink text="LinkedIn" link="https://www.linkedin.com/in/joel-dome/" />
      </div>
      <div className='group'>
        <p className='type'>Contacto</p>
        <a className='email' href="mailto:name@email.com">gwenstacy@gmail.com</a>
        <a className='phone' href="tel:(405) 555-0128">(405) 555-0128</a>
        <p className='details'>Detalles de facturación</p>
      </div>
    </MediaStyled>
  )
}

export default Media
