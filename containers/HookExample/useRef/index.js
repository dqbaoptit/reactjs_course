import React, { useRef } from 'react';
export default function useRefExample() {
  const inpRef = useRef(null);

  const focus = () => inpRef.current.focus();
  return (
    <div>
      <p>Input</p>
      <input
        type="text"
        name=""
        id=""
        ref={inpRef}
        style={{
          border: '1px solid #eee',
          padding: '.5rem 2rem',
          borderRadius: 10,
        }}
      />
      <div className="btn" onClick={focus} style={{ margin: '2rem' }}>
        Click to focus input
      </div>
      <a
        href="https://gist.github.com/dqbaoptit/6955e2ef92deb65e52dec525c627ce8c"
        target="_blank"
      >
        See code example
      </a>
    </div>
  );
}
