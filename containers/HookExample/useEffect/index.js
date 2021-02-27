import NonDepen from './nonDepen';
import Empty from './Empty';
import Cleanup from './Cleanup';
import Depen from './Depen';

export default function useEffectExample() {
  return (
    <div>
      <div>
        <h5>Non-dependency</h5>
        <hr />
        <NonDepen />
      </div>
      <div>
        <h5>Empty-dependency</h5>
        <hr />
        <Empty />
      </div>
      <div>
        <h5>Denpendency</h5>
        <hr />
        <Depen />
      </div>
      <div>
        <h5>Cleanup</h5>
        <hr />
        <Cleanup />
      </div>
      <a
        href="https://gist.github.com/dqbaoptit/5913adf737320a6d12dd5c24abd02b60"
        target="_blank"
      >
        See code example
      </a>
    </div>
  );
}
