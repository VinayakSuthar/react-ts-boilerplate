import { useState } from 'react';
import reactLogo from 'assets/react.svg';
import viteLogo from 'assets/vite.svg';
import './App.css';
import type { Title } from 'types/index';

const initialData: Title = {
  title: 'React Boilerplate',
};

function App() {
  const [count, setCount] = useState(0);
  const { title } = initialData;

  return (
    <>
      <div>
        <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' rel='noreferrer' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{title}</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}
export default App;
