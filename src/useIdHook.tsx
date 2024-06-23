import { useId } from 'react'; // Make sure to import useId from 'react'

function UseIdHook() {
  const usernameId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={usernameId}>Username</label>
      <input id={usernameId} type="text" placeholder="Enter your username" />

      <label htmlFor={passwordId}>Password</label>
      <input
        id={passwordId}
        type="password"
        placeholder="Enter your password"
      />

      <button type="submit">Log In</button>
    </form>
  );
}

export default UseIdHook;
