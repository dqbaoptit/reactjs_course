import { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ padding: '5rem' }}>
        <p style={{ fontSize: 20, color: '#333' }}>Bạn đã click {count} lần</p>
        <div className="btn" onClick={() => setCount((prev) => prev + 1)}>
          Click here
        </div>
        <br />
        <div className="btn" onClick={() => setCount(0)}>
          Reset
        </div>
      </div>
      <a
        href="https://gist.github.com/dqbaoptit/ec92dbace3b70aef950a79e6a1b14082"
        target="_blank"
      >
        See code example
      </a>
    </>
  );
}
