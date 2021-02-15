import './index.scss';

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <h2>React.JS Courses</h2>
        <img src="vercel.svg" alt="" className="img-responsive" />
      </div>
      <div className="navigation__routes"></div>
    </div>
  );
}
