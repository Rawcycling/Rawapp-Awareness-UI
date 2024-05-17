import './App.css'
import ScrollToTop from './components/ScrollToTop'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ScrollToTop>
      <Outlet />
      </ScrollToTop>
    </>
  )
}

export default App
