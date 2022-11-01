import styled from 'styled-components'
import Icon from './icon/Index'
import { useState, useEffect } from 'react'

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  inset: 0;
  z-index: 5;
  box-sizing: border-box;
  gap: 7.5rem;
  
  .logo{
    padding-block: 1.25rem;
    display: flex;
    justify-content: space-between;
    inline-size: 100%;
    background-color: var(--background-1);
  }

  .title{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin: 0;
    &>a{
      transition: transform .2s;
      color: var(--white);
      text-decoration: none;
      display: inline-block;
      &:hover{
        text-decoration: underline;
      }
      &:active{
        transform: scale(.9);
      }
    }
  }

  .icon{
    line-height: 0;
  }

  .options{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => (props.isActiveMenu ? 'var(--background-1)' : "none")};
    position: fixed;
    z-index: 3;
    inset: 0;
    inset-block-start: 64px;
    gap: 3rem;
    font: var(--body2-bold);
    transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: translateX(200%);
    transform: translateX(${props => (props.isActiveMenu ? "0%" : "200%")});

    & a{
      font: var(--headline3);
      text-align: center;
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
    flex-direction: row;
    position: relative;
    
    .icon{
      display: none;
    }

    .options{
      display: flex;
      flex-direction: row;
      position: initial;
      transform: initial;
      & a{
        font: var(--body2-bold);
      }
    }
  }
`

function Navbar() {

  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleWidth = () => {
    setWidth(window.innerWidth)
    if (width > 768) {
      setIsActiveMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidth)

    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  })

  function handleOpen() {
    setIsActiveMenu(true);
  }

  function handleClose() {
    setIsActiveMenu(false);
  }

  return (
    <NavbarStyled isActiveMenu={isActiveMenu}>
      <div className='logo'>
        <h2 className='title'>
          <a href="/">Gwen Stacy</a>
        </h2>

        {
          isActiveMenu
            ? <span className="icon" onClick={handleClose}>
              <Icon icon="cancel" sxxize="24" color="var(--button-background)" />
            </span>
            : <span className="icon" onClick={handleOpen}>
              <Icon icon="menu" size="24" color="var(--button-background)" />
            </span>
        }
      </div>

      <div className="options">
        <a onClick={handleClose} href="#home">Home</a>
        <a onClick={handleClose} href="#proyectos">Proyectos</a>
        <a onClick={handleClose} href="#testimonios">Testimonios</a>
        <a onClick={handleClose} href="#contacto">Contacto</a>
      </div>
    </NavbarStyled>
  )
}

export default Navbar
