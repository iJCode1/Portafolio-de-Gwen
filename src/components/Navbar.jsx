import styled from 'styled-components'
import Icon from './icon/Index';

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;

  .title{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0;
  }

  .icon{
    line-height: 0;
  }

  .options{
    display: none;
    gap: 2.5rem;
    font: var(--body2-bold);
    & a{
      color: var(--secondary);
      text-decoration: none;

      &:hover{
        text-decoration: underline;
        color: var(--white);
      }

      &:active{
        transform: scale(.9);
        transition: .2s;
      }
    }
  }

  @media screen and (min-width: 768px){
    padding-block: 2rem;
    
    .icon{
      display: none;
    }
    
    .options{
      display: flex;
    }
  }
`

function Navbar() {
  return (
    <NavbarStyled>
      <h2 className='title'>Gwen Stacy</h2>
      <span className="icon">
        <Icon icon="menu" size="24" color="var(--button-background)"/>
      </span>

      <div className="options">
        <a href="#home">Home</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto">Contacto</a>
      </div>
    </NavbarStyled>
  )
}

export default Navbar
