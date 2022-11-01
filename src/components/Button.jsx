import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: var(--button-background);
  color: var(--white);
  font: var(--button);
  padding-block: .75rem;
  padding-inline: 1.5rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  transition: transform .1s;
  text-align: center;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
  &:active{
    transform: scale(.9);
  }
`;

function Button({ text, link, className, download }) {
  const component = link ? 'a' : 'button'
  return (
    <ButtonStyled className={className} as={component} href={link} target="_blank" rel="noreferrer" download={download}>
      {text}
    </ButtonStyled>
  )
}

export const ButtonSmall = styled(Button)`
  width: 100%;
  max-width: 18rem;
  box-sizing: border-box;
`;

export const ButtonTransparent = styled(Button)`
  background: none;
  color: var(--button-background);
  border: 1px solid var(--button-background);
`;

export const ButtonTransparentSmall = styled(ButtonTransparent)`
  width: 100%;
  max-width: 16.25rem;
`;

export default Button