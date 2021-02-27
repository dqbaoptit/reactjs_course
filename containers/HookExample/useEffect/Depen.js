import React, { useState, useEffect } from 'react';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function nonDepen() {
  const [color, setColor] = useState(randomColor());

  const [count, setCount] = useState(0);

  // _______ empty dependency array | Component Did Update
  //  run this effect
  useEffect(() => {
    if (count % 2 === 0) setColor(randomColor());
  }, [count]);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <p>Khi số lần click chẵn sẽ đổi màu</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '10rem',
            width: '10rem',
            borderRadius: 10,
            border: '1px solid #eee',
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all ease-in-out .3s',
          }}
        >
          {color}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p>{count}</p>
          <div className="btn" onClick={() => setCount((prev) => prev + 1)}>
            Click
          </div>
        </div>
      </div>
    </div>
  );
}
