import { useState, useCallback } from 'react';

function UseCallBackHook({
  initialA,
  initialB,
}: Readonly<{
  initialA: number;
  initialB: number;
}>) {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const calculateSum = useCallback(() => {
    return a + b;
  }, [a, b]);
  return (
    <div>
      <p>
        A:{' '}
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
      </p>
      <p>
        B:{' '}
        <input
          type="number"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </p>
      <p>Sum: {calculateSum()}</p>
    </div>
  );
}

export default UseCallBackHook;
