import styled from 'styled-components'

const SocialLinkStyled = styled.a`
  font: var(--body2-regular);
  background: none;
  color: var(--white);
  border: none;
  transition: transform .2s;
  cursor: pointer;
  display: inline-block;
  inline-size: fit-content;
  padding: 0;
  
  &:hover{
    text-decoration: underline;
  }
  &:active{
    transform: scale(.99);
  }
`

function SocialLink({ text, link }) {
  let component = link ? 'a' : 'button';
  return (
    <SocialLinkStyled as={component} href={link} target="_blank" rel="noreferrer">
      {text}
    </SocialLinkStyled>
  )
}

export default SocialLink
