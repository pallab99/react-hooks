/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTransition, useState, useEffect } from 'react';

function UseTransitionHook() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startTransition, isPending] = useTransition();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData(['Item 1', 'Item 2', 'Item 3']);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {!isPending && !isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UseTransitionHook;
