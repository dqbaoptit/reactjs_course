import React, { useState, useEffect } from 'react';

export default function nonDepen() {
  const [count, setCount] = useState(0);

  // Không recomnmend vì ko khác vì không dùng hook Effect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // document.title = `You clicked ${count} times`;

  // _________________________________________________________

  return (
    <div>
      <p>You clicked {count} times</p>
      <div className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </div>
    </div>
  );
}
