import { useRouter } from 'next/router';

import './index.scss';

const items = [
  { name: 'Quick start', route: 'quick-start' },
  { name: 'Quick start', route: '/' },
  { name: 'Quick start', route: '2' },
];
const Item = ({ onClick, name }) => (
  <div className="sidebar__items__item" onClick={onClick}>
    {name}
  </div>
);
export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="sidebar__items">
        {items.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            onClick={() => router.push(item.route)}
          />
        ))}
      </div>
      <div className="sidebar__footer">
        <hr style={{ width: '90%' }} />

        <span>
          {`${new Date().getFullYear()} @  `}
          <span style={{ textDecoration: 'underline' }}>PATIKEDU</span>
        </span>
      </div>
    </div>
  );
}
