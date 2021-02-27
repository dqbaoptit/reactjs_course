import React, { useState, useEffect } from 'react';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function nonDepen() {
  const [color, setColor] = useState(randomColor());

  // _______ empty dependency array | Component Did Mount
  useEffect(() => {
    // Change the value of color variable after 500ms
    setTimeout(() => setColor('#ffffff'), 500);
    // Hanle one time only after render
  }, []);
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <p>Sau 500ms sẽ chuyển thành màu trắng</p>
      <div>
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
      </div>
    </div>
  );
}
