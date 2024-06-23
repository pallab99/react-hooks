import { useRef, useLayoutEffect } from 'react';

function UseLayoutEffectHook() {
  const elementOneRef = useRef<HTMLDivElement>(null);
  const elementTwoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (elementOneRef.current && elementTwoRef.current) {
        const height = elementOneRef.current.offsetHeight;
        elementTwoRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', updateHeight);
    document.addEventListener('DOMContentLoaded', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      document.removeEventListener('DOMContentLoaded', updateHeight);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div ref={elementOneRef}>
        Content for Element One
        {/* Content can change, triggering a resize */}
      </div>
      <div
        ref={elementTwoRef}
        style={{ border: '1px solid black', minHeight: '100px' }}
      >
        Content for Element Two
      </div>
    </div>
  );
}

export default UseLayoutEffectHook;
