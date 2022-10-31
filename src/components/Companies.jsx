import styled from 'styled-components'
import Icon from './Icon'
import Nike from '../assets/nike.png'
import Adidas from '../assets/adidas.png'
import Telcel from '../assets/telcel.png'

const CompaniesStyled = styled.div`
  padding-block-start: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media screen and (min-width: 768px){
    font: var(--headline2);
    padding-block: 5rem;
    gap: 5rem;
  }

  .text{
    font: var(--headline4);
    margin: 0;
    @media screen and (min-width: 768px){
      font: var(--headline2);
    }
  }

  .companies{
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-items: center;
  }
`

function Companies() {
  return (
    <CompaniesStyled id="testimonios">
      <p className='text'>He tenido el privilegio de trabajar con múltiples empresas como.</p>
      <div className='companies'>
        <Icon
          logo={Nike}
          size="138px"
          alt="Nike" />
        <Icon
          logo={Adidas}
          size="130px"
          alt="Adidas" />
        <Icon
          logo={Telcel}
          size="170px"
          alt="Telcel" />
      </div>
    </CompaniesStyled>
  )
}

export default Companies
