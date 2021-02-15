import { useState } from 'react';
import './index.scss';

export default function CodeBlock({ children, copy }) {
  const [state, setState] = useState('Copy');
  const onCopy = () => {
    setState('Copied');
    copy();
    setTimeout(() => setState('Copy'), 1000);
  };
  return (
    <div className="codeblock">
      <div className="codeblock__copy" onClick={onCopy}>
        {state}
      </div>
      {children}
    </div>
  );
}
