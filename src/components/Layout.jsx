import styled from 'styled-components';

const LayoutStyle = styled.div`
  max-inline-size: 75rem;
  margin: 0 auto;
  padding-inline: 1rem;
  padding-block-end: 4rem;

  @media screen and (min-width: 768px){
    padding-block-end: 0;
  }
`;

function Layout({ children }) {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}

export default Layout;