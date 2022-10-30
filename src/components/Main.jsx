import styled from 'styled-components'
import Project from './Project'
import ricardo from '../assets/ricardo.webp'
import gitlist from '../assets/gitlist.webp'
import spotifu from '../assets/spotifu.webp'
import taskboard from '../assets/taskboard.webp'

const MainStyled = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding-block-start: 4rem;
  padding-block-end: 2.375rem;
  @media screen and (min-width: 768px){
    padding-block: 5rem;
  }

  .paragraph{
    font: var(--headline4);
    margin: 0;
    margin-bottom: 2.5rem;
    @media screen and (min-width: 768px){
      font: var(--headline2);
      margin-bottom: 5rem;
    }
  }

  .projects{
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`

function Main() {
  return (
    <MainStyled>
      <p className='paragraph'>El trabajo que hago y los proyectos a los que he ayudado.</p>
      <div className='projects'>
        <Project
          name="Portafolio de Ricardo"
          text="Aplique mis habilidades de Frontend para crear el protafolio de Ricardo"
          image={ricardo}
          repo="https://ijcode1.github.io/Portafolio-de-Ricardo/"
          code="https://github.com/iJCode1/Portafolio-de-Ricardo" />

        <Project
          name="TaskBoard"
          text="Este clon de Trello permite hacer Drag and Drop de las tareas de cada columna"
          image={taskboard}
          repo="https://trello-weld.vercel.app/"
          code="https://github.com/iJCode1/trello_clone" />

        <Project
          name="GitList"
          text="GitList es un clon de GitHub con la implementación de GitHub API"
          image={gitlist}
          repo="https://git-list-lyart.vercel.app/"
          code="https://github.com/iJCode1/GitList" />

        <Project
          name="Spotifu"
          text="Spotifu es el clon del home de Spotify donde se aplican conocimientos de Frontend"
          image={spotifu}
          repo="https://ijcode1.github.io/Spotifu/"
          code="https://github.com/iJCode1/Spotifu" />
      </div>
    </MainStyled>
  )
}

export default Main
