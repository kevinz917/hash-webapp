import { useState } from 'react';
import mimc from './utils/mimc';

const Main = () => {
  const [hashInput, setHashInput] = useState<any>(null);
  const [hashOuput, setHashOutput] = useState(null);

  const calculateHash = () => {
    const splicedInput = hashInput.split(',');

    // Add error detection
    const res: any = mimc(...splicedInput);
    console.log(res.toString());
    setHashOutput(res.toString());
  };

  return (
    <div>
      <div>Separate input with comma</div>
      <br />

      <input value={hashInput} onChange={(e: any) => setHashInput(e.target.value)} />
      <button onClick={() => calculateHash()}>Calculate</button>
      <br />
      <br />

      <div>Hash: {`${hashOuput}`}</div>
    </div>
  );
};

export default Main;
