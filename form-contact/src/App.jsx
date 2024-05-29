
import './App.css'

import { Outlet } from 'react-router-dom';

// Import Apps
import Forms from './routes/Form_Contact'

function App() {
  

  return (
    <>
      <Outlet />
      {/* <Forms /> */}
    </>
  )
}

export default App
