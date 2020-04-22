import React from 'react';

import { InputContainer, Input, Select } from './Style';


export const CurrencyInput = (props) => {

  const {
    currencyOptions,
    selectedOption,
    changeCurrencyOption,
    amount,
    changeAmount
  } = props;

  return (
    <InputContainer>
     <Input value={ amount } onChange={ changeAmount }/>
     <Select value={ selectedOption } onChange={ changeCurrencyOption }>
        {
          currencyOptions && 
          currencyOptions.map((option, index) => {
            return (
              <option 
                value={ option } 
                key={ index }
              >
                { option }
              </option>
            );
          })   
        }
     </Select>
    </InputContainer>
  );
}
