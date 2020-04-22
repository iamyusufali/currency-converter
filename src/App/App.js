import React from 'react';

import { FullLengthContainer} from '../components/Global/FullLengthContainer';
import { Converter } from '../components/Converter';
import { Navbar } from '../components/Navbar';

const App = () => {
  return (
    <FullLengthContainer>
      <Navbar/>
      <Converter />
    </FullLengthContainer>
  );
}

export default App;