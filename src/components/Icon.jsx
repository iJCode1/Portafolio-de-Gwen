import styled from 'styled-components'

const IconStyled = styled.img`
  padding-block: 3.25rem;
  padding-inline: 2.5rem;

  @media screen and (min-width: 1024px){
    width: 14rem;
  }
`

function Icon({ logo, alt, size }) {
  return (
    <IconStyled src={logo} alt={alt} width={size} />
  )
}

export default Icon
