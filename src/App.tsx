import './App.css';
import UseCallBackHook from './useCallbackHook';
import UseEffectHook from './useEffectHook';
import UseMemoHook from './useMemoHook';
import UseRefHook from './useRefHook';
import UseStateHook from './useStateHook';

function App() {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallBackHook initialA={1} initialB={2} />
    </>
  );
}

export default App;
