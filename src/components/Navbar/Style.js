import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 12px -3px rgba(0,0,0,.2);
  
  .icon{
    width: 4rem;
    cursor: pointer;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  color: #353b48;
`