import { useState, useEffect } from 'react';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const sayHello = (user) => alert(`Người dùng ${user.name} : Hello`);
const sayGoodbye = (user) => alert(`Người dùng ${user.name} : Goodbye`);

const User = ({ item }) => {
  useEffect(() => {
    sayHello(item); // Say Hello khi render xong
    return () => sayGoodbye(item); // Say Goodbye khi unmount
  }, []);

  return (
    <div
      style={{
        padding: '.5rem 3rem',
        border: '1px solid #eee',
        borderRadius: 10,
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        alt=""
        className="img-responsive"
        style={{ width: '5rem' }}
      />
      <p> Người dùng {item.name}</p>
    </div>
  );
};
export default function nonDepen() {
  const [color, setColor] = useState(randomColor());

  const [user, setUser] = useState(null);

  // _______ empty dependency array | Component Did Update
  useEffect(() => {
    // Change the value of color variable after 500ms
    const change = setInterval(() => setColor(randomColor()), 2000);
    // Hanle one time only after render
    return () => clearInterval(change);
  });
  return (
    <div style={{ padding: 20 }}>
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
      </div>
      <hr />
      <div
        className="btn"
        onClick={
          user ? () => setUser(null) : () => setUser({ id: 1, name: 'Bob' })
        }
        style={{ maxWidth: '20rem', backgroundColor: '#eee' }}
      >
        {!user ? 'Kêu Bob vào nhà ' : 'Mời Bob về'}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {user && <User item={user} />}
      </div>
    </div>
  );
}
