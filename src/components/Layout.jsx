import styled from 'styled-components';

const LayoutStyle = styled.main`
  max-inline-size: 75rem;
  margin: 0 auto;
  padding-inline: 1rem;
  padding-block-end: 4rem;
`;

function Layout({ children }) {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}

export default Layout;