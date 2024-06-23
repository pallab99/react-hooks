import { useState, useMemo } from 'react';

function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const square = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <p>Enter a number:</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>
        The square of {number} is: {square}
      </p>
    </div>
  );
}

export default UseMemoHook;
