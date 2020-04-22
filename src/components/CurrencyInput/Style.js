import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 15rem;
  margin-top: -10rem;
`

export const Input = styled.input.attrs({type: 'number'})`
  width: 18rem;
  height: 25rem;
  outline: none;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 1.5rem;
  font-family: Poppins, sans-serif;
  font-size: 3rem;
  font-weight: 200;
`

export const Select = styled.select`
  width: 18rem;
  height: 6rem;
  outline: none;
  border: none;
  padding-left: 7.5rem;
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  border-radius: 0;
  background-color: #2C3335;
  color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: color 0.3s ease;

  &:hover, &:focus {
    color: #26ae60;
    border-bottom-color: #26ae60;
  }
`