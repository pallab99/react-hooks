import { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState('posts');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);
  return (
    <>
      <h1>{resourceType}</h1>
      <div className="card">
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('users')}>Users</button>
      </div>
    </>
  );
};

export default UseEffectHook;
