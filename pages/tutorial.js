import { useRouter } from 'next/router';
import '../styles/Tutorial.module.scss';
import HookExample from '../containers/HookExample';

export default function TutorialPage() {
  const router = useRouter();
  const { path } = router.query;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <div style={{}} className="tutorial__sidebar">
        <p style={{ textDecoration: 'underline' }}>Basic</p>
        <p className="btn" onClick={() => router.push('/tutorial?path=state')}>
          useState Hook
        </p>
        <p className="btn" onClick={() => router.push('/tutorial?path=effect')}>
          useEffect Hook
        </p>
        <p className="btn" onClick={() => router.push('/tutorial?path=ref')}>
          useRef Hook
        </p>
      </div>
      <div style={{}} className="tutorial__main">
        {path === 'state' && <HookExample.useState />}
        {path === 'effect' && <HookExample.useEffect />}
        {path === 'ref' && <HookExample.useRef />}
      </div>
    </div>
  );
}
