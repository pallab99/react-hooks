import './App.css';
import UseCallBackHook from './useCallbackHook';
import UseEffectHook from './useEffectHook';
import UseIdHook from './useIdHook';
import UseLayoutEffectHook from './useLayoutEffectHook';
import UseMemoHook from './useMemoHook';
import UseReducerHook from './useReducerHook';
import UseRefHook from './useRefHook';
import UseStateHook from './useStateHook';
import UseTransitionHook from './useTransationHook';

function App() {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallBackHook initialA={1} initialB={2} />
      <UseReducerHook />
      <UseTransitionHook />
      <UseLayoutEffectHook />
      <UseIdHook />
    </>
  );
}

export default App;
