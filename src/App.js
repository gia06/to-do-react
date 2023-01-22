import './App.css';
import { useEffect, useState } from 'react';
import bgLight from './assets/bg-desktop-light.jpg'

function App() {
  const [state, setState] = useState(false)

  useEffect(() => {

  }, [])

  return (
    <div className='bg-light'>
      <img src={bgLight} alt="background image"/>
    </div>
  );
}

export default App;
