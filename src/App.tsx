import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import styled from '@emotion/styled';

const AnotherComp = styled.div`
  color: ${(props) => props.color};
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AnotherComp color="red">Hello</AnotherComp>
    </div>
  );
}

export default App;
