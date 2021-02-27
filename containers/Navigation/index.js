import { useRouter } from 'next/router';

import './index.scss';

const items = [
  { name: 'Test Input', route: '/' },
  { name: 'Quick start', route: '/quick-start' },
  { name: 'React Tutorial', route: '/tutorial' },
];
const Item = ({ onClick, name }) => (
  <div
    style={{
      marginRight: '2rem',
      marginLeft: '2rem',
      cursor: 'pointer',
      borderRadius: 10,
      border: '1px solid #eee',
      padding: '.5rem 1rem',
      color: '#eee',
    }}
    onClick={onClick}
  >
    {name}
  </div>
);

export default function Navigation() {
  const router = useRouter();

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <h2>React.JS Courses</h2>
        <img src="vercel.svg" alt="" className="img-responsive" />
      </div>
      <div className="navigation__routes">
        {items.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            onClick={() => router.push(item.route)}
          />
        ))}
      </div>
    </div>
  );
}
