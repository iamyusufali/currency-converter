import React, { useState, useEffect } from 'react';

import { Container, H1 } from './Style';
import { CurrencyInput } from '../CurrencyInput';

import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";


// Exhange rates API URL
const RATES_URL = 'https://api.exchangeratesapi.io/latest';


export const Converter = () => {

  // Currency options handler
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // From & To currency handler
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  // Exchange rate handler
  const [exchangeRate, setExchangeRate] = useState();

  // Amount controller
  const [changeInFromCurrency, setChangeInFromCurrency] = useState(true);
  const [amount, setAmount] = useState(1);

  
  let fromAmount, toAmount;

  if (changeInFromCurrency) {
    fromAmount = Number.parseFloat(amount);
    toAmount = Number.parseFloat(amount * exchangeRate).toFixed(2);
  } else {
    fromAmount = Number.parseFloat(amount / exchangeRate).toFixed(2);
  }
 
  // To fetch data after dom is painted
  useEffect(() => {
    fetch(RATES_URL)
      .then(resp => resp.json())
      .then(data => {
        const FROM_CURRENCY = data.base;
        const TO_CURRENCY = Object.keys(data.rates)[0];

        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(FROM_CURRENCY);
        setToCurrency(TO_CURRENCY);
        setExchangeRate(data.rates[TO_CURRENCY]);
      })
  }, [])

  // To fetch required currency rate based in user actions
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`${RATES_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(resp => resp.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])


  return (
    <Container>
      <H1 style={{width: '100%'}}>Calculate</H1>
      <CurrencyInput 
        currencyOptions={ currencyOptions }

        selectedOption={ fromCurrency }

        changeCurrencyOption={ (event) =>  setFromCurrency(event.target.value) }

        amount={ fromAmount }

        changeAmount={ (event) => {
          setAmount(event.target.value);
          setChangeInFromCurrency(true);
        }}
      />
      {/* <div style={{ margin: '2rem 0' }}>
        <FaAngleDoubleDown size='2rem' />
        <FaAngleDoubleUp size='2rem' />
      </div> */}
      <CurrencyInput 
        currencyOptions={ currencyOptions }

        selectedOption={ toCurrency }

        changeCurrencyOption={ (event) => setToCurrency(event.target.value)}

        amount={ toAmount }

        changeAmount={ (event) => {
          setAmount(event.target.value);
          setChangeInFromCurrency(false);
        }}
      />
    </Container>
  );
}
