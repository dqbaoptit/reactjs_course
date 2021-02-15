import { motion } from 'framer-motion';
import { CodeBlock } from '../components';
import copy from 'copy-to-clipboard';

export default function QuickStart() {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 10, opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <h3>Quick start</h3>
      <hr />
      <h5>Install NODE.JS </h5>
      <ul>
        <li style={{ marginTop: '1rem' }}>
          {' '}
          Windows 32bit :{' '}
          <a
            href="https://nodejs.org/dist/v14.15.5/node-v14.15.5-x86.msi"
            style={{ textDecoration: 'underline' }}
          >
            {' '}
            https://nodejs.org/dist/v14.15.5/node-v14.15.5-x86.msi{' '}
          </a>
        </li>
        <li style={{ marginTop: '1rem' }}>
          {' '}
          Windows 64bit :{' '}
          <a
            href="https://nodejs.org/dist/v14.15.5/node-v14.15.5-x64.msi"
            style={{ textDecoration: 'underline' }}
          >
            {' '}
            https://nodejs.org/dist/v14.15.5/node-v14.15.5-x64.msi{' '}
          </a>
        </li>
        <li style={{ marginTop: '1rem' }}>
          {' '}
          MacOS :{' '}
          <a
            href="https://nodejs.org/dist/v14.15.5/node-v14.15.5.pkg"
            style={{ textDecoration: 'underline' }}
          >
            {' '}
            https://nodejs.org/dist/v14.15.5/node-v14.15.5.pkg{' '}
          </a>
        </li>
      </ul>
      <h5>Khởi tạo React app</h5>
      <p>npx create-react-app "Tên app" </p>
      <CodeBlock
        copy={() => {
          copy('npx create-react-app my-app\ncd my-app\nnpm start');
        }}
      >
        <p>npx create-react-app my-app</p>
        <p>cd my-app</p>
        <p>npm start</p>
      </CodeBlock>
      <div style={{ height: 'auto', width: '30rem' }}>
        <img
          src="screencast.svg"
          alt=""
          className="img-responsive"
          style={{ borderRadius: '10px' }}
        />
      </div>
      <h5>Folder | App </h5>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '20rem',
            paddingBottom: '1rem',
          }}
        >
          <img src="folder.png" alt="" className="img-responsive" />
        </div>
        <div
          style={{
            width: '40rem',
            paddingBottom: '1rem',
            marginLeft: '2rem',
          }}
        >
          <img src="app.png" alt="" className="img-responsive" />
        </div>
      </div>
    </motion.div>
  );
}
