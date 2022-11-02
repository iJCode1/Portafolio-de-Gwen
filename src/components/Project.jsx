import styled from 'styled-components'
import Button, { ButtonSmall, ButtonTransparent, ButtonTransparentSmall } from './Button'

const ProjectStyled = styled.div`
  display: flex;
  gap: 2.5rem;

  .content{
    display: flex; 
    flex-direction: column;
    gap: 1rem;
  }

  .image{
    width: 100%;
    height: auto;
  }

  .name{
    font: var(--body1-regular);
    color: var(--grey);
    margin: 0;
  }

  .detail{
    font: var(--headline5);
    margin: 0;
    color: var(--grey);
    @media screen and (min-width: 768px){
      font: var(--headline3);
    }
  }

  .actions{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px){
      padding-block-start: 1.5rem;
      flex-direction: row;
    }
  }

  @media screen and (prefers-color-scheme: light){
    --grey: #72757e;
  }
`

function Project({ name, text, image, repo, code }) {
  return (
    <ProjectStyled>
      <div className="content">
        <img className='image' src={image} alt="Proyecto" width="280" height="280" />
        <h2 className="name">{name}</h2>
        <p className='detail'>{text}</p>
        <div className='actions'>
          <Button text="Ver detalle del proyecto" link={repo} />
          <ButtonTransparent text="Ver código del proyecto" link={code} />
        </div>
      </div>
    </ProjectStyled>
  )
}

export default Project
